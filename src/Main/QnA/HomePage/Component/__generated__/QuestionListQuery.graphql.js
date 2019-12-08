/**
 * @flow
 * @relayHash 28e7bd736849063c24b8615c0602865c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Question_question$ref = any;
export type QuestionListQueryVariables = {||};
export type QuestionListQueryResponse = {|
  +questionList: $ReadOnlyArray<?{|
    +id: string,
    +$fragmentRefs: Question_question$ref,
  |}>
|};
export type QuestionListQuery = {|
  variables: QuestionListQueryVariables,
  response: QuestionListQueryResponse,
|};
*/


/*
query QuestionListQuery {
  questionList {
    id
    ...Question_question
  }
}

fragment Question_question on Question {
  title
  author {
    username
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "QuestionListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "questionList",
        "storageKey": null,
        "args": null,
        "concreteType": "Question",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "Question_question",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "QuestionListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "questionList",
        "storageKey": null,
        "args": null,
        "concreteType": "Question",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "author",
            "storageKey": null,
            "args": null,
            "concreteType": "Account",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "username",
                "args": null,
                "storageKey": null
              },
              (v0/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "QuestionListQuery",
    "id": null,
    "text": "query QuestionListQuery {\n  questionList {\n    id\n    ...Question_question\n  }\n}\n\nfragment Question_question on Question {\n  title\n  author {\n    username\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ce3a66cd4ed76b1e2cb9afa251f49250';
module.exports = node;
