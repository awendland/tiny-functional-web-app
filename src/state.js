import * as R from 'ramda'
import { process } from './lib'

const NEW_STEP = { str: '' }

const initialState = {
  input: null,
  steps: [NEW_STEP],
}

const baseActions = {
  changeInput: value => state => ({ input: value }),
  changeStep: ({ stepi, value }) => ({ steps }) => ({
    steps: R.update(stepi, R.merge(steps[stepi], { str: value }), steps),
  }),
  removePanel: value => ({ steps }) => ({
    steps: R.remove(value, 1, steps), // TODO lenses
  }),
  insertPanel: value => ({ steps }) => ({
    steps: R.insert(value, NEW_STEP, steps),
  }),
  process: value => ({ input, steps }) => ({
    steps: process(steps, input),
  })
}

const enhanceActions = enhance =>
  R.pipe(
    R.toPairs,
    R.map(
      ([key, actionOrObj]) =>
        typeof actionOrObj === 'function'
          ? [key, enhance(actionOrObj)]
          : [key, enhanceActions(enhance)(actionOrObj)]
    ),
    R.fromPairs
  )

const logActions = enhanceActions(
  action => (...valueArgs) => (...stateArgs) => {
    const ret = action.apply(null, valueArgs).apply(null, stateArgs)
    console.group(
      '%c action',
      'color: gray; font-weight: lighter;',
      action.name
    )
    console.log(
      '%c in  ',
      'color: #03A9F4; font-weight: bold;',
      valueArgs.length === 1 ? valueArgs[0] : valueArgs
    )
    console.log('%c out ', 'color: #4CAF50; font-weight: bold;', ret)
    console.groupEnd()
    return ret
  }
)

export const actions = R.compose(logActions)(baseActions)
export const state = initialState
