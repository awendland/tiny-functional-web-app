import { h } from 'hyperapp'
import classes from './view.css'

const nn = (v) => v !== null && v !== undefined

const Step = ({ stepi, stepstr, stepout, steperr, onnewinput }) =>
  h('div', { class: 'step' }, [
    h('textarea', {
      class: 'editor',
      oninput: ({ target: { value } }) => onnewinput(value),
      value: stepstr,
    }),
    nn(stepout) && h('div', { class: 'output' }, String(stepout)),
    nn(steperr) && h('div', { class: 'error' }, String(steperr)),
  ])

export const view = (state, actions) => {
  console.log(state)
  const v = h('div', { class: 'app' }, [
    h('textarea', {
      class: 'input-data',
      oninput: ({ target: { value }}) => actions.changeInput(value),
      value: state.input
    }),
    h(
      'div',
      { class: 'steps' },
      state.steps.map(({ str, out, err }, i) =>
        Step({
          stepi: i,
          stepstr: str,
          stepout: out,
          steperr: err,
          onnewinput: value => actions.changeStep({ stepi: i, value }),
        })
      )
    ),
    h(
      'button',
      { onclick: () => actions.removePanel(state.steps.length - 1) },
      '-'
    ),
    h(
      'button',
      { onclick: () => actions.insertPanel(state.steps.length) },
      '+'
    ),
    h('button', { class: 'run', onclick: () => actions.process() }, 'run'),
    h(
      'pre',
      {},
      state.steps.length > 0
        ? `${state.steps[state.steps.length - 1].out}`
        : 'nothing'
    ),
  ])
  console.log(v)
  return v
}
