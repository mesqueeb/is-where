/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable tree-shaking/no-side-effects-in-initialization */
/* eslint-disable @typescript-eslint/no-array-constructor */
import { test, expect } from 'vitest'

import { isNode, isBrowser, isWebWorker, isJsDom, isDeno, isWebKit, isSafari } from '../src/index'

test('Node tests', () => {
  expect(isNode()).toEqual(true)
  expect(isBrowser()).toEqual(false)
  expect(isWebWorker()).toEqual(false)
  expect(isJsDom()).toEqual(false)
  expect(isDeno()).toEqual(false)
  expect(isWebKit()).toEqual(false)
  expect(isSafari()).toEqual(false)
})
