import styled from '@emotion/styled'
import FixtureDetails from './FixtureDetails'
import ActiveList from './ActiveList'

const Container = styled.div({
  display: 'flex',
  flexGrow: 1
})
export default function FixtureContent ({ selectedFixture, update }) {
  return (
    <Container>
      <FixtureDetails selectedFixture={selectedFixture}/>
      <ActiveList update={update}/>
    </Container>
  )
}