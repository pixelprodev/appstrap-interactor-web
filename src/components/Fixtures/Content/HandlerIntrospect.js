import styled from '@emotion/styled'
import { useContext } from 'react'
import { IntrospectModalContext } from '../../IntrospectModal/IntrospectModalContext'
import Highlight from 'react-highlight'

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  margin: '0 15px 15px 15px',
  border: '1px solid #DFE2E5'
})
const Heading = styled.div({
  display: 'flex',
  flexGrow: 1,
  padding: '0 10px',
  alignItems: 'center',
  height: 25,
  fontSize: 14,
  fontWeight: 700,
  background: '#222',
  color: '#EEE'
})

const MetaBox = styled.div({
  display: 'flex',
  padding: '0 20px',
  '>div': {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '25%',
    padding: '10px 0',
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

const InlineAction = styled.div({
  ' code': {
    fontSize: 18,
    lineHeight: '20px'
  }
})

const InspectRedirectPrompt = styled.div({
  background: '#CCC',
  color: '#444',
  height: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 14,
  fontWeight: 400
})
export default function HanderIntrospect({operationName, path, method, payload, mode, handler}) {
  const { activateIntrospect } = useContext(IntrospectModalContext)
  const heading = operationName ? operationName : `${method} ${path}`
  let action = handler ? handler : payload
  action = typeof action === 'string' ? action : JSON.stringify(action, null, 2)
  const showActionInline = (action.match(/\n/g) || []).length <= 10
  
  return (
    <Container>
      <Heading>{heading}</Heading>
      <MetaBox>
        <div>
          <h3>Mode</h3>
          <span>{mode}</span>
        </div>
        <div>
          <h3>Handler Type</h3>
          <span>{handler ? 'Function' : 'Payload'}</span>
        </div>
        <div>
          <h3>Endpoint Type</h3>
          <span>{operationName ? 'Graph' : 'REST'}</span>
        </div>
        <div>
          <button onClick={() => activateIntrospect({heading, action})}>Inspect</button>
        </div>
      </MetaBox>
      <InlineAction>
        {showActionInline
          ? <Highlight className='javascript'>{action}</Highlight>
          : <InspectRedirectPrompt>Code snippet is too large to show inline.  Use the inspect button to view.</InspectRedirectPrompt>
        }
      </InlineAction>
    </Container>
  )
}