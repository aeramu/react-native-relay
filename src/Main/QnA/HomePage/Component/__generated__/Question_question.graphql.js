/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Question_question$ref: FragmentReference;
declare export opaque type Question_question$fragmentType: Question_question$ref;
export type Question_question = {|
  +title: string,
  +author: {|
    +username: string
  |},
  +$refType: Question_question$ref,
|};
export type Question_question$data = Question_question;
export type Question_question$key = {
  +$data?: Question_question$data,
  +$fragmentRefs: Question_question$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Question_question",
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
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'c86969853cd5d54bd2a01781cda192c9';
module.exports = node;
