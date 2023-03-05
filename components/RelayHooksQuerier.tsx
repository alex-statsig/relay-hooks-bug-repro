import { graphql, useQuery } from "relay-hooks";

import { RelayHooksQuerierQuery } from "./__generated__/RelayHooksQuerierQuery.graphql";
import { debugLog } from "./debugLog";

/**
 * Uses useQuery from relay-hooks to query some data
 */
export default function RelayHooksQuerier() {
  const { data, isLoading } = useQuery<RelayHooksQuerierQuery>(
    graphql`
      query RelayHooksQuerierQuery {
        viewer {
          name
        }
      }
    `,
    {},
    { fetchPolicy: "store-and-network" }
  );
  debugLog("RelayHooksQuerier", data != null);
  return (
    <div>RelayHooksQuerier: {isLoading ? "loading..." : data.viewer?.name}</div>
  );
}
