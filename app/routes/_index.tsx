import {
  type MetaFunction,
  type LoaderFunctionArgs,
  json,
} from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader({ context }: LoaderFunctionArgs) {
  return json({
    result: await context.env.DB.prepare("select * from Customers").first(),
  });
}

export default function Index() {
  const x = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <pre>
        <code>{JSON.stringify(x, null, 2)}</code>
      </pre>
    </div>
  );
}
