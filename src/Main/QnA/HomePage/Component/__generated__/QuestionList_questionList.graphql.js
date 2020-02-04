/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Question_question$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type QuestionList_questionList$ref: FragmentReference;
declare export opaque type QuestionList_questionList$fragmentType: QuestionList_questionList$ref;
export type QuestionList_questionList = {|
  +questionList: {|
    +edges: $ReadOnlyArray<?{|
      +node: {|
        +$fragmentRefs: Question_question$ref
      |}
    |}>
  |},
  +$refType: QuestionList_questionList$ref,
|};
export type QuestionList_questionList$data = QuestionList_questionList;
export type QuestionList_questionList$key = {
  +$data?: QuestionList_questionList$data,
  +$fragmentRefs: QuestionList_questionList$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "QuestionList_questionList",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "questionList",
      "storageKey": "questionList(first:10)",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 10
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
                {
                  "kind": "FragmentSpread",
                  "name": "Question_question",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c9f099902beb51a967e97a68f5ad8a0e';
module.exports = node;
