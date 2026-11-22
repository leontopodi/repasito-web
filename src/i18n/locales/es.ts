import type { Dict } from '../types';

/** Latin American Spanish, in the voice of the App Store listing for Mexico. */
export const es: Dict = {
  meta: {
    storeName: 'RePasito: Practica tu baile',
    title: 'RePasito: Practica tu baile – repite, ralentiza y graba tus coreos',
    description:
      'Pon en loop cualquier parte de una canción o un video de YouTube, bájale la velocidad, voltéalo en espejo y graba cada intento. La app para aprenderte coreos en iPhone y Android.',
  },
  nav: { language: 'Idioma', skip: 'Ir al contenido' },
  hero: {
    title: 'Pon en loop los 8 tiempos que no te salen.',
    lede: 'RePasito repite cualquier parte de una canción o un video a la velocidad que elijas y graba cada intento. Así practicas tu coreo sin ir y venir al celular.',
    trial: 'Descárgala gratis. Prueba todas las funciones Pro en tus primeros 3 días de práctica.',
  },
  demo: {
    label: 'Demo interactiva: 8 tiempos en loop',
    hint: 'Arrastra los bordes para elegir qué tiempos se repiten.',
    speed: 'Velocidad',
    mirror: 'Espejo',
    play: 'Reproducir',
    pause: 'Pausar',
    loopStart: 'Inicio del loop',
    loopEnd: 'Fin del loop',
  },
  store: { appStore: 'Descárgalo en el App Store', googlePlay: 'Disponible en Google Play' },
  steps: {
    title: 'Así es una práctica',
    items: [
      { title: 'Elige la canción o el video', body: 'Busca en YouTube sin salir de la app, pega un link de YouTube o Instagram, o usa tu propia música y tus videos.' },
      { title: 'Marca la parte', body: 'Elige dónde empieza y dónde termina el loop. Puedes agregar más partes y pasar de una a otra mientras te aprendes la coreo.' },
      { title: 'Ajusta la velocidad', body: 'Bájale para sacar los pasos y ve subiéndole hasta llegar a la velocidad normal.' },
      { title: 'Baila, graba y revisa', body: 'Acomoda el celular y baila. Cada intento se graba y lo ves al terminar. Los mejores los guardas en tu galería.' },
    ],
  },
  details: {
    title: 'Hecha para practicar baile',
    items: [
      { title: 'Loop sin parar', body: 'La parte se repite hasta que tú la detengas. Sigues bailando en vez de regresar el video cada vez.' },
      { title: 'La velocidad exacta', body: 'A media velocidad para los pasos nuevos, casi a velocidad normal antes de la presentación. Con Pro la ajustas de 0.05× en 0.05×.' },
      { title: 'Espejo', body: 'Voltea el video en espejo y síguelo como si bailaras frente al espejo del salón.' },
      { title: 'Máxima calidad', body: 'Con Pro grabas en la máxima calidad, para que tu baile se vea nítido en cada toma.' },
      { title: 'Se queda en tu celular', body: 'Tus grabaciones y tus videos no se suben a ningún lado.' },
    ],
  },
  gestures: {
    title: 'Contrólala desde el otro lado del salón',
    body: 'Empieza, detén o repite una toma con una pose, mientras el celular se queda en su soporte o apoyado en la pared.',
    poses: ['Mano levantada', 'Pose en T', 'Brazos arriba', 'Manos en la cabeza'],
  },
  styles: {
    title: 'Bailes lo que bailes',
    body: 'Bachata, salsa, kizomba, zouk, merengue, cumbia, forró, samba, reggaetón, dancehall, afrobeats, hip hop, popping, locking, breakdance, krump, house, waacking, voguing, K-pop, heels, commercial, contemporáneo, jazz, lírico, ballet, tap, flamenco, tango, swing, lindy hop, danza árabe, Bollywood, line dance. Si aprendes coreos, RePasito es para ti.',
  },
  story: {
    title: 'Cómo nació RePasito',
    body:
      '“Cuando preparaba mi primera coreo de bachata para un show, me la pasaba yendo al celular para regresar los mismos veinte segundos y volver a grabar. RePasito es la app que me hacía falta en ese momento: repite la parte que estoy practicando y me graba mientras bailo.”',
    signature: 'Marcin, creador de RePasito',
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      { q: '¿Cómo pongo en loop una parte de un video de baile de YouTube o Instagram?', a: 'Busca el video en RePasito o pega el link de un video de YouTube o de un Reel de Instagram. Luego arrastra los marcadores del loop a la parte que quieres practicar. Se repite hasta que la detengas.' },
      { q: '¿Puedo ver un video de baile más lento?', a: 'Sí. Eliges la velocidad que quieras entre 0.25× y 2×. Con Pro la ajustas de 0.05× en 0.05×.' },
      { q: '¿RePasito es gratis?', a: 'La descargas gratis y puedes empezar a practicar de inmediato. Pro te da loops, revisión y guardado sin límite, y lo pruebas gratis en tus primeros 3 días de práctica.' },
      { q: '¿RePasito está en Android?', a: 'Sí. Está en el App Store para iPhone y en Google Play para Android. Apple Music solo funciona en iPhone.', android: true },
      { q: '¿Mis videos se suben a algún lado?', a: 'No. Tus grabaciones y tus videos se quedan en tu dispositivo.' },
      { q: '¿Puedo usarla sin tocar el celular?', a: 'Sí. Con los gestos empiezas y detienes cada toma con una pose, así que el celular se queda en su soporte.' },
    ],
  },
  cta: {
    title: 'Tu próxima práctica empieza con 8 tiempos.',
    body: 'Gratis para iPhone y Android.',
  },
  footer: { privacy: 'Política de privacidad', support: 'Soporte', languages: 'Idiomas' },
};
