import type { Dict } from '../types';

export const pl: Dict = {
  meta: {
    title: 'RePasito: aplikacja do ćwiczenia tańca – pętla, zwolnienie, nagrywanie',
    description:
      'Zapętl dowolny fragment piosenki lub filmu z YouTube, zwolnij go, odbij lustrzanie i nagraj każde ujęcie. Aplikacja do ćwiczenia choreografii na iPhone’a i Androida.',
  },
  nav: { language: 'Język', skip: 'Przejdź do treści' },
  hero: {
    title: 'Zapętl osiem taktów, które ciągle ci uciekają.',
    lede: 'RePasito powtarza dowolny fragment piosenki lub filmu w wybranym tempie i nagrywa każde ujęcie. Ćwiczysz choreografię bez ciągłego chodzenia do telefonu.',
    trial: 'Pobierz za darmo. Wypróbuj wszystkie funkcje Pro przez pierwsze trzy dni ćwiczeń.',
  },
  demo: {
    label: 'Interaktywne demo: fraza na osiem w pętli',
    hint: 'Przeciągnij krawędzie, aby wybrać, które takty się powtarzają.',
    speed: 'Tempo',
    mirror: 'Odbij',
    play: 'Odtwórz',
    pause: 'Wstrzymaj',
    loopStart: 'Początek pętli',
    loopEnd: 'Koniec pętli',
  },
  store: { appStore: 'Pobierz z App Store', googlePlay: 'Pobierz z Google Play' },
  steps: {
    title: 'Jak wygląda sesja ćwiczeń',
    items: [
      { title: 'Wybierz muzykę lub film', body: 'Szukaj na YouTube w aplikacji, wklej link z YouTube lub Instagrama albo otwórz własną muzykę i filmy.' },
      { title: 'Zaznacz fragment', body: 'Ustaw początek i koniec pętli. Dodawaj kolejne fragmenty i przechodź między nimi, gdy uczysz się układu.' },
      { title: 'Ustaw tempo', body: 'Zwolnij, żeby nauczyć się kroków, a potem stopniowo wracaj do pełnego tempa.' },
      { title: 'Tańcz, nagrywaj, oglądaj', body: 'Postaw telefon i tańcz. Każde ujęcie jest nagrywane i odtwarzane, a najlepsze zapisujesz w galerii.' },
    ],
  },
  details: {
    title: 'Stworzona do ćwiczenia tańca',
    items: [
      { title: 'Pętla bez końca', body: 'Fragment powtarza się, dopóki go nie zatrzymasz, więc tańczysz dalej zamiast klikać „powtórz”.' },
      { title: 'Dokładne tempo', body: 'Połowa tempa przy nowych krokach, prawie pełne przed występem. W Pro ustawiasz je co 0,05×.' },
      { title: 'Odbicie lustrzane', body: 'Odwróć film wzorcowy i podążaj za nim jak za instruktorem w lustrze sali.' },
      { title: 'Najwyższa jakość', body: 'Z Pro nagrywasz w najwyższej jakości, więc twój taniec wygląda ostro w każdym ujęciu.' },
      { title: 'Zostaje w telefonie', body: 'Twoje nagrania i importowane filmy nigdzie nie są wysyłane.' },
    ],
  },
  gestures: {
    title: 'Sterowanie z drugiego końca sali',
    body: 'Rozpocznij, zatrzymaj i powtórz ujęcie pozą ciała, gdy telefon stoi na statywie albo przy ścianie.',
    poses: ['Podniesiona ręka', 'Pozycja T', 'Ramiona nad głową', 'Ręce na głowie'],
  },
  styles: {
    title: 'Do każdego stylu, który ćwiczysz z muzyką',
    body: 'Bachata, salsa, kizomba, zouk, merengue, forró, samba, reggaeton, dancehall, afrobeats, hip-hop, popping, locking, breakdance, krump, house, waacking, voguing, K-pop, heels, commercial, contemporary, jazz, modern, balet, stepowanie, flamenco, tango, swing, lindy hop, taniec brzucha, Bollywood, taniec towarzyski. Jeśli uczysz się z filmu albo na liczenie, możesz to zapętlić.',
  },
  story: {
    title: 'Skąd się wzięło RePasito',
    body:
      '„Kiedy przygotowywałem swoją pierwszą choreografię bachaty na występ, ciągle wracałem do telefonu, żeby przewinąć te same dwadzieścia sekund i włączyć kolejne nagranie. RePasito to aplikacja, której wtedy potrzebowałem: zapętla fragment, nad którym pracuję, i nagrywa mnie, gdy tańczę.”',
    signature: 'Marcin, twórca RePasito',
  },
  faq: {
    title: 'Pytania',
    items: [
      { q: 'Jak zapętlić fragment tanecznego filmu z YouTube lub Instagrama?', a: 'Wyszukaj film w RePasito albo wklej link z YouTube lub do rolki z Instagrama i przeciągnij znaczniki pętli na wybrany fragment. Powtarza się, dopóki go nie zatrzymasz.' },
      { q: 'Czy mogę zwolnić film taneczny?', a: 'Tak. Wybierz dowolne tempo ćwiczeń, od połowy prędkości w górę. W Pro ustawisz je co 0,05×.' },
      { q: 'Czy RePasito jest darmowe?', a: 'Możesz je pobrać i zacząć ćwiczyć za darmo. Pro odblokowuje nielimitowane pętle, przeglądanie i zapisywanie, a przez pierwsze trzy dni ćwiczeń masz je za darmo.' },
      { q: 'Czy RePasito jest na Androida?', a: 'Tak. RePasito jest w App Store na iPhone’a i w Google Play na Androida. Apple Music działa tylko na iPhonie.', android: true },
      { q: 'Czy moje filmy są wysyłane do internetu?', a: 'Nie. Twoje nagrania i importowane pliki zostają na urządzeniu.' },
      { q: 'Czy mogę korzystać bez dotykania telefonu?', a: 'Tak. Dzięki sterowaniu gestami zaczynasz i kończysz ujęcia pozą ciała, a telefon zostaje na swoim miejscu.' },
    ],
  },
  cta: {
    title: 'Twój następny trening zaczyna się od jednego fragmentu.',
    body: 'Za darmo na iPhone’a i Androida.',
  },
  footer: { privacy: 'Polityka prywatności', support: 'Pomoc', languages: 'Języki' },
};
