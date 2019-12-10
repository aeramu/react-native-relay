/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type QuestionDetail_question$ref: FragmentReference;
declare export opaque type QuestionDetail_question$fragmentType: QuestionDetail_question$ref;
export type QuestionDetail_question = {|
  +title: string,
  +body: string,
  +author: {|
    +id: string,
    +username: string,
  |},
  +$refType: QuestionDetail_question$ref,
|};
export type QuestionDetail_question$data = QuestionDetail_question;
export type QuestionDetail_question$key = {
  +$data?: QuestionDetail_question$data,
  +$fragmentRefs: QuestionDetail_question$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "QuestionDetail_question",
  "type": "Question",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "username",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '8d7aa8484cb71693fd6a2e7362ad0f66';
module.exports = node;
