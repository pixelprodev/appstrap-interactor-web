import React from 'react'
import App from './App'
import { storiesOf } from '@storybook/react'
import CSSReset from './styles/CSSReset'

storiesOf('Management Screen', module)
  .add('Base', () =>
    <CSSReset>
      <App />
    </CSSReset>
  )
