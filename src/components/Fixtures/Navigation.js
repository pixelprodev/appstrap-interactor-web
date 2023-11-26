import styled from '@emotion/styled'
import { useContext, useState } from 'react'
import InteractorContext from '../../context'
import TextInput from '../common/TextInput'
import ActiveList from './Content/ActiveList'


const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: 400
})

const FixtureSelector = styled.div({
  height: 60,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #EDEDED',
  '&:first-of-type': {
    borderTop: '1px solid #EDEDED',
  },
  padding: '0 30px',
  cursor: 'pointer',
  ' button': {
    display: 'none'
  },
  ' h2': {
    fontSize: 16,
    fontWeight: 300
  },
  '&:hover': {
    ' button': {
      display: 'block',
      height: 20,
      background: '#DDD',
      fontSize: 9,
      fontWeight: 500,
      textTransform: 'uppercase',
      outline: 'none',
      cursor: 'pointer',
      color: '#888',
      borderRadius: 2,
      border: '1px solid #CCC',
      padding: '0 15px',
      '&:hover': {
        background: '#36AF47',
        fontWeight: 700,
        border: '2px solid #10611f',
        color: 'white'
      }
    }
  },
}, ({ selected }) => ({
  borderRight: selected ? '5px solid #444' : '',
  ' h2': {
    fontWeight: selected ? 700 : 300
  }
}))
export default function FixtureNavigation ({ selectedFixtureName, update }) {
  const [filterCriteria, setFilterCriteria] = useState('')
  const { config, toggleFixture } = useContext(InteractorContext)
  const { fixtures } = config
  const filterExp = new RegExp(RegExp.escape(filterCriteria), 'i')
  const availableFixtures = fixtures.collection.filter(f => typeof fixtures.active.find(({ key: name }) => name === f.name) === 'undefined' && filterExp.test(f.name))
  
  function preventBubbleAndToggle(e, name) {
    e.stopPropagation()
    toggleFixture(name)
    const remainingFixtures = [...availableFixtures.filter(f => f.name !== name)]
    if (remainingFixtures.length > 0) {
      update(remainingFixtures[0].name)
    }
  }
  
  function updateFilter(e) {
    setFilterCriteria(e.target.value)
  }
  
  return (
    <Container>
      <ActiveList update={update}/>
      <TextInput onKeyUp={updateFilter} placeholder={'Filter by name'} />
      { availableFixtures.map(({ name }) => 
        <FixtureSelector
          key={name}
          selected={name === selectedFixtureName}
          onClick={() => update(name)}
        >
          <h2>{name}</h2>
          <button onClick={(e) => preventBubbleAndToggle(e, name)}>Activate</button>
        </FixtureSelector>
      )}
    </Container>
  )
}