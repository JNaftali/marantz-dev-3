/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare" />
/// <reference types="@cloudflare/workers-types" />

import type { Database } from "db";
import type { Kysely } from "kysely";

declare module "@remix-run/cloudflare" {
  export interface AppLoadContext {
    env: {
      DB: D1Database;
    };
    db: Kysely<Database>;
  }
}

// https://stackoverflow.com/questions/73589103/how-to-extend-typescript-module-without-overriding-it
export {};
