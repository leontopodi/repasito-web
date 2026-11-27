import { inviteCode, inviteParams } from '../lib/inviteLinks';

export function initInvitePage(): void {
  const page = document.querySelector<HTMLElement>('[data-invite-page]');
  if (!page) return;
  const params = new URLSearchParams(window.location.search);
  const code = inviteCode(params.get('c'));
  const codeElement = page.querySelector<HTMLElement>('[data-invite-code]');
  if (code && codeElement) {
    codeElement.textContent = code;
    page.querySelectorAll<HTMLElement>('[data-invite-detail]').forEach((element) => { element.hidden = false; });
    const button = page.querySelector<HTMLButtonElement>('[data-copy-invite]');
    const status = page.querySelector<HTMLElement>('[data-copy-status]');
    button?.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(code);
        if (status) status.textContent = page.dataset.copied ?? '';
      } catch {
        const range = document.createRange();
        range.selectNodeContents(codeElement);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
        if (status) status.textContent = page.dataset.copyFailed ?? '';
      }
    });
  }

  // Switching the site's language must keep the invitation and selected section.
  const query = inviteParams(params).toString();
  document.querySelectorAll<HTMLAnchorElement>('a[hreflang]').forEach((link) => {
    const url = new URL(link.href);
    url.search = query;
    link.href = url.toString();
  });
}
