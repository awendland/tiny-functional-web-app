import { h, app } from 'hyperapp'
import { view } from './view'
import { actions, state } from './state'

app(state, actions, view, document.body)
