import styled from '@emotion/styled'
import EndpointHandler from './EndpointHandler'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  :not(:first-of-type) {
    border-top: 1px solid #EDEDED;
  }
`

const NameBox = styled.div`
  width: 500px;
  height: 125px;
  padding: 35px 0;
  h1 {
    font-weight: 100;
    font-size: 24px;
  }
`

const IsGql = styled.div`

`

const HandlerDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export default function EndpointGroup ({path, isGql, handlers}) {  
  return (
    <Container>
      <NameBox>
        <div>
          <h1>{path}</h1>
          {isGql && <IsGql />}
        </div>
      </NameBox>
      <HandlerDetails>
        {handlers.map(handler => <EndpointHandler {...handler} />)}
      </HandlerDetails>
    </Container>
  )
}
