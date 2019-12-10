/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Answer_answer$ref: FragmentReference;
declare export opaque type Answer_answer$fragmentType: Answer_answer$ref;
export type Answer_answer = {|
  +author: {|
    +username: string
  |},
  +body: string,
  +$refType: Answer_answer$ref,
|};
export type Answer_answer$data = Answer_answer;
export type Answer_answer$key = {
  +$data?: Answer_answer$data,
  +$fragmentRefs: Answer_answer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Answer_answer",
  "type": "Answer",
  "metadata": null,
  "argumentDefinitions": [],
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
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "username",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "body",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '167d043ad17ce7d4864274111b174c9f';
module.exports = node;
