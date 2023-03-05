/**
 * @generated SignedSource<<cb95549a3e4758dfd5bc062309c1a25c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ReactRelayLazyQuerierQuery$variables = {};
export type ReactRelayLazyQuerierQuery$data = {
  readonly viewer: {
    readonly bio: string | null;
  };
};
export type ReactRelayLazyQuerierQuery = {
  response: ReactRelayLazyQuerierQuery$data;
  variables: ReactRelayLazyQuerierQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "bio",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ReactRelayLazyQuerierQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ReactRelayLazyQuerierQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "edaff3bf30bf173743f9549a4c39d365",
    "id": null,
    "metadata": {},
    "name": "ReactRelayLazyQuerierQuery",
    "operationKind": "query",
    "text": "query ReactRelayLazyQuerierQuery {\n  viewer {\n    bio\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "0be2c8943ddf77ec356384e6198faff0";

export default node;
