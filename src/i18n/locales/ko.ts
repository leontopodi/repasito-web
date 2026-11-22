import type { Dict } from '../types';

export const ko: Dict = {
  meta: {
    storeName: 'RePasito: 댄스 연습',
    title: 'RePasito: 댄스 연습 – 안무 구간 반복·느리게 재생·촬영',
    description:
      '노래나 YouTube 영상에서 원하는 구간만 반복하고, 느리게 돌리고, 좌우반전해서 출 때마다 찍어 보세요. iPhone과 Android에서 쓰는 안무 연습 앱이에요.',
  },
  nav: { language: '언어', skip: '본문으로 건너뛰기' },
  hero: {
    // Non-breaking space keeps “될 때까지” on one line.
    title: '막히는 8카운트, 될\u00a0때까지 반복하세요.',
    lede: 'RePasito는 노래나 영상의 원하는 구간을 원하는 속도로 반복해 주고, 출 때마다 찍어 줘요. 폰까지 왔다 갔다 할 필요 없이 안무 연습에만 집중하세요.',
    trial: '다운로드는 무료예요. 연습한 날 기준으로 처음 3일 동안 Pro 기능을 전부 무료로 써 볼 수 있어요.',
  },
  demo: {
    label: '직접 해 보는 데모: 8카운트 구간 반복',
    hint: '양쪽 끝을 드래그해서 반복할 카운트를 골라 보세요.',
    speed: '속도',
    mirror: '좌우반전',
    play: '재생',
    pause: '일시정지',
    loopStart: '반복 시작 지점',
    loopEnd: '반복 끝 지점',
  },
  store: { appStore: 'App Store에서 다운로드', googlePlay: 'Google Play에서 다운로드' },
  screens: ['반복하며 연습하세요', '속도를 늦추세요', '한 구간씩 집중 연습', '원하는 음악으로 연습하세요', '모든 테이크를 녹화하세요'],
  steps: {
    title: '이렇게 연습해요',
    items: [
      { title: '노래나 영상 고르기', body: '앱 안에서 바로 YouTube를 검색하거나, YouTube나 Instagram 링크를 붙여 넣으세요. 내 음악과 영상도 불러올 수 있어요.' },
      { title: '구간 정하기', body: '반복이 시작되는 지점과 끝나는 지점을 정해요. 구간을 더 만들어 두고 안무를 익히면서 넘나들 수 있어요.' },
      { title: '속도 맞추기', body: '느리게 돌려서 동작을 딴 다음, 원래 속도까지 천천히 올려요.' },
      { title: '추고, 찍고, 다시 보기', body: '폰을 세워 두고 추기만 하면 돼요. 출 때마다 찍어서 바로 다시 볼 수 있고, 잘 나온 테이크는 갤러리에 저장해요.' },
    ],
  },
  details: {
    title: '춤 연습을 위해 만든 앱',
    items: [
      { title: '멈출 때까지 무한반복', body: '구간은 멈출 때까지 계속 반복돼요. 매번 되감으러 가지 않고 계속 출 수 있어요.' },
      { title: '딱 맞는 속도', body: '새 동작은 0.5배속으로, 무대 직전에는 거의 원래 속도로. Pro에서는 0.05배속 단위로 조절돼요.' },
      { title: '좌우반전', body: '영상을 좌우반전하면 연습실 거울 속 선생님을 보듯 따라 출 수 있어요.' },
      { title: '최고 화질', body: 'Pro는 최고 화질로 찍어서, 어느 테이크든 춤이 선명하게 담겨요.' },
      { title: '영상은 내 폰에만', body: '찍은 영상도, 불러온 영상도 어디에도 업로드되지 않아요.' },
    ],
  },
  gestures: {
    title: '멀리서도 폰 안 만지고',
    body: '폰은 거치대나 벽에 세워 두세요. 포즈만 취하면 테이크를 시작하고, 멈추고, 다시 찍을 수 있어요.',
    poses: ['한 손 들기', 'T자 포즈', '양팔 위로', '양손 머리에'],
  },
  styles: {
    title: '장르 상관없이',
    body: 'K-POP 커버댄스, 힙합, 걸스힙합, 코레오, 팝핀, 락킹, 브레이크댄스, 크럼프, 하우스, 왁킹, 보깅, 힐댄스, 재즈, 재즈펑크, 현대무용, 한국무용, 발레, 탭댄스, 벨리댄스, 플라멩코, 바차타, 살사, 삼바, 포호, 키좀바, 주크, 레게톤, 댄스홀, 아프로비츠, 탱고, 스윙, 린디합, 볼리우드까지. 안무를 배우는 분이라면 RePasito가 딱 맞아요.',
  },
  story: {
    title: 'RePasito를 만든 이유',
    body:
      '“공연에 올릴 첫 바차타 안무를 준비할 때, 같은 20초를 되감고 다시 찍으려고 계속 폰까지 왔다 갔다 했어요. RePasito는 그때 제가 갖고 싶었던 앱이에요. 연습하는 구간을 반복해 주고, 추는 모습을 찍어 줘요.”',
    signature: 'RePasito 개발자 Marcin',
  },
  faq: {
    title: '자주 묻는 질문',
    items: [
      { q: 'YouTube나 Instagram 댄스 영상에서 일부 구간만 반복하려면 어떻게 하나요?', a: 'RePasito에서 영상을 검색하거나 YouTube 영상 또는 Instagram 릴스 링크를 붙여 넣으세요. 그다음 반복 마커를 연습할 구간에 맞게 드래그하면 돼요. 멈출 때까지 계속 반복돼요.' },
      { q: '댄스 영상을 느리게 볼 수 있나요?', a: '네. 0.25배속부터 2배속까지 고를 수 있고, Pro에서는 0.05배속 단위로 조절돼요.' },
      { q: 'RePasito는 무료인가요?', a: '다운로드는 무료이고 바로 연습을 시작할 수 있어요. Pro를 쓰면 구간 반복, 다시 보기, 저장을 제한 없이 쓸 수 있고, 연습한 날 기준 3일 동안 무료로 체험할 수 있어요.' },
      { q: 'Android에서도 쓸 수 있나요?', a: '네. iPhone은 App Store에서, Android는 Google Play에서 받을 수 있어요. Apple Music은 iPhone에서만 돼요.', android: true },
      { q: '제 영상이 어딘가에 업로드되나요?', a: '아니요. 찍은 영상과 불러온 영상은 내 기기에만 저장돼요.' },
      { q: '폰을 안 만지고 쓸 수 있나요?', a: '네. 제스처를 켜면 포즈만으로 테이크를 시작하고 멈출 수 있어서, 폰은 거치대에 그대로 두면 돼요.' },
    ],
  },
  cta: {
    title: '다음 연습은 8카운트부터.',
    body: 'iPhone과 Android에서 무료로 받을 수 있어요.',
  },
  support: {
    description: 'RePasito 지원: 문의 방법, RePasito Pro 복원 및 관리, 자주 묻는 질문에 대한 답변.',
    contact: '도움이 필요하거나 문의, 의견이 있으면 {email} 주소로 메일을 보내 주세요.',
    tip: '사용 중인 휴대폰 기종과 문제가 생겼을 때 하던 동작을 함께 알려 주시면 도움이 돼요. 앱에서도 보낼 수 있어요. 설정을 열고 ‘피드백 보내기’(Send feedback)를 탭하세요.',
    purchasesTitle: 'RePasito Pro 구매',
    purchases: {
      restore: { title: 'Pro 복원하기', body: '앱에서 설정 → RePasito Pro를 열고 ‘구매 복원’(Restore Purchases)을 탭하세요. Pro를 구매한 스토어 계정을 사용해야 해요.' },
      iphone: { title: 'iPhone에서 관리 또는 해지하기', body: '설정 앱을 열고 내 이름을 탭한 다음 ‘구독’을 탭하세요.' },
      android: { title: 'Android에서 관리 또는 해지하기', body: 'Google Play를 열고 프로필 사진을 탭한 다음 ‘결제 및 정기 결제’를 탭하세요.' },
      refunds: { title: '환불', body: '결제와 환불은 Pro를 구매한 스토어에서 처리해요.' },
    },
  },
  privacy: { title: '개인정보 처리방침', description: 'iPhone용·Android용 RePasito와 repasito.app 웹사이트가 데이터를 처리하는 방식.' },
  footer: { privacy: '개인정보 처리방침', support: '고객 지원', languages: '언어' },
};
