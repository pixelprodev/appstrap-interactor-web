import styled from '@emotion/styled'
import Toggle from 'react-toggle'
import { useContext } from 'react'
import InteractorContext from '../../context'

const Container = styled.div`
  padding: 35px 20px;
  :not(:first-of-type) {
    border-top: 1px solid #EDEDED 
  }
  input {
    border: 1px solid #DFE3E9;
    font-size: 12px;
    height: 30px;
    padding: 0 10px;
    border-radius: 4px;
  }
  button {
    font-size: 10px;
    font-weight: 700;
    color: white;
    border-radius: 4px;
    border: 1px solid #AAA;
  }
  > div {
    display: flex;
    align-items: center;
    height: 30px;
  }
  .column-1 {
    display: flex;
    align-items: center;
    width: 20%;
  }
  .column-2 {
    display: flex;
    justify-content: space-between;
    width: 30%;
    padding: 0 20px;
    button {
      width: 100px;
      margin-right: 10px;
    }
    input {
      width: 125px;
    }
  }
  .column-3 {
    padding-left: 20px;
    display: flex;
    flex-grow: 1;
    align-items: center;
    input {
      width: 100%;
    }
  }
  .react-toggle {
    margin-right: 10px;
  }
  label {
    display: flex;
    align-items: center;
    font-size: 10px;
  }
`

const TopRow = styled.div`
  margin-bottom: 10px;
  h2 {
    font-size: 18px;
    font-weight: 300;
  }
  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-right: 30px;
  }
`

const BottomRow = styled.div``
const ActionButton = styled.button`
  background: ${({buttonType, isActive}) => getColor(buttonType, isActive)};
`

function getColor(buttonType, isActive) {
  if (isActive) {
    return buttonType === 'error' ? 'red' : '#A37F00'
  } else {
    return '#D5D5D5'
  }
}

export default function EndpointHandler ({
  method,
  path,
  operationName,
  enabled,
  latency,
  latencyMS,
  error,
  errorCode,
  requestForwardingEnabled,
  requestForwardingDestination
}) {
  const { setModifier } = useContext(InteractorContext)
  
  async function triggerSetModifier(property, value) {
    const key = path || operationName
    setModifier({ key, method, [property]: value })
  }
  
  return (
    <Container>
      <TopRow>
        <div className='column-1'>
          <h2 highlightcolor={method}>{ operationName || method }</h2>
        </div>
        <div className='column-2'>
          <ActionButton buttonType='latency' isActive={latency} onClick={() => triggerSetModifier('latency', !latency)}>Latency</ActionButton>
          <input type='text' placeholder='Latency MS' value={latencyMS} onChange={(e) => triggerSetModifier('latencyMS', e.target.value)}/>
        </div>
        <div className='column-3'>
          <h3>Request Forwarding</h3>
          <label>
            <Toggle
              checked={requestForwardingEnabled}
              onChange={(e) => {  triggerSetModifier('requestForwardingEnabled', e.target.checked)} }
            />
            {requestForwardingEnabled ? 'Allowed' : 'Disabled'}
          </label>
        </div>
      </TopRow>
      <BottomRow>
        <div className='column-1'>
          <label>
            <Toggle
              checked={enabled}
              onChange={(e) => { triggerSetModifier('enabled', e.target.checked)} }
            />
            Intercept
          </label>
        </div>
        <div className='column-2'>
          <ActionButton buttonType='error' isActive={error} onClick={() => triggerSetModifier('error', !error)}>Error</ActionButton>
          <input type='text' placeholder='Error Code' value={errorCode} onChange={(e) => triggerSetModifier('errorCode', e.target.value)}/>
        </div>
        <div className='column-3'>
          <input type='text' placeholder='Forwarding destination' value={requestForwardingDestination} onChange={(e) => triggerSetModifier('requestForwardingDestination', e.target.value)}/>
        </div>
      </BottomRow>
    </Container>
  )
}