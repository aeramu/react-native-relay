/**
 * @flow
 * @relayHash 1d068d8f6bb21a179d84701ad84ff44c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AskQuestionMutationMutationVariables = {|
  title: string,
  body: string,
|};
export type AskQuestionMutationMutationResponse = {|
  +askQuestion: {|
    +id: string,
    +title: string,
    +body: string,
  |}
|};
export type AskQuestionMutationMutation = {|
  variables: AskQuestionMutationMutationVariables,
  response: AskQuestionMutationMutationResponse,
|};
*/


/*
mutation AskQuestionMutationMutation(
  $title: String!
  $body: String!
) {
  askQuestion(title: $title, body: $body) {
    id
    title
    body
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "title",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "body",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "askQuestion",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "body",
        "variableName": "body"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "Question",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "title",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "body",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AskQuestionMutationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AskQuestionMutationMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AskQuestionMutationMutation",
    "id": null,
    "text": "mutation AskQuestionMutationMutation(\n  $title: String!\n  $body: String!\n) {\n  askQuestion(title: $title, body: $body) {\n    id\n    title\n    body\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '623b05fc2df1dae2ccd43cbb8a9620d7';
module.exports = node;
