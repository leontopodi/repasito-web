import type { Dict } from '../types';

export const zhHans: Dict = {
  meta: {
    storeName: 'RePasito：舞蹈练习',
    title: 'RePasito：舞蹈练习｜循环、慢放、录像，扒舞更快',
    description:
      '把歌曲或 YouTube 视频里的任意一段单独循环、放慢、镜面翻转，每一遍都录下来。学编舞、扒舞用的舞蹈练习 App，支持 iPhone 和 Android。',
  },
  nav: { language: '语言', skip: '跳到正文' },
  hero: {
    title: '卡住的那个八拍，循环到练会为止。',
    lede: 'RePasito 按你选的速度循环播放歌曲或视频里的任意一段，每一遍都录下来。练编舞，不用再一趟趟跑去碰手机。',
    trial: '免费下载。前 3 个练习日，Pro 的全部功能免费试用。',
  },
  demo: {
    label: '互动演示：循环一个八拍',
    hint: '拖动两端，选择要循环的拍子。',
    speed: '速度',
    mirror: '镜面翻转',
    play: '播放',
    pause: '暂停',
    loopStart: '循环起点',
    loopEnd: '循环终点',
  },
  store: { appStore: '在 App Store 下载', googlePlay: '在 Google Play 下载' },
  steps: {
    title: '这样练',
    items: [
      { title: '选歌或选视频', body: '在 App 里直接搜 YouTube，粘贴 YouTube 或 Instagram 链接，或者用自己的音乐和视频。' },
      { title: '选好要练的那一段', body: '设好循环的起点和终点。还可以多加几段，边学边切换。' },
      { title: '调好速度', body: '先放慢把动作扒清楚，再慢慢提回原速。' },
      { title: '跳、录、回看', body: '把手机架好就开跳。每一遍都会录下来，跳完马上能回看，满意的存进相册。' },
    ],
  },
  details: {
    title: '专为练舞而做',
    items: [
      { title: '循环到你喊停', body: '这一段会一直循环，直到你停下来。不用每次跑回去倒带，接着跳就行。' },
      { title: '速度刚刚好', body: '新动作用 0.5 倍速，上台前接近原速。Pro 可以按 0.05 倍一档微调。' },
      { title: '镜面翻转', body: '把视频镜面翻转，就像在练功房对着镜子跟老师跳。' },
      { title: '最高画质', body: 'Pro 用最高画质录制，每一遍都把你的舞拍得清清楚楚。' },
      { title: '只存在你的手机里', body: '录的视频和导入的视频都不会上传到任何地方。' },
    ],
  },
  gestures: {
    title: '隔空操控，站在房间另一头也行',
    body: '手机架在支架上或靠在墙边，摆个姿势就能开始、停止或重录。',
    poses: ['举起一只手', 'T 字姿势', '双臂上举', '双手抱头'],
  },
  styles: {
    title: '什么舞种都能练',
    body: '韩舞翻跳、街舞、Hip-hop、Popping、Locking、Breaking、Krump、House、Waacking、Voguing、爵士、Jazz Funk、Heels、现代舞、芭蕾、中国舞、民族舞、古典舞、踢踏舞、肚皮舞、弗拉明戈、Bachata、Salsa、Kizomba、Zouk、Reggaeton、Dancehall、Afrobeats、桑巴、Forró、探戈、摇摆舞、Lindy Hop、宝莱坞、广场舞。只要是学编舞，RePasito 都用得上。',
  },
  story: {
    title: '为什么做 RePasito',
    body:
      '“准备第一支上台表演的 Bachata 编舞时，我总得一趟趟走回手机前，把同样的二十秒倒回去，再重新开录。RePasito 就是我当时最想要的 App：它循环播放我正在练的那一段，并把我跳的每一遍录下来。”',
    signature: 'RePasito 开发者 Marcin',
  },
  faq: {
    title: '常见问题',
    items: [
      { q: '怎样循环播放 YouTube 或 Instagram 舞蹈视频里的某一段？', a: '在 RePasito 里搜索视频，或者粘贴 YouTube 视频或 Instagram Reels 的链接，再把循环标记拖到想练的那一段。它会一直循环，直到你停下来。' },
      { q: '舞蹈视频可以慢放吗？', a: '可以。0.25 倍速到 2 倍速随你调，Pro 还能按 0.05 倍一档微调。' },
      { q: 'RePasito 免费吗？', a: '下载免费，下载后马上就能开始练。Pro 可以不限次数地循环、回看和保存，前 3 个练习日可免费试用。' },
      { q: 'RePasito 有 Android 版吗？', a: '有。iPhone 版在 App Store 下载，Android 版在 Google Play 下载。Apple Music 仅支持 iPhone。', android: true },
      { q: '我的视频会被上传吗？', a: '不会。录的视频和导入的视频都只保存在你自己的设备上。' },
      { q: '可以不碰手机就操作吗？', a: '可以。打开手势控制后，摆个姿势就能开始和停止录制，手机一直架在支架上就行。' },
    ],
  },
  cta: {
    title: '下一次练舞，从一个八拍开始。',
    body: 'iPhone 和 Android 均可免费下载。',
  },
  footer: { privacy: '隐私政策', support: '联系支持', languages: '语言' },
};
