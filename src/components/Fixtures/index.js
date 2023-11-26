import { useContext, useState } from 'react'
import InteractorContext from '../../context'
import FixtureNavigation from './Navigation'
import styled from '@emotion/styled'
import ActiveList from './Content/ActiveList'
import FixtureDetails from './Content/FixtureDetails'

const Container = styled.div`
  display: flex;
  width: 100%;
`

export default function Fixtures () {
  const { config } = useContext(InteractorContext)
  const { fixtures } = config
  if (fixtures && fixtures.length === 0) { return }
  const [selectedFixtureName, setSelectedFixtureName] = useState(fixtures.collection[0].name)
  
  return (
    <Container>
      <FixtureNavigation
        selectedFixtureName={selectedFixtureName}
        update={setSelectedFixtureName}
      />
      <FixtureDetails 
        selectedFixture={fixtures.collection.find(f => f.name === selectedFixtureName)}
        update={setSelectedFixtureName}
      />
    </Container>
  )
}