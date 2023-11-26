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
  paddingLeft: 50,
  flexGrow: 1,
  ' section': {
    display: 'flex',
    flexDirection: 'column',
    ' >div:last-of-type': {
      margin: '0 15px 70px 15px'
    }
  }
})

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 40px 20px;
  margin-bottom: 50px;
  h2 {
    font-size: 30px;
    font-weight: 700;
  }
  button {
    border-radius: 2px;
    border: none;
    height: 30px;
    width: 250px;
    color: white;
    font-weight: 700;
    background: ${({active}) => active ? 'red' : '#4ABA59'};
  }
`
export default function FixtureDetails ({ selectedFixture }) {
  const { config, toggleFixture } = useContext(InteractorContext)
  const { fixtures } = config
  const isActive = fixtures.active.find(fixture => fixture.key === selectedFixture.name)
  return (
    <Container>
      <Heading active={isActive}>
        <h2>{ selectedFixture.name }</h2>
        <button onClick={() => toggleFixture(selectedFixture.name)}>
          {isActive ? 'Deactivate Fixture' : 'Activate Fixture'}
        </button>
      </Heading>
      <section>
        { selectedFixture.handlers.map(handler => <HanderIntrospect {...handler} />) }
      </section>
    </Container>
  )
}