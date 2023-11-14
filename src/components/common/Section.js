import styled from '@emotion/styled'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  borderRadius: 4,
  border: '1px solid #DFE2E5',
  marginBottom: 20,
  ' section': {
    display: 'flex'
  }
})

const Heading = styled.div({
  display: 'flex',
  padding: '0 20px',
  borderTopLeftRadius: 4,
  borderTopRightRadius: 4,
  flexGrow: 1,
  alignItems: 'center',
  height: 50,
  background: '#222',
  color: 'white',
  fontSize: 18,
  fontWeight: 300
})

const NavContainer = styled.div({
  display: 'flex',
  width: 375,
  borderRight: '1px solid #DFE2E5',
})
const ContentContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  ' h2': {
    margin: 15,
    fontSize: 26,
    fontWeight: 300
  },
  'h4': {
    margin: '-5px 15px 15px 15px',
    fontSize: 12,
    color: '#888',
    fontWeight: 300
  }
})
export default function Section ({ heading, navigation, content }) {
  return(
    <Container>
      <Heading>{heading}</Heading>
      <section>
        <NavContainer>{navigation}</NavContainer>
        <ContentContainer>{content}</ContentContainer>
      </section>
    </Container>
  )
}