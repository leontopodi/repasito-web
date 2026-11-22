import type { Dict } from '../types';

export const it: Dict = {
  meta: {
    storeName: 'RePasito: Pratica di danza',
    title: 'RePasito: Pratica di danza – coreografie in loop e al rallentatore',
    description:
      'Metti in loop qualsiasi pezzo di una canzone o di un video YouTube, rallentalo, specchialo e registra ogni prova. L’app per imparare le coreografie su iPhone e Android.',
  },
  nav: { language: 'Lingua', skip: 'Vai al contenuto' },
  hero: {
    title: 'Metti in loop gli 8 tempi che non ti entrano.',
    lede: 'RePasito ripete qualsiasi pezzo di una canzone o di un video alla velocità che scegli e registra ogni prova. Così studi la coreografia senza fare avanti e indietro dal telefono.',
    trial: 'Scaricala gratis. Prova tutte le funzioni Pro nei tuoi primi 3 giorni di allenamento.',
  },
  demo: {
    label: 'Demo interattiva: 8 tempi in loop',
    hint: 'Trascina i bordi per scegliere quali tempi ripetere.',
    speed: 'Velocità',
    mirror: 'Specchia',
    play: 'Riproduci',
    pause: 'Pausa',
    loopStart: 'Inizio del loop',
    loopEnd: 'Fine del loop',
  },
  store: { appStore: 'Scarica su App Store', googlePlay: 'Disponibile su Google Play' },
  screens: ['Esercitati in loop', 'Rallenta il ritmo', 'Una sezione alla volta', 'Con qualsiasi musica', 'Registra ogni prova'],
  steps: {
    title: 'Come funziona un allenamento',
    items: [
      { title: 'Scegli la canzone o il video', body: 'Cerca su YouTube direttamente nell’app, incolla un link di YouTube o Instagram, oppure usa la tua musica e i tuoi video.' },
      { title: 'Segna il pezzo', body: 'Imposta dove inizia e dove finisce il loop. Puoi aggiungere altri pezzi e passare dall’uno all’altro mentre impari la coreografia.' },
      { title: 'Regola la velocità', body: 'Rallenta per vedere bene ogni passo, poi aumenta piano piano fino alla velocità normale.' },
      { title: 'Balla, registra, riguardati', body: 'Appoggia il telefono e balla. Ogni prova viene registrata e la rivedi subito dopo. Le migliori le salvi nella galleria.' },
    ],
  },
  details: {
    title: 'Fatta per allenarti a ballare',
    items: [
      { title: 'Loop senza fine', body: 'Il pezzo si ripete finché non lo fermi tu. Continui a ballare invece di tornare indietro ogni volta.' },
      { title: 'La velocità giusta', body: 'A metà velocità per i passi nuovi, quasi a velocità normale prima di salire sul palco. Con Pro la regoli di 0,05× alla volta.' },
      { title: 'Specchio', body: 'Specchia il video e seguilo come se fossi davanti allo specchio della sala.' },
      { title: 'Massima qualità', body: 'Con Pro registri alla massima qualità, così il tuo ballo è nitido in ogni prova.' },
      { title: 'Resta sul tuo telefono', body: 'Le tue registrazioni e i tuoi video non vengono caricati da nessuna parte.' },
    ],
  },
  gestures: {
    title: 'A mani libere, dall’altra parte della sala',
    body: 'Avvia, ferma o rifai una prova con una posa, mentre il telefono resta sul supporto o appoggiato al muro.',
    poses: ['Mano alzata', 'Posa a T', 'Braccia in alto', 'Mani sulla testa'],
  },
  styles: {
    title: 'Per tutti gli stili',
    body: 'Bachata, salsa, kizomba, zouk, merengue, forró, samba, reggaeton, dancehall, afrobeats, hip hop, popping, locking, breakdance, krump, house, waacking, voguing, K-pop, heels, commercial, contemporaneo, modern jazz, danza classica, tip tap, flamenco, tango, swing, lindy hop, danza del ventre, Bollywood, balli di gruppo. Se stai imparando una coreo, RePasito fa per te.',
  },
  story: {
    title: 'Com’è nata l’idea di RePasito',
    body:
      '«Mentre preparavo la mia prima coreografia di bachata per uno spettacolo, continuavo a tornare al telefono per riportare indietro gli stessi venti secondi e far ripartire la registrazione. RePasito è l’app che avrei voluto allora: ripete il pezzo su cui sto lavorando e mi registra mentre ballo.»',
    signature: 'Marcin, creatore di RePasito',
  },
  faq: {
    title: 'Domande frequenti',
    items: [
      { q: 'Come metto in loop un pezzo di un video di ballo di YouTube o Instagram?', a: 'Cerca il video in RePasito oppure incolla il link di un video YouTube o di un Reel di Instagram. Poi trascina i marcatori del loop sul pezzo che vuoi provare. Si ripete finché non lo fermi.' },
      { q: 'Posso rallentare un video di ballo?', a: 'Sì. Scegli la velocità che vuoi tra 0,25× e 2×. Con Pro la regoli di 0,05× alla volta.' },
      { q: 'RePasito è gratis?', a: 'La scarichi gratis e puoi iniziare subito ad allenarti. Pro sblocca loop, revisione e salvataggio senza limiti, e lo provi gratis nei tuoi primi 3 giorni di allenamento.' },
      { q: 'RePasito c’è anche per Android?', a: 'Sì. RePasito è su App Store per iPhone e su Google Play per Android. Apple Music funziona solo su iPhone.', android: true },
      { q: 'I miei video vengono caricati online?', a: 'No. Le tue registrazioni e i tuoi video restano sul tuo dispositivo.' },
      { q: 'Posso usarla senza toccare il telefono?', a: 'Sì. Con i gesti avvii e fermi ogni prova con una posa, e il telefono resta sul supporto.' },
    ],
  },
  cta: {
    title: 'Il tuo prossimo allenamento inizia da 8 tempi.',
    body: 'Gratis per iPhone e Android.',
  },
  support: {
    description: 'Assistenza per RePasito: contatti, come ripristinare o gestire RePasito Pro e risposte alle domande più comuni.',
    contact: 'Per aiuto, domande o feedback scrivi a {email}.',
    tip: 'È utile sapere che telefono usi e cosa stavi facendo quando è comparso il problema. Puoi scrivere anche dall’app: apri Impostazioni e tocca «Invia feedback» (Send feedback).',
    purchasesTitle: 'Acquisti di RePasito Pro',
    purchases: {
      restore: { title: 'Ripristinare Pro', body: 'Nell’app apri Impostazioni, poi RePasito Pro, e tocca «Ripristina gli acquisti» (Restore Purchases). Usa l’account dello store con cui hai acquistato Pro.' },
      iphone: { title: 'Gestire o annullare su iPhone', body: 'Apri l’app Impostazioni, tocca il tuo nome e poi Abbonamenti.' },
      android: { title: 'Gestire o annullare su Android', body: 'Apri Google Play, tocca la tua immagine del profilo e poi Pagamenti e abbonamenti.' },
      refunds: { title: 'Rimborsi', body: 'Fatturazione e rimborsi sono gestiti dallo store in cui hai acquistato Pro.' },
    },
  },
  privacy: { title: 'Informativa sulla privacy', description: 'Come RePasito per iPhone e Android e il sito repasito.app trattano i tuoi dati.' },
  footer: { privacy: 'Informativa sulla privacy', support: 'Assistenza', languages: 'Lingue' },
};
