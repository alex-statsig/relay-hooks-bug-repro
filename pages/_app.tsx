import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
} from "relay-runtime";

import { RelayEnvironmentProvider } from "relay-hooks";
import { useMemo } from "react";

const REACT_APP_GITHUB_AUTH_TOKEN = process.env.NEXT_PUBLIC_GH_AUTH_TOKEN;
if (!REACT_APP_GITHUB_AUTH_TOKEN) {
  throw new Error("No github auth token provided");
}
export default function App({ pageProps, Component }) {
  const environment = useMemo(() => {
    return new Environment({
      store: new Store(new RecordSource()),
      network: Network.create(fetchRelay),
    });
  }, []);
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
}

async function fetchRelay(params: RequestParameters, variables) {
  const res = await fetchGraphQL(params.text, variables);
  // Artificially delay the react-relay query component to ensure its suspense lasts longer
  if (params.name === "ReactRelayLazyQuerierQuery") {
    await asyncTimeout(2000);
  }
  return res;
}
async function fetchGraphQL(text, variables) {
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

function asyncTimeout(time: number) {
  return new Promise((res) => setTimeout(res, time));
}
