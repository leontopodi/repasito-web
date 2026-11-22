/**
 * The RePasito launch-screen dancer, ported from the iOS app
 * (dance-app: RePasito/App/LaunchDancer.swift, LaunchDancerPaths.swift).
 * Same rig, paths and heel-toe / alternating-reach groove; drawn with Canvas 2D
 * in the artwork's 1024×1024 coordinate space.
 */

const INK = '#060708';
const WHITE = '#F2F4F3';
const MINT = '#2BD9A0';

/** Length of one groove cycle in seconds, as in the app. */
export const GROOVE_SECONDS = 3;

const PATHS = {
  mintShoe: 'M-5 -20Q-22 -11 -57 5Q-61 7 -58 13L-34 49L-34 81Q-34 97 -19 97L13 97Q15 84 6 80L-1 76L10 18Z',
  whiteShoe: 'M-20 -5L18 17L-13 73L-61 73Q-65 66 -57 55L-49 52L-28 8Z',
  torso:
    'M471 255C487 265 510 274 521 268Q537 275 540 303C529 344 523 372 531 398C538 427 564 452 579 478L509 503C485 472 462 448 443 418C417 381 416 354 426 319C436 293 453 268 471 255Z',
  shirt: 'M471 255C487 265 510 274 521 268Q537 275 540 303C504 348 466 386 443 418C417 381 416 354 426 319C436 293 453 268 471 255Z',
  head: 'M466 159C452 174 446 190 447 209C448 241 469 264 499 267C531 271 557 249 563 219L564 194Z',
  cap: 'M460 160C474 131 487 116 510 116Q523 116 531 119Q535 115 542 121C569 133 582 151 581 166L576 197Z',
} as const;

interface Point {
  x: number;
  y: number;
}

export interface DancePose {
  hip: Point;
  whiteAnkle: Point;
  mintAnkle: Point;
  whiteKnee: Point;
  mintKnee: Point;
  shoulder: Point;
  rearShoulder: Point;
  rearElbow: Point;
  raisedHand: Point;
  frontElbow: Point;
  frontHand: Point;
  angle: number;
  nod: number;
  whiteFootAngle: number;
  mintFootAngle: number;
}

const p = (x: number, y: number): Point => ({ x, y });
const mix = (a: number, b: number, t: number) => a + (b - a) * t;

function polar(point: Point, length: number, degrees: number): Point {
  const a = (degrees * Math.PI) / 180;
  return p(point.x + length * Math.sin(a), point.y + length * Math.cos(a));
}

function bend(a: Point, b: Point, upper: number, lower: number, side: number): Point {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const distance = Math.hypot(dx, dy);
  const along = (upper * upper - lower * lower + distance * distance) / (2 * distance);
  const height = Math.sqrt(Math.max(0, upper * upper - along * along));
  return p(a.x + (dx / distance) * along - (dy / distance) * height * side, a.y + (dy / distance) * along + (dx / distance) * height * side);
}

function armAngles(shoulder: Point, hand: Point, upper: number, lower: number, side: number): [number, number] {
  const elbow = bend(shoulder, hand, upper, lower, side);
  return [
    (Math.atan2(elbow.x - shoulder.x, elbow.y - shoulder.y) * 180) / Math.PI,
    (Math.atan2(hand.x - elbow.x, hand.y - elbow.y) * 180) / Math.PI,
  ];
}

const LOCAL_REAR = p(472, 274);
const LOCAL_FRONT = p(540, 303);
const LEFT_UP = armAngles(LOCAL_REAR, p(338, 148), 130, 103, -1);
const RIGHT_UP = armAngles(LOCAL_FRONT, p(715, 157), 124, 133, 1);

/** Pose at `time` seconds into the groove. */
export function dancePose(time: number): DancePose {
  const cycle = ((time % GROOVE_SECONDS) + GROOVE_SECONDS) % GROOVE_SECONDS;
  const q = (2 * Math.PI * cycle) / GROOVE_SECONDS;
  const beat = Math.sin(2 * q);
  const hip = p(545 + 20 * beat, 494 + 12 * (1 - Math.cos(4 * q)));
  const angle = 0.055 * beat;
  const whiteAnkle = p(438 + 24 * beat, 778 - 8 * Math.cos(4 * q));
  const mintAnkle = p(617 - 24 * beat, 751 - 8 * Math.cos(4 * q));

  const leftAmount = (1 - Math.cos(q)) / 2;
  const rightAmount = (1 + Math.cos(q)) / 2;
  const leftRest = [-32 + 2.5 * beat, -8 + 3 * Math.sin(2 * q - 0.2)] as const;
  const rightRest = [22 - 2.5 * beat, 10 - 3 * Math.sin(2 * q - 0.2)] as const;
  const leftElbow = polar(LOCAL_REAR, 130, mix(leftRest[0], LEFT_UP[0], leftAmount));
  const leftHand = polar(leftElbow, 103, mix(leftRest[1], LEFT_UP[1], leftAmount));
  const rightElbow = polar(LOCAL_FRONT, 124, mix(rightRest[0], RIGHT_UP[0], rightAmount));
  const rightHand = polar(rightElbow, 133, mix(rightRest[1], RIGHT_UP[1], rightAmount));

  const body = (point: Point): Point => {
    const x = point.x - 555;
    const y = point.y - 491;
    return p(hip.x + x * Math.cos(angle) - y * Math.sin(angle), hip.y + x * Math.sin(angle) + y * Math.cos(angle));
  };

  return {
    hip,
    angle,
    nod: -0.065 * beat,
    whiteAnkle,
    mintAnkle,
    whiteFootAngle: 11 * beat,
    mintFootAngle: -11 * beat,
    whiteKnee: bend(hip, whiteAnkle, 184, 188, 1),
    mintKnee: bend(hip, mintAnkle, 172, 170, -1),
    rearShoulder: body(LOCAL_REAR),
    shoulder: body(LOCAL_FRONT),
    rearElbow: body(leftElbow),
    raisedHand: body(leftHand),
    frontElbow: body(rightElbow),
    frontHand: body(rightHand),
  };
}

let cachedPaths: Record<keyof typeof PATHS, Path2D> | undefined;

function paths(): Record<keyof typeof PATHS, Path2D> {
  cachedPaths ??= Object.fromEntries(Object.entries(PATHS).map(([k, d]) => [k, new Path2D(d)])) as Record<keyof typeof PATHS, Path2D>;
  return cachedPaths;
}

/** Draws the dancer into `ctx`, which must already be scaled to the 1024×1024 artwork space. */
export function drawDancer(ctx: CanvasRenderingContext2D, pose: DancePose): void {
  const shapes = paths();

  const shape = (path: Path2D, color: string) => {
    ctx.fillStyle = color;
    ctx.fill(path);
    ctx.strokeStyle = INK;
    ctx.lineWidth = 6;
    ctx.lineJoin = 'round';
    ctx.stroke(path);
  };
  const limb = (a: Point, b: Point, width: number, color: string) => {
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = INK;
    ctx.lineWidth = width + 7;
    ctx.stroke();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
  };
  const joint = (c: Point, radius: number, color: string) => {
    const circle = new Path2D();
    circle.arc(c.x, c.y, radius, 0, Math.PI * 2);
    shape(circle, color);
  };
  const shoe = (path: Path2D, ankle: Point, degrees: number, color: string) => {
    ctx.save();
    ctx.translate(ankle.x, ankle.y);
    ctx.rotate((degrees * Math.PI) / 180);
    shape(path, color);
    ctx.restore();
  };

  shoe(shapes.mintShoe, pose.mintAnkle, pose.mintFootAngle, MINT);
  limb(pose.hip, pose.mintKnee, 51, MINT);
  limb(pose.mintKnee, pose.mintAnkle, 45, MINT);
  joint(pose.mintKnee, 27, MINT);
  joint(pose.mintAnkle, 25, MINT);

  shoe(shapes.whiteShoe, pose.whiteAnkle, pose.whiteFootAngle, WHITE);
  limb(pose.hip, pose.whiteKnee, 51, WHITE);
  limb(pose.whiteKnee, pose.whiteAnkle, 43, WHITE);
  joint(pose.whiteKnee, 26, WHITE);
  joint(pose.whiteAnkle, 26, WHITE);

  limb(pose.rearShoulder, pose.rearElbow, 45, WHITE);
  limb(pose.rearElbow, pose.raisedHand, 40, WHITE);
  joint(pose.rearElbow, 25, WHITE);
  joint(pose.raisedHand, 26, WHITE);

  // Torso, shirt and head move with the hip and rotate around it.
  ctx.save();
  ctx.translate(pose.hip.x, pose.hip.y);
  ctx.rotate(pose.angle);
  ctx.translate(-555, -491);
  shape(shapes.torso, MINT);
  shape(shapes.shirt, WHITE);
  ctx.restore();

  joint(pose.hip, 28, WHITE);
  limb(pose.shoulder, pose.frontElbow, 43, WHITE);
  limb(pose.frontElbow, pose.frontHand, 40, WHITE);
  joint(pose.frontElbow, 25, WHITE);
  joint(pose.shoulder, 25, WHITE);
  joint(pose.frontHand, 25, WHITE);

  ctx.save();
  ctx.translate(pose.hip.x, pose.hip.y);
  ctx.rotate(pose.angle);
  ctx.translate(-555, -491);
  ctx.translate(482, 265);
  ctx.rotate(pose.nod);
  ctx.translate(-482, -265);
  shape(shapes.head, MINT);
  shape(shapes.cap, WHITE);
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(461, 161);
  ctx.lineTo(607, 211);
  ctx.strokeStyle = INK;
  ctx.lineWidth = 12;
  ctx.stroke();
  ctx.strokeStyle = WHITE;
  ctx.lineWidth = 6;
  ctx.stroke();
  ctx.restore();
}
