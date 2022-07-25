import { env } from './src/server/env.mjs';

/**
 * @template {import('next').NextConfig} T
 * @param {T} config
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

export default defineNextConfig({
  reactStrictMode: true,
});
