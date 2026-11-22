/** Copy for one locale. Every locale must provide every key (enforced by the compiler). */
export interface Dict {
  meta: {
    /** App name exactly as on the App Store and Google Play listing for this language. */
    storeName: string;
    title: string;
    description: string;
  };
  nav: {
    language: string;
    skip: string;
  };
  hero: {
    title: string;
    lede: string;
    trial: string;
  };
  demo: {
    label: string;
    hint: string;
    speed: string;
    mirror: string;
    play: string;
    pause: string;
    loopStart: string;
    loopEnd: string;
  };
  store: {
    appStore: string;
    googlePlay: string;
  };
  steps: {
    title: string;
    items: ReadonlyArray<{ title: string; body: string }>;
  };
  details: {
    title: string;
    items: ReadonlyArray<{ title: string; body: string }>;
  };
  gestures: {
    title: string;
    body: string;
    poses: readonly [string, string, string, string];
  };
  styles: {
    title: string;
    body: string;
  };
  story: {
    title: string;
    body: string;
    signature: string;
  };
  faq: {
    title: string;
    items: ReadonlyArray<{ q: string; a: string; android?: boolean }>;
  };
  cta: {
    title: string;
    body: string;
  };
  footer: {
    privacy: string;
    support: string;
    languages: string;
  };
}
