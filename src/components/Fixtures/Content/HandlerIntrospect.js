import styled from '@emotion/styled'
import Highlight from 'react-highlight'

const Container = styled.div`
  display: flex;
  margin: 0px 15px 15px 15px;
  :not(:first-of-type) {
    border-top: 1px solid #EDEDED;
    padding-top: 50px;
  }
`

const HeadingBox = styled.div`
  width: 275px;
  h3 {
    font-size: 20px;
    font-weight: 300;
  }
`
const MetaBox = styled.div({
  display: 'flex',
  width: 200,
  flexDirection: 'column',
  '>div': {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '25%',
    marginBottom: 50,
    '&:last-of-type': {
      justifyContent: 'center',
      ' button': {
        fontWeight: 700
      }
    },
    ' h3': {
      fontSize: 14,
      fontWeight: 300,
      color: '#888',
      marginBottom: 5
    },
    ' span': {
      textTransform: 'capitalize',
      fontSize: 18,
      fontWeight: 900
    }
  }
})


const SnippetBox = styled.div`
  code {
    font-size: 16px;
    line-height: 20px;
  }
`

export default function HanderIntrospect({operationName, path, method, payload, mode = 'Merge', handler}) {
  const heading = operationName ? operationName : `${method} ${path}`
  let action = handler ? handler : payload
  action = typeof action === 'string' ? action : JSON.stringify(action, null, 2)
  
  return (
    <Container>
      <HeadingBox>
        <h3>{heading}</h3>
      </HeadingBox>
      <MetaBox>
        <div>
          <h4>Mode</h4>
          <span>{mode}</span>
        </div>
        <div>
          <h4>Handler Type</h4>
          <span>{handler ? 'Function' : 'Payload'}</span>
        </div>
        <div>
          <h4>Endpoint Type</h4>
          <span>{operationName ? 'Graph' : 'REST'}</span>
        </div>
      </MetaBox>
      <SnippetBox>
        <h4>Applies when active:</h4>
        <Highlight className='javascript'>{action}</Highlight>
      </SnippetBox>
    </Container>
  )
}