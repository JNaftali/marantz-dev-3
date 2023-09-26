import { logDevReady } from "@remix-run/cloudflare";
import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
import * as build from "@remix-run/dev/server-build";
import type { Database } from "db";
import { Kysely } from "kysely";
import { D1Dialect } from "kysely-d1";

declare var process: { env: { NODE_ENV: string } };

if (process.env.NODE_ENV === "development") {
  logDevReady(build);
}

export const onRequest = createPagesFunctionHandler({
  build,
  getLoadContext: (context) => ({
    env: context.env,
    db: new Kysely<Database>({
      dialect: new D1Dialect({ database: context.env.DB }),
    }),
  }),
  mode: build.mode,
});
