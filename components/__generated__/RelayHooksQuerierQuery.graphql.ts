/**
 * @generated SignedSource<<cc6bf6735bd18cda4fed0d60789cb623>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type RelayHooksQuerierQuery$variables = {};
export type RelayHooksQuerierQuery$data = {
  readonly viewer: {
    readonly name: string | null;
  };
};
export type RelayHooksQuerierQuery = {
  response: RelayHooksQuerierQuery$data;
  variables: RelayHooksQuerierQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RelayHooksQuerierQuery",
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
    "name": "RelayHooksQuerierQuery",
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
    "cacheID": "a0f581974cb1e26ad2348bb0e5ae8660",
    "id": null,
    "metadata": {},
    "name": "RelayHooksQuerierQuery",
    "operationKind": "query",
    "text": "query RelayHooksQuerierQuery {\n  viewer {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "3d2fbc0d02c238ef3ff3118321086f24";

export default node;
