/**
 * @flow
 * @relayHash d01dbd9e987e43c8b6fc211115e43d1c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AnswerQuestionFormMutationVariables = {|
  questionID: string,
  body: string,
|};
export type AnswerQuestionFormMutationResponse = {|
  +answerQuestion: {|
    +id: string,
    +body: string,
  |}
|};
export type AnswerQuestionFormMutation = {|
  variables: AnswerQuestionFormMutationVariables,
  response: AnswerQuestionFormMutationResponse,
|};
*/


/*
mutation AnswerQuestionFormMutation(
  $questionID: ID!
  $body: String!
) {
  answerQuestion(questionID: $questionID, body: $body) {
    id
    body
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "questionID",
    "type": "ID!",
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
    "name": "answerQuestion",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "body",
        "variableName": "body"
      },
      {
        "kind": "Variable",
        "name": "questionID",
        "variableName": "questionID"
      }
    ],
    "concreteType": "Answer",
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
    "name": "AnswerQuestionFormMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AnswerQuestionFormMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "AnswerQuestionFormMutation",
    "id": null,
    "text": "mutation AnswerQuestionFormMutation(\n  $questionID: ID!\n  $body: String!\n) {\n  answerQuestion(questionID: $questionID, body: $body) {\n    id\n    body\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c420f4a63d40de298844c2eeee6a2415';
module.exports = node;
