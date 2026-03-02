// #region agent log - cwd instrumentation
import { createRequire } from 'module';
const _require = createRequire(import.meta.url);
const _afs = _require('fs').appendFileSync;
const _LOG = '/home/rahim/Music/portfolio-frontend/.cursor/debug-d59c64.log';
const _log = (data) => { try { _afs(_LOG, JSON.stringify({ sessionId: 'd59c64', timestamp: Date.now(), ...data }) + '\n'); } catch (e) {} };
_log({ location: 'postcss.config.mjs:load', message: 'PostCSS config loaded', hypothesisId: 'A', data: { cwd: process.cwd(), url: import.meta.url } });
// #endregion

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
