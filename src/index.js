import * as React from 'react'
import { render } from 'react-dom'
import App from './App'
import CSSReset from './styles/CSSReset'

render(<CSSReset> <App /> </CSSReset>, document.getElementById('root'))
