import { useContext, useState } from 'react'
import InteractorContext from '../../context'
import Section from '../common/Section'
import FixtureNavigation from './Navigation'
import FixtureContent from './Content'

export default function Fixtures () {
  const { fixtures } = useContext(InteractorContext)
  if (fixtures && fixtures.length === 0) { return }
  const [selectedFixtureName, setSelectedFixtureName] = useState(fixtures[0].name)
  
  return (
    <Section
      heading='Fixtures'
      navigation={
        <FixtureNavigation
          selectedFixtureName={selectedFixtureName}
          update={setSelectedFixtureName}
        />
      }
      content={
        <FixtureContent
          selectedFixture={fixtures.find(f => f.name === selectedFixtureName)}
          update={setSelectedFixtureName}
        />
      }
    />
  )
}