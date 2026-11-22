import type { Dict } from '../types';

export const en: Dict = {
  meta: {
    title: 'RePasito: Dance Practice App – Loop, Slow Down & Record',
    description:
      'Loop any part of a song or YouTube video, slow it down, mirror it and record every take. The dance practice app for learning choreography on iPhone and Android.',
  },
  nav: { language: 'Language', skip: 'Skip to content' },
  hero: {
    title: 'Loop the eight counts you keep missing.',
    lede: 'RePasito repeats any part of a song or video at the speed you choose and records every take, so you can drill a choreography without walking back to your phone.',
    trial: 'Free to download. Try every Pro feature for your first three practice days.',
  },
  demo: {
    label: 'Interactive demo: an eight-count phrase on loop',
    hint: 'Drag the edges to choose which counts repeat.',
    speed: 'Speed',
    mirror: 'Mirror',
    play: 'Play',
    pause: 'Pause',
    loopStart: 'Loop start',
    loopEnd: 'Loop end',
  },
  store: { appStore: 'Download on the App Store', googlePlay: 'Get it on Google Play' },
  steps: {
    title: 'How a practice session goes',
    items: [
      { title: 'Pick the music or video', body: 'Search YouTube inside the app, open a video from Photos or Files, or play a song from Apple Music on iPhone.' },
      { title: 'Mark the section', body: 'Set where the loop starts and ends. Add more sections and move between them as you learn the routine.' },
      { title: 'Set the speed', body: 'Slow it down to learn the steps, then bring it back up to tempo.' },
      { title: 'Dance, record, review', body: 'Prop up your phone and dance. Each take is recorded and played back, and you save the good ones to your gallery.' },
    ],
  },
  details: {
    title: 'Built for practicing, not for watching',
    items: [
      { title: 'Loops that keep going', body: 'The section repeats until you stop, so you keep dancing instead of tapping replay.' },
      { title: 'Exact speed', body: 'Half speed for new steps, almost full speed before the show. Pro adjusts speed in 0.05× steps.' },
      { title: 'Mirror', body: 'Flip the reference video so you can follow it like a teacher in the studio mirror.' },
      { title: '4K at 60 fps', body: 'Pro records sharp, smooth video, so footwork and timing are easy to check.' },
      { title: 'Stays on your phone', body: 'Your recordings and imported videos are not uploaded anywhere.' },
    ],
  },
  gestures: {
    title: 'Control it from across the room',
    body: 'Start, stop and redo takes with a body pose while your phone sits on a stand or against a wall.',
    poses: ['Raised hand', 'T-pose', 'Arms overhead', 'Hands on head'],
  },
  styles: {
    title: 'For every style you practice to music',
    body: 'Bachata, salsa, kizomba, zouk, hip hop, K-pop, heels, contemporary, jazz, ballet, tango, swing. If you learn it from a video or on counts, you can loop it.',
  },
  story: {
    title: 'Why RePasito exists',
    body: 'I’m Marcin, a dancer and software engineer. While preparing my first bachata choreography for a show, I kept walking back to my phone to rewind the same twenty seconds and start another recording. RePasito is the app I wanted then: it loops the part I’m working on and records me while I dance.',
    signature: 'Marcin, maker of RePasito',
  },
  faq: {
    title: 'Questions',
    items: [
      { q: 'How do I loop part of a YouTube dance video?', a: 'Search for the video in RePasito or paste its link, then drag the loop markers to the part you want. It repeats until you stop it.' },
      { q: 'Can I slow down a dance video?', a: 'Yes. Pick any practice speed, from half speed upwards. With Pro you can fine-tune it in 0.05× steps.' },
      { q: 'Is RePasito free?', a: 'You can download it and start practicing for free. Pro unlocks unlimited looping, review and saving, and you can try it free for your first three practice days.' },
      { q: 'Is RePasito on Android?', a: 'Yes. RePasito is on the App Store for iPhone and on Google Play for Android. Apple Music is available on iPhone only.', android: true },
      { q: 'Are my videos uploaded?', a: 'No. Your recordings and imported media stay on your device.' },
      { q: 'Can I use it without touching my phone?', a: 'Yes. With gesture control you start and stop takes with a body pose, so your phone can stay on its stand.' },
    ],
  },
  cta: {
    title: 'Your next practice starts with one section.',
    body: 'Free to download for iPhone and Android.',
  },
  footer: { privacy: 'Privacy policy', support: 'Support', languages: 'Languages' },
};
