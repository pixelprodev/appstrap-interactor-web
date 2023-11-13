import styled from '@emotion/styled'
import Toggle from 'react-toggle'
import { useContext } from 'react'
import InteractorContext from '../../context'
import TextInput from '../common/TextInput'

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
  maxHeight: 100,
  padding: '0 20px',
  ' label': {
    margin: '10px 0',
    display:'flex',
    gap: 5,
    flexDirection: 'column'
  }
})

const ModifierGrid = styled.div`
  display: grid;
  //width: calc(100% - 90px);
  width: 400px;
  margin-left: 30px;
  grid-template-rows: min-content min-content min-content min-content;
  grid-template-areas:
    "latencyToggle latencyMS forwardToggle forwardTo"
    "errorToggle errorCode errorMessage errorMessage";
  button {
    width: 150px;
    height: 25px;
    font-size: 14px;
    font-weight: 700;
    border: none;
    &.error {
      &.active {
        background: #F00;
        color: white;
      }
    }
    &.latency {
      &.active {
        background: #A28D00;
        color: white;
      }
    }
  }
  input {
    width: 75px;
    flex-grow: 0;
    margin: 5px 0;
  }
  div {
    display: flex;
    flex-grow: 0;
    max-width: 200px;
    align-items: center;
  }
}
`

export default function HandlerIntrospect({ endpointKey, name, method, allowRequestForwarding, enabled, error, errorCode, errorMessage, latency, latencyMS }) {
  const { setModifier } = useContext(InteractorContext)
  return (
    <Container>
      <Heading>{name}</Heading>
      <MetaBox>
        <label>
          <Toggle 
            checked={enabled}
            onChange={(e) => {
              setModifier({key: endpointKey, method, enabled: e.target.checked})
            }}
          />
         Enabled
        </label>
        <ModifierGrid>
          <div style={{ gridArea: 'latencyToggle' }}>
            <button className={`latency ${latency ? 'active' : ''}`} onClick={() => setModifier({key: endpointKey, method, latency: !latency})}>Latency</button>
          </div>
          <div style={{ gridArea: 'latencyMS' }}>
            <TextInput value={latencyMS} onKeyUp={(e) => setModifier({key: endpointKey, method, latencyMS: e.target.value})} />
          </div>
          <div style={{ gridArea: 'forwardToggle' }}>
            &nbsp;
          </div>
          <div style={{ gridArea: 'forwardTo' }}>&nbsp;</div>
          <div style={{ gridArea: 'errorToggle' }}>
            <button className={`error ${error ? 'active' : ''}`} onClick={() => setModifier({key: endpointKey, method, error: !error})}>Error</button>
          </div>
          <div style={{ gridArea: 'errorCode' }}>
            <TextInput value={errorCode} onKeyUp={(e) => setModifier({key: endpointKey, method, errorCode: e.target.value})} />
          </div>
          <div style={{ gridArea: 'errorMessage' }}>&nbsp;</div>
        </ModifierGrid>
      </MetaBox>
    </Container>
  )
}