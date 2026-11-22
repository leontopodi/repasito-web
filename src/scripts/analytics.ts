type Gtag = (command: 'event', name: string, params: Record<string, unknown>) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

/** Sends an event when analytics are enabled; a no-op otherwise. */
export function track(name: string, params: Record<string, unknown>): void {
  window.gtag?.('event', name, { ...params, transport_type: 'beacon' });
}
