import styled from '@emotion/styled'
import InteractorContext from '../../../context'
import { useContext } from 'react'
import HanderIntrospect from './HandlerIntrospect'

const Container = styled.div({
  position: 'relative',
  display: 'flex',
  minHeight: 400,
  height: '100%',
  flexDirection: 'column',
  flexGrow: 1,
  ' section': {
    display: 'flex',
    flexDirection: 'column',
    ' >div:last-of-type': {
      margin: '0 15px 70px 15px'
    }
  }
})
const ToggleBox = styled.div({
  position: 'absolute',
  bottom: 0,
  display: 'flex',
  height: 50,
  width: '100%',
  padding: '0 20px',
  justifyContent: 'flex-end',
  alignItems: 'center',
  background: '#F8F8F8',
  borderTop: '1px solid #DFE2E5',
  ' button': {
    borderRadius: 2,
    border: 'none',
    height: 30,
    width: 250,
    color: 'white',
    fontWeight: 700
  }
}, ({ active }) => ({
  ' button': {
    background: active ? 'red' : '#4ABA59'
  }
}))
export default function FixtureDetails ({ selectedFixture }) {
  const { toggleFixture } = useContext(InteractorContext)
  return (
    <Container>
      <h2>{ selectedFixture.name }</h2>
      <section>
        { selectedFixture.handlers.map(handler => <HanderIntrospect {...handler} />) }
      </section>
      <ToggleBox active={selectedFixture.active}>
        <button onClick={() => toggleFixture(selectedFixture.name)}>
          {selectedFixture.active ? 'Deactivate Fixture' : 'Activate Fixture'}
        </button>
      </ToggleBox>
    </Container>
  )
}