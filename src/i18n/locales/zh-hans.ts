import type { Dict } from '../types';

export const zhHans: Dict = {
  meta: {
    title: 'RePasito：舞蹈练习应用｜片段循环、慢速播放、录制',
    description:
      '循环播放歌曲或 YouTube 视频的任意片段，放慢速度、镜像翻转，并录下每一遍练习。在 iPhone 和 Android 上练习编舞的舞蹈练习应用。',
  },
  nav: { language: '语言', skip: '跳到正文' },
  hero: {
    title: '总是跳不顺的那八拍，循环到跳会为止。',
    lede: 'RePasito 以你选择的速度循环播放歌曲或视频的任意片段，并录下每一遍。练编舞时，不用一次次走回手机前。',
    trial: '免费下载。前三个练习日可免费体验全部 Pro 功能。',
  },
  demo: {
    label: '互动演示：循环播放一个八拍',
    hint: '拖动两端，选择要循环的拍子。',
    speed: '速度',
    mirror: '镜像',
    play: '播放',
    pause: '暂停',
    loopStart: '循环起点',
    loopEnd: '循环终点',
  },
  store: { appStore: '在 App Store 下载', googlePlay: '在 Google Play 下载' },
  steps: {
    title: '一次练习的流程',
    items: [
      { title: '选择音乐或视频', body: '在应用内搜索 YouTube，粘贴 YouTube 或 Instagram 链接，或打开你自己的音乐和视频。' },
      { title: '标记片段', body: '设定循环的起点和终点。可以添加更多片段，边学边切换。' },
      { title: '调整速度', body: '先放慢速度学会动作，再逐步恢复到原速。' },
      { title: '跳、录、回看', body: '把手机放好就开始跳。每一遍都会录下并回放，满意的可以保存到相册。' },
    ],
  },
  details: {
    title: '为舞蹈练习而生',
    items: [
      { title: '循环到你喊停', body: '片段会一直循环直到你停止，不用跑去点重播，可以一直跳下去。' },
      { title: '精确调速', body: '新动作用半速，演出前接近原速。Pro 可按 0.05 倍精细调节。' },
      { title: '镜像', body: '把示范视频左右翻转，像对着练功房镜子里的老师一样跟跳。' },
      { title: '最高画质', body: 'Pro 以最高画质录制，每一遍都让你的舞姿清晰利落。' },
      { title: '只保存在手机上', body: '你的录像和导入的视频不会上传到任何地方。' },
    ],
  },
  gestures: {
    title: '在房间另一头也能操控',
    body: '手机放在支架上或靠在墙边，用一个姿势就能开始、停止或重录。',
    poses: ['举手', 'T型姿势', '双臂举过头顶', '双手放在头上'],
  },
  styles: {
    title: '适合所有随音乐起舞的舞种',
    body: 'K-pop、街舞、Hip-hop、Popping、Locking、Breaking、Krump、House、Waacking、Voguing、爵士、Jazz Funk、Heels、现代舞、芭蕾、中国舞、民族舞、古典舞、踢踏舞、肚皮舞、弗拉明戈、巴恰塔、萨尔萨、基宗巴、Zouk、雷鬼动、探戈、摇摆舞、林迪舞、宝莱坞、广场舞。只要是跟着视频或数拍学的舞，都可以循环练习。',
  },
  story: {
    title: '为什么会有 RePasito',
    body:
      '“为演出准备第一支巴恰塔编舞时，我总要走回手机前，把同样的二十秒倒回去，再开始新的录制。RePasito 就是我当时想要的应用：它循环播放我正在练的片段，并在我跳舞时录下来。”',
    signature: 'RePasito 开发者 Marcin',
  },
  faq: {
    title: '常见问题',
    items: [
      { q: '怎样循环播放 YouTube 或 Instagram 舞蹈视频的某一段？', a: '在 RePasito 中搜索视频，或粘贴 YouTube 或 Instagram Reels 链接，然后把循环标记拖到想练的片段。它会一直循环，直到你停止。' },
      { q: '可以慢速播放舞蹈视频吗？', a: '可以。从半速起任选练习速度。使用 Pro 可按 0.05 倍精细调节。' },
      { q: 'RePasito 免费吗？', a: '可以免费下载并立即开始练习。Pro 可解锁无限循环、回看和保存，前三个练习日可免费体验。' },
      { q: 'RePasito 有 Android 版吗？', a: '有。iPhone 版在 App Store，Android 版在 Google Play。Apple Music 仅在 iPhone 上可用。', android: true },
      { q: '我的视频会被上传吗？', a: '不会。你的录像和导入的文件都保存在你的设备上。' },
      { q: '可以不碰手机就操作吗？', a: '可以。使用手势控制，用一个姿势就能开始和停止录制，手机一直放在支架上即可。' },
    ],
  },
  cta: {
    title: '下一次练习，从一个片段开始。',
    body: 'iPhone 和 Android 免费下载。',
  },
  footer: { privacy: '隐私政策', support: '支持', languages: '语言' },
};
