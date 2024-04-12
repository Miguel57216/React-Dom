/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

import type { StrictReactDOMProps } from './StrictReactDOMProps';

export type StrictReactDOMSelectProps = $ReadOnly<{
  ...StrictReactDOMProps,
  multiple?: boolean,
  required?: boolean,
  onBeforeInput?: $FlowFixMe,
  onChange?: $FlowFixMe,
  onInput?: $FlowFixMe,
  onInvalid?: $FlowFixMe,
  onSelect?: $FlowFixMe
}>;
