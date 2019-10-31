import test from 'ava'
import * as lib from '../lib'

test('compileStep with return 0', t => {
  t.snapshot(compileStep('return 0'))
})
