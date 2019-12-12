/**
 * @flow
 * @relayHash 315fac63ebe3d5628b92011cc940628a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type registerAccountMutationVariables = {|
  email: string,
  username: string,
  password: string,
|};
export type registerAccountMutationResponse = {|
  +registerAccount: string
|};
export type registerAccountMutation = {|
  variables: registerAccountMutationVariables,
  response: registerAccountMutationResponse,
|};
*/


/*
mutation registerAccountMutation(
  $email: String!
  $username: String!
  $password: String!
) {
  registerAccount(email: $email, username: $username, password: $password)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "username",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "registerAccount",
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      },
      {
        "kind": "Variable",
        "name": "username",
        "variableName": "username"
      }
    ],
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "registerAccountMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "registerAccountMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "registerAccountMutation",
    "id": null,
    "text": "mutation registerAccountMutation(\n  $email: String!\n  $username: String!\n  $password: String!\n) {\n  registerAccount(email: $email, username: $username, password: $password)\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '93b73aad57c0269bd75549454da09540';
module.exports = node;
