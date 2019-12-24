/**
 * @flow
 * @relayHash 5b4bd1d9a8b6fb1c240f9f2d2a0894dc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type QuestionList_questionList$ref = any;
export type HomePageQueryVariables = {||};
export type HomePageQueryResponse = {|
  +$fragmentRefs: QuestionList_questionList$ref
|};
export type HomePageQuery = {|
  variables: HomePageQueryVariables,
  response: HomePageQueryResponse,
|};
*/


/*
query HomePageQuery {
  ...QuestionList_questionList
}

fragment QuestionList_questionList on Query {
  questionList(first: 5) {
    edges {
      node {
        ...Question_question
        id
      }
    }
  }
}

fragment Question_question on Question {
  id
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
    "name": "HomePageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "QuestionList_questionList",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "HomePageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "questionList",
        "storageKey": "questionList(first:5)",
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 5
          }
        ],
        "concreteType": "QuestionConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "QuestionEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Question",
                "plural": false,
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
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "HomePageQuery",
    "id": null,
    "text": "query HomePageQuery {\n  ...QuestionList_questionList\n}\n\nfragment QuestionList_questionList on Query {\n  questionList(first: 5) {\n    edges {\n      node {\n        ...Question_question\n        id\n      }\n    }\n  }\n}\n\nfragment Question_question on Question {\n  id\n  title\n  author {\n    username\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a0ed56e2ddaf766ddf61575d3c282e97';
module.exports = node;
