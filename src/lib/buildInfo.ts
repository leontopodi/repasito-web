import { execSync } from 'node:child_process';

/** Date of the commit being built: when the site's content last changed. Build-time only. */
function lastCommitDate(): Date {
  try {
    return new Date(execSync('git log -1 --format=%cI', { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim());
  } catch {
    return new Date();
  }
}

export const LAST_MODIFIED = lastCommitDate();
