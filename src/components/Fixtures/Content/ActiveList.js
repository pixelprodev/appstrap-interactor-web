import styled from '@emotion/styled'
import { useContext } from 'react'
import InteractorContext from '../../../context'

const Container = styled.div`
  width: 100%;
  padding-top: 30px;
`
const ActiveFixture = styled.div({
  height: 40,
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
  const { config, toggleFixture } = useContext(InteractorContext)
  const { fixtures } = config

  function preventBubbleAndToggle(e, name) {
    e.stopPropagation()
    toggleFixture(name)
  }
  
  return (
    <Container>
      {fixtures.active.map(({ key: name }) => 
        <ActiveFixture key={name} onClick={() => update(name)}>
          {name}
          <button onClick={(e) => preventBubbleAndToggle(e, name)}>Deactivate</button>
        </ActiveFixture>
      )}
    </Container>
  )
}
