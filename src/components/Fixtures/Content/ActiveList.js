import styled from '@emotion/styled'
import { useContext } from 'react'
import InteractorContext from '../../../context'

const Container = styled.div({
  width: 375,
  height: '100%',
  borderLeft: '1px solid #DFE2E5'
})
const ActiveFixture = styled.div({
  height: 30,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '0 15px 7px 15px',
  padding: '0 15px',
  flexGrow: 1,
  borderRadius: 2,
  background: '#36AF47',
  color: 'white',
  fontSize: 12,
  fontWeight: 700,
  cursor: 'pointer',
  ' button': {
    display: 'none'
  },
  '&:hover': {
    ' button': {
      display: 'block',
      height: 20,
      background: '#187D26',
      fontSize: 9,
      fontWeight: 500,
      textTransform: 'uppercase',
      outline: 'none',
      cursor: 'pointer',
      color: 'white',
      borderRadius: 2,
      border: '1px solid #CCC',
      padding: '0 15px',
      '&:hover': {
        background: '#4ABA59',
        fontWeight: 700,
        color: 'white'
      }
    }
  }
})

export default function ActiveList ({ update }) {
  const { fixtures, toggleFixture } = useContext(InteractorContext)

  function preventBubbleAndToggle(e, name) {
    e.stopPropagation()
    toggleFixture(name)
  }
  
  const activeFixtures = fixtures.filter(f => f.active).sort(({order:a}, {order:b}) => a - b)
  
  return (
    <Container>
      <h2>Activated Fixtures</h2>
      {activeFixtures.map(({ name }) => 
        <ActiveFixture key={name} onClick={() => update(name)}>
          {name}
          <button onClick={(e) => preventBubbleAndToggle(e, name)}>Deactivate</button>
        </ActiveFixture>
      )}
    </Container>
  )
}
