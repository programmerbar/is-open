// Generated by Wrangler on Fri Sep 06 2024 19:45:35 GMT+0200 (Central European Summer Time)
// by running `wrangler types --env-interface CloudflareBindings`

interface CloudflareBindings {
  STATUS_KV: KVNamespace;
  SLACK_VERIFICATION_TOKEN: string;
  SLACK_CHANNEL_ID: string;
  FEIDE_CLIENT_ID: string;
  FEIDE_CLIENT_SECRET: string;
  FEIDE_REDIRECT_URI: string;
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
  GITHUB_REDIRECT_URI: string;
  ENV: string;
  APP_URL: string;
  R2: R2Bucket;
  DB: D1Database;
}
