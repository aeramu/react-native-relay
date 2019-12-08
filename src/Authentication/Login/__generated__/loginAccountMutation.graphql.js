/**
 * @flow
 * @relayHash c37af3c642e966dc6fcb5841f2212b22
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type loginAccountMutationVariables = {|
  email?: ?string,
  username?: ?string,
  password: string,
|};
export type loginAccountMutationResponse = {|
  +loginAccount: string
|};
export type loginAccountMutation = {|
  variables: loginAccountMutationVariables,
  response: loginAccountMutationResponse,
|};
*/


/*
mutation loginAccountMutation(
  $email: String
  $username: String
  $password: String!
) {
  loginAccount(email: $email, username: $username, password: $password)
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "username",
    "type": "String",
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
    "name": "loginAccount",
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
    "name": "loginAccountMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "loginAccountMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "loginAccountMutation",
    "id": null,
    "text": "mutation loginAccountMutation(\n  $email: String\n  $username: String\n  $password: String!\n) {\n  loginAccount(email: $email, username: $username, password: $password)\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2e0104f57418bc5a6adb14ed93d7491b';
module.exports = node;
