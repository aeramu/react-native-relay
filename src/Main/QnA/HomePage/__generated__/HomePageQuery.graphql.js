/**
 * @flow
 * @relayHash 31425505ffd4eabfc8d86d327665e753
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Question_question$ref = any;
export type HomePageQueryVariables = {||};
export type HomePageQueryResponse = {|
  +questionList: $ReadOnlyArray<?{|
    +$fragmentRefs: Question_question$ref
  |}>
|};
export type HomePageQuery = {|
  variables: HomePageQueryVariables,
  response: HomePageQueryResponse,
|};
*/


/*
query HomePageQuery {
  questionList {
    ...Question_question
    id
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
        "kind": "LinkedField",
        "alias": null,
        "name": "questionList",
        "storageKey": null,
        "args": null,
        "concreteType": "Question",
        "plural": true,
        "selections": [
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
    "name": "HomePageQuery",
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
    "name": "HomePageQuery",
    "id": null,
    "text": "query HomePageQuery {\n  questionList {\n    ...Question_question\n    id\n  }\n}\n\nfragment Question_question on Question {\n  id\n  title\n  author {\n    username\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '77cc39d87819876f73f41c692a039c70';
module.exports = node;
