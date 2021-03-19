import { devtoolsExchange } from "@urql/devtools";
import { cacheExchange } from "@urql/exchange-graphcache";
import { createClient, dedupExchange, fetchExchange } from "@urql/preact";

export const client = createClient({
  url: import.meta.env.VITE_GRAPHQL_ENDPOINT as string,
  exchanges: [devtoolsExchange, dedupExchange, cacheExchange(), fetchExchange],
});
