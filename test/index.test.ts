import { expect, test } from 'vitest'

import { isBrowser, isDeno, isJsDom, isNode, isSafari, isWebKit, isWebWorker } from '../src/index'

test('Node tests', () => {
  expect(isNode()).toEqual(true)
  expect(isBrowser()).toEqual(false)
  expect(isWebWorker()).toEqual(false)
  expect(isJsDom()).toEqual(false)
  expect(isDeno()).toEqual(false)
  expect(isWebKit()).toEqual(false)
  expect(isSafari()).toEqual(false)
})
