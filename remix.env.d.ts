/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />
declare module "@remix-run/cloudflare" {
  export interface AppLoadContext {
    env: {
      DB: D1Database;
    };
  }
}

// https://stackoverflow.com/questions/73589103/how-to-extend-typescript-module-without-overriding-it
export {};
