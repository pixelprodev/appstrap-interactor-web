import styled from '@emotion/styled'
import { useContext, useState } from 'react'
import InteractorContext from '../../context'
import TextInput from '../common/TextInput'


const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
})

const EndpointSelector = styled.div({
  height: 50,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #DFE2E5',
  '&:first-of-type': {
    borderTop: '1px solid #DFE2E5',
  },
  padding: '0 30px',
  cursor: 'pointer',
  ' button': {
    display: 'none'
  },
  ' h2': {
    fontSize: 14,
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
  background: selected ? '#F8F8F8' : 'white',
  ' h2': {
    fontWeight: selected ? 700 : 300
  }
}))
export default function EndpointNavigation ({ selectedEndpointKey, update }) {
  const [filterCriteria, setFilterCriteria] = useState('')
  const { endpoints, setModifier } = useContext(InteractorContext)
  const filterExp = new RegExp(RegExp.escape(filterCriteria), 'i')
  const availableEndpoints = endpoints.filter(([pathname]) => filterExp.test(pathname))
  
  function updateFilter(e) {
    setFilterCriteria(e.target.value)
  }
  
  return (
    <Container>
      <TextInput onKeyUp={updateFilter} placeholder={'Filter by name'} />
      { availableEndpoints.map(([pathname, endpoint]) => 
        <EndpointSelector
          key={pathname}
          selected={pathname === selectedEndpointKey}
          onClick={() => update(pathname)}
        >
          <h2>{pathname}</h2>
        </EndpointSelector>
      )}
    </Container>
  )
}