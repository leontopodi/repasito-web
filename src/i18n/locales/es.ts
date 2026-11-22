import type { Dict } from '../types';

export const es: Dict = {
  meta: {
    title: 'RePasito: app para practicar baile – repite, ralentiza y graba',
    description:
      'Repite cualquier parte de una canción o un video de YouTube, bájale la velocidad, reflejalo y graba cada toma. La app para practicar coreografías en iPhone y Android.',
  },
  nav: { language: 'Idioma', skip: 'Ir al contenido' },
  hero: {
    title: 'Repite los ocho tiempos que siempre se te escapan.',
    lede: 'RePasito repite en bucle cualquier parte de una canción o un video a la velocidad que elijas y graba cada toma. Así ensayas la coreografía sin volver al teléfono a cada rato.',
    trial: 'Descarga gratis. Prueba todas las funciones Pro durante tus tres primeros días de práctica.',
  },
  demo: {
    label: 'Demo interactiva: una frase de ocho tiempos en bucle',
    hint: 'Arrastra los bordes para elegir qué tiempos se repiten.',
    speed: 'Velocidad',
    mirror: 'Reflejar',
    play: 'Reproducir',
    pause: 'Pausar',
    loopStart: 'Inicio del bucle',
    loopEnd: 'Fin del bucle',
  },
  store: { appStore: 'Descárgalo en el App Store', googlePlay: 'Disponible en Google Play' },
  steps: {
    title: 'Así es una sesión de práctica',
    items: [
      { title: 'Elige la música o el video', body: 'Busca en YouTube desde la app, abre un video de Fotos o Archivos, o pon una canción de Apple Music en iPhone.' },
      { title: 'Marca la sección', body: 'Define dónde empieza y termina el bucle. Añade más secciones y pasa de una a otra mientras aprendes la coreo.' },
      { title: 'Ajusta la velocidad', body: 'Bájala para aprender los pasos y súbela poco a poco hasta llegar al tempo real.' },
      { title: 'Baila, graba, revisa', body: 'Apoya el teléfono y baila. Cada toma se graba y se reproduce, y guardas las buenas en tu galería.' },
    ],
  },
  details: {
    title: 'Hecha para practicar, no solo para mirar',
    items: [
      { title: 'Bucles que no se detienen', body: 'La sección se repite hasta que la paras, así sigues bailando en vez de tocar «repetir».' },
      { title: 'Velocidad exacta', body: 'A media velocidad para los pasos nuevos, casi a tempo antes del show. Con Pro la ajustas en pasos de 0,05×.' },
      { title: 'Reflejar', body: 'Invierte el video de referencia para seguirlo como a tu profe en el espejo del estudio.' },
      { title: '4K a 60 fps', body: 'Con Pro grabas video nítido y fluido, y revisar los pies y el timing es mucho más fácil.' },
      { title: 'Se queda en tu teléfono', body: 'Tus grabaciones y los videos que importas no se suben a ningún sitio.' },
    ],
  },
  gestures: {
    title: 'Contrólala desde el otro lado de la sala',
    body: 'Empieza, detén y repite tomas con una pose mientras el teléfono está en el trípode o apoyado en la pared.',
    poses: ['Mano levantada', 'Pose en T', 'Brazos arriba', 'Manos en la cabeza'],
  },
  styles: {
    title: 'Para cualquier estilo que bailes con música',
    body: 'Bachata, salsa, kizomba, zouk, hip hop, K-pop, heels, contemporáneo, jazz, ballet, tango, swing. Si lo aprendes de un video o contando tiempos, lo puedes repetir en bucle.',
  },
  story: {
    title: 'Por qué existe RePasito',
    body: 'Soy Marcin, bailarín e ingeniero de software. Mientras preparaba mi primera coreografía de bachata para un show, volvía una y otra vez al teléfono para rebobinar los mismos veinte segundos y empezar otra grabación. RePasito es la app que necesitaba entonces: repite la parte que estoy trabajando y me graba mientras bailo.',
    signature: 'Marcin, creador de RePasito',
  },
  faq: {
    title: 'Preguntas',
    items: [
      { q: '¿Cómo repito en bucle una parte de un video de baile de YouTube?', a: 'Busca el video en RePasito o pega el enlace, y arrastra los marcadores del bucle hasta la parte que quieras. Se repite hasta que lo detengas.' },
      { q: '¿Puedo poner un video de baile en cámara lenta?', a: 'Sí. Elige cualquier velocidad de práctica a partir de la mitad. Con Pro la ajustas en pasos de 0,05×.' },
      { q: '¿RePasito es gratis?', a: 'Puedes descargarla y empezar a practicar gratis. Pro desbloquea bucles, revisión y guardado ilimitados, y lo pruebas gratis durante tus tres primeros días de práctica.' },
      { q: '¿RePasito está en Android?', a: 'Sí. RePasito está en el App Store para iPhone y en Google Play para Android. Apple Music solo está disponible en iPhone.', android: true },
      { q: '¿Se suben mis videos?', a: 'No. Tus grabaciones y los archivos que importas se quedan en tu dispositivo.' },
      { q: '¿Puedo usarla sin tocar el teléfono?', a: 'Sí. Con el control por gestos empiezas y detienes las tomas con una pose, así el teléfono se queda en su sitio.' },
    ],
  },
  cta: {
    title: 'Tu próxima práctica empieza con una sección.',
    body: 'Descarga gratis para iPhone y Android.',
  },
  footer: { privacy: 'Política de privacidad', support: 'Soporte', languages: 'Idiomas' },
};
