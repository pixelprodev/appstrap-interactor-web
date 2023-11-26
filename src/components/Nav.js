import styled from '@emotion/styled'

const Container = styled.nav({
  borderBottom: '1px solid #DFE2E5'
})
const MaxWidth = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
`

const Tab = styled.div`
  width: 100px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-bottom: 3px solid ${({isActive}) => isActive ? '#000' : 'transparent'};
  font-weight: ${({isActive}) => isActive ? 700 : 400}
`

export default function Nav ({ activeTab, setActiveTab }) {
  return (
    <Container>
      <MaxWidth>
        <Tab isActive={activeTab === 'endpoints'} onClick={() => setActiveTab('endpoints')}>Endpoints</Tab>
        <Tab isActive={activeTab === 'fixtures'} onClick={() => setActiveTab('fixtures')}>Fixtures</Tab>
      </MaxWidth>
    </Container>
  )
}