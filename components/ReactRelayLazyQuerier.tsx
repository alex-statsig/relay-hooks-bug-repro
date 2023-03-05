import { ReactRelayLazyQuerierQuery } from "./__generated__/ReactRelayLazyQuerierQuery.graphql";
import { debugLog } from "./debugLog";
import { graphql } from "relay-hooks";
import { useLazyLoadQuery } from "react-relay";

/**
 * Uses useLazyLoadQuery from react-relay to query some data
 * (probably could be replaced with any Suspense triggering component)
 */
export default function ReactRelayLazyQuerier() {
  const data = useLazyLoadQuery<ReactRelayLazyQuerierQuery>(
    graphql`
      query ReactRelayLazyQuerierQuery {
        viewer {
          bio
        }
      }
    `,
    {},
    { fetchPolicy: "store-and-network" }
  );
  debugLog("ReactRelayLazyQuerier", data != null);
  return <div>ReactRelayLazyQuerier: {data.viewer?.bio}</div>;
}
