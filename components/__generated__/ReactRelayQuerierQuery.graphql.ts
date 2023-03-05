/**
 * @generated SignedSource<<5c31cfc17c8a6b0a0999ab96b69c50b2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ReactRelayQuerierQuery$variables = {};
export type ReactRelayQuerierQuery$data = {
  readonly viewer: {
    readonly name: string | null;
  };
};
export type ReactRelayQuerierQuery = {
  response: ReactRelayQuerierQuery$data;
  variables: ReactRelayQuerierQuery$variables;
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
    "name": "ReactRelayQuerierQuery",
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
    "name": "ReactRelayQuerierQuery",
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
    "cacheID": "9339d65eed4e89408d383e15321b527f",
    "id": null,
    "metadata": {},
    "name": "ReactRelayQuerierQuery",
    "operationKind": "query",
    "text": "query ReactRelayQuerierQuery {\n  viewer {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "6d6eb9870786f1436f17d80de414cc8f";

export default node;
