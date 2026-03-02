import type { NextConfig } from "next";
// #region agent log - cwd instrumentation
/* eslint-disable @typescript-eslint/no-require-imports */
const _afs = require("fs").appendFileSync;
const _LOG = "/home/rahim/Music/portfolio-frontend/.cursor/debug-d59c64.log";
const _log = (data: Record<string, unknown>) => { try { _afs(_LOG, JSON.stringify({ sessionId: "d59c64", timestamp: Date.now(), ...data }) + "\n"); } catch (e) {} };
_log({ location: "next.config.ts:load", message: "Next config loaded", hypothesisId: "A,C", data: { cwd: process.cwd() } });
// #endregion

const nextConfig: NextConfig = {
  // #region agent log - webpack context capture
  webpack(config, context) {
    _log({ location: "next.config.ts:webpack", message: "Webpack config called", hypothesisId: "C", data: { webpackContext: (context as { dir?: string }).dir ?? null, cwd: process.cwd() } });
    return config;
  },
  // #endregion
};

export default nextConfig;
