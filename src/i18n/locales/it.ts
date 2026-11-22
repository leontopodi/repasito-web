import type { Dict } from '../types';

export const it: Dict = {
  meta: {
    title: 'RePasito: app per allenarsi a ballare – ripeti, rallenta, registra',
    description:
      'Ripeti in loop qualsiasi parte di una canzone o di un video YouTube, rallentala, specchiala e registra ogni ripresa. L’app per provare le coreografie su iPhone e Android.',
  },
  nav: { language: 'Lingua', skip: 'Vai al contenuto' },
  hero: {
    title: 'Ripeti gli otto tempi che ti sfuggono sempre.',
    lede: 'RePasito ripete qualsiasi parte di una canzone o di un video alla velocità che scegli e registra ogni ripresa. Così provi la coreografia senza tornare al telefono ogni volta.',
    trial: 'Download gratuito. Prova tutte le funzioni Pro nei tuoi primi tre giorni di pratica.',
  },
  demo: {
    label: 'Demo interattiva: una frase di otto tempi in loop',
    hint: 'Trascina i bordi per scegliere quali tempi si ripetono.',
    speed: 'Velocità',
    mirror: 'Specchia',
    play: 'Riproduci',
    pause: 'Pausa',
    loopStart: 'Inizio del loop',
    loopEnd: 'Fine del loop',
  },
  store: { appStore: 'Scarica su App Store', googlePlay: 'Disponibile su Google Play' },
  steps: {
    title: 'Come va una sessione di pratica',
    items: [
      { title: 'Scegli la musica o il video', body: 'Cerca su YouTube dentro l’app, incolla un link di YouTube o Instagram, oppure apri la tua musica e i tuoi video.' },
      { title: 'Segna la sezione', body: 'Imposta dove inizia e finisce il loop. Aggiungi altre sezioni e passa dall’una all’altra mentre impari la coreografia.' },
      { title: 'Regola la velocità', body: 'Rallenta per imparare i passi, poi torna poco a poco al tempo reale.' },
      { title: 'Balla, registra, rivedi', body: 'Appoggia il telefono e balla. Ogni ripresa viene registrata e riprodotta, e salvi le migliori nella galleria.' },
    ],
  },
  details: {
    title: 'Fatta per allenarsi a ballare',
    items: [
      { title: 'Loop che non si fermano', body: 'La sezione si ripete finché non la fermi: continui a ballare invece di premere “ripeti”.' },
      { title: 'Velocità precisa', body: 'A metà velocità per i passi nuovi, quasi a tempo prima dello spettacolo. Con Pro la regoli a passi di 0,05×.' },
      { title: 'Specchia', body: 'Capovolgi il video di riferimento e seguilo come l’insegnante nello specchio della sala.' },
      { title: 'Massima qualità', body: 'Con Pro registri alla massima qualità, così il tuo ballo è nitido in ogni ripresa.' },
      { title: 'Resta sul tuo telefono', body: 'Le tue registrazioni e i video importati non vengono caricati da nessuna parte.' },
    ],
  },
  gestures: {
    title: 'Controllala dall’altra parte della sala',
    body: 'Avvia, ferma e rifai una ripresa con una posa, mentre il telefono resta sul treppiede o appoggiato al muro.',
    poses: ['Mano alzata', 'Posa a T', 'Braccia sopra la testa', 'Mani sulla testa'],
  },
  styles: {
    title: 'Per ogni stile che balli sulla musica',
    body: 'Bachata, salsa, kizomba, zouk, merengue, forró, samba, reggaeton, dancehall, afrobeats, hip hop, popping, locking, breakdance, krump, house, waacking, voguing, K-pop, heels, commercial, contemporaneo, jazz, modern, danza classica, tip tap, flamenco, tango, swing, lindy hop, danza del ventre, Bollywood, liscio. Se lo impari da un video o contando i tempi, puoi metterlo in loop.',
  },
  story: {
    title: 'Perché esiste RePasito',
    body:
      '«Mentre preparavo la mia prima coreografia di bachata per uno spettacolo, tornavo di continuo al telefono per riavvolgere gli stessi venti secondi e far partire un’altra registrazione. RePasito è l’app che volevo allora: ripete la parte su cui sto lavorando e mi registra mentre ballo.»',
    signature: 'Marcin, creatore di RePasito',
  },
  faq: {
    title: 'Domande',
    items: [
      { q: 'Come metto in loop una parte di un video di danza di YouTube o Instagram?', a: 'Cerca il video in RePasito o incolla un link di YouTube o di un Reel di Instagram, poi trascina i marcatori del loop sulla parte che vuoi. Si ripete finché non lo fermi.' },
      { q: 'Posso rallentare un video di danza?', a: 'Sì. Scegli la velocità di pratica che vuoi, da metà velocità in su. Con Pro la regoli a passi di 0,05×.' },
      { q: 'RePasito è gratis?', a: 'Puoi scaricarla e iniziare ad allenarti gratis. Pro sblocca loop, revisione e salvataggio illimitati, e lo provi gratis nei tuoi primi tre giorni di pratica.' },
      { q: 'RePasito è disponibile su Android?', a: 'Sì. RePasito è su App Store per iPhone e su Google Play per Android. Apple Music è disponibile solo su iPhone.', android: true },
      { q: 'I miei video vengono caricati online?', a: 'No. Le tue registrazioni e i file importati restano sul tuo dispositivo.' },
      { q: 'Posso usarla senza toccare il telefono?', a: 'Sì. Con il controllo dei gesti avvii e fermi le riprese con una posa, e il telefono resta al suo posto.' },
    ],
  },
  cta: {
    title: 'La tua prossima prova parte da una sezione.',
    body: 'Download gratuito per iPhone e Android.',
  },
  footer: { privacy: 'Informativa sulla privacy', support: 'Assistenza', languages: 'Lingue' },
};
