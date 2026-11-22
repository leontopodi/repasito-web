import type { Dict } from '../types';

/** Spanish for Spain, in the voice of the App Store listing for Spain. */
export const esEs: Dict = {
  meta: {
    storeName: 'RePasito: Practica tu baile',
    title: 'RePasito: Practica tu baile – repite, ralentiza y graba tus coreos',
    description:
      'Pon en bucle cualquier parte de una canción o un vídeo de YouTube, bájale la velocidad, ponlo en espejo y grábate en cada pasada. La app para sacarte coreos en iPhone y Android.',
  },
  nav: { language: 'Idioma', skip: 'Ir al contenido' },
  hero: {
    title: 'Pon en bucle los 8 tiempos que no te salen.',
    lede: 'RePasito repite cualquier parte de una canción o un vídeo a la velocidad que elijas y te graba en cada pasada. Así ensayas la coreo sin ir y venir al móvil.',
    trial: 'Descárgala gratis. Prueba todas las funciones Pro en tus 3 primeros días de práctica.',
  },
  demo: {
    label: 'Demo interactiva: 8 tiempos en bucle',
    hint: 'Arrastra los bordes para elegir qué tiempos se repiten.',
    speed: 'Velocidad',
    mirror: 'Espejo',
    play: 'Reproducir',
    pause: 'Pausar',
    loopStart: 'Inicio del bucle',
    loopEnd: 'Fin del bucle',
  },
  store: { appStore: 'Consíguelo en el App Store', googlePlay: 'Disponible en Google Play' },
  steps: {
    title: 'Así es un ensayo con RePasito',
    items: [
      { title: 'Elige la canción o el vídeo', body: 'Busca en YouTube sin salir de la app, pega un enlace de YouTube o Instagram, o usa tu música y tus vídeos.' },
      { title: 'Marca la parte', body: 'Elige dónde empieza y dónde acaba el bucle. Puedes añadir más partes y pasar de una a otra mientras te sacas la coreo.' },
      { title: 'Ajusta la velocidad', body: 'Bájala para pillar los pasos y ve subiéndola hasta bailar a ritmo normal.' },
      { title: 'Baila, grábate y mírate', body: 'Coloca el móvil y baila. Cada pasada se graba y la ves al terminar. Las mejores tomas las guardas en tu galería.' },
    ],
  },
  details: {
    title: 'Hecha para practicar baile',
    items: [
      { title: 'Bucle sin fin', body: 'La parte se repite hasta que tú la pares. Sigues bailando en vez de rebobinar cada dos por tres.' },
      { title: 'La velocidad justa', body: 'A media velocidad para los pasos nuevos, casi a ritmo normal antes de actuar. Con Pro la ajustas de 0,05× en 0,05×.' },
      { title: 'Espejo', body: 'Pon el vídeo en espejo y síguelo como si bailaras delante del espejo de la sala.' },
      { title: 'Máxima calidad', body: 'Con Pro grabas en la máxima calidad, para que tu baile se vea nítido en cada toma.' },
      { title: 'Se queda en tu móvil', body: 'Tus grabaciones y tus vídeos no se suben a ningún sitio.' },
    ],
  },
  gestures: {
    title: 'Contrólala desde la otra punta de la sala',
    body: 'Empieza, para o repite una toma con una pose, mientras el móvil se queda en su soporte o apoyado en la pared.',
    poses: ['Mano levantada', 'Pose en T', 'Brazos arriba', 'Manos en la cabeza'],
  },
  styles: {
    title: 'Para todos los estilos',
    body: 'Bachata, salsa, kizomba, zouk, merengue, cumbia, forró, samba, reguetón, dancehall, afrobeats, hip hop, popping, locking, breakdance, krump, house, waacking, voguing, K-pop, heels, commercial, contemporáneo, jazz, lírico, ballet, claqué, flamenco, tango, swing, lindy hop, danza del vientre, Bollywood, line dance. Si aprendes coreos, RePasito es para ti.',
  },
  story: {
    title: 'Cómo nació RePasito',
    body:
      '«Cuando preparaba mi primera coreo de bachata para una actuación, me pasaba el rato yendo al móvil para rebobinar los mismos veinte segundos y volver a grabar. RePasito es la app que echaba en falta entonces: repite la parte que estoy trabajando y me graba mientras bailo.»',
    signature: 'Marcin, creador de RePasito',
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      { q: '¿Cómo pongo en bucle una parte de un vídeo de baile de YouTube o Instagram?', a: 'Busca el vídeo en RePasito o pega el enlace de un vídeo de YouTube o de un Reel de Instagram. Después arrastra los marcadores del bucle hasta la parte que quieres ensayar. Se repite hasta que la pares.' },
      { q: '¿Puedo ver un vídeo de baile a cámara lenta?', a: 'Sí. Eliges la velocidad que quieras entre 0,25× y 2×. Con Pro la ajustas de 0,05× en 0,05×.' },
      { q: '¿RePasito es gratis?', a: 'Te la descargas gratis y puedes empezar a practicar al momento. Pro te da bucles, revisión y guardado sin límite, y lo pruebas gratis en tus 3 primeros días de práctica.' },
      { q: '¿RePasito está en Android?', a: 'Sí. Está en el App Store para iPhone y en Google Play para Android. Apple Music solo funciona en iPhone.', android: true },
      { q: '¿Se suben mis vídeos a algún sitio?', a: 'No. Tus grabaciones y tus vídeos se quedan en tu dispositivo.' },
      { q: '¿Puedo usarla sin tocar el móvil?', a: 'Sí. Con los gestos empiezas y paras cada toma con una pose, así que el móvil se queda en su soporte.' },
    ],
  },
  cta: {
    title: 'Tu próximo ensayo empieza con 8 tiempos.',
    body: 'Gratis para iPhone y Android.',
  },
  footer: { privacy: 'Política de privacidad', support: 'Soporte', languages: 'Idiomas' },
};
