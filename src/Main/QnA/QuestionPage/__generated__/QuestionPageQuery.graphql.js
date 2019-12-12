/**
 * @flow
 * @relayHash 3c70b8b128b42915dbd84b823aaab11c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Answer_answer$ref = any;
type QuestionDetail_question$ref = any;
export type QuestionPageQueryVariables = {|
  id: string
|};
export type QuestionPageQueryResponse = {|
  +question: ?{|
    +answers: $ReadOnlyArray<?{|
      +$fragmentRefs: Answer_answer$ref
    |}>,
    +$fragmentRefs: QuestionDetail_question$ref,
  |}
|};
export type QuestionPageQuery = {|
  variables: QuestionPageQueryVariables,
  response: QuestionPageQueryResponse,
|};
*/


/*
query QuestionPageQuery(
  $id: ID!
) {
  question(id: $id) {
    ...QuestionDetail_question
    answers {
      ...Answer_answer
      id
    }
    id
  }
}

fragment Answer_answer on Answer {
  author {
    username
    id
  }
  body
}

fragment QuestionDetail_question on Question {
  title
  body
  author {
    id
    username
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "body",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "QuestionPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "question",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Question",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "answers",
            "storageKey": null,
            "args": null,
            "concreteType": "Answer",
            "plural": true,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "Answer_answer",
                "args": null
              }
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "QuestionDetail_question",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "QuestionPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "question",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Question",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "author",
            "storageKey": null,
            "args": null,
            "concreteType": "Account",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "answers",
            "storageKey": null,
            "args": null,
            "concreteType": "Answer",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "author",
                "storageKey": null,
                "args": null,
                "concreteType": "Account",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v3/*: any*/)
                ]
              },
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "QuestionPageQuery",
    "id": null,
    "text": "query QuestionPageQuery(\n  $id: ID!\n) {\n  question(id: $id) {\n    ...QuestionDetail_question\n    answers {\n      ...Answer_answer\n      id\n    }\n    id\n  }\n}\n\nfragment Answer_answer on Answer {\n  author {\n    username\n    id\n  }\n  body\n}\n\nfragment QuestionDetail_question on Question {\n  title\n  body\n  author {\n    id\n    username\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1493b0110521805b5b362f3109c296d8';
module.exports = node;
