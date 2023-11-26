import { useContext } from 'react'
import InteractorContext from '../../context'
import EndpointGroup from './EndpointGroup'

export default function Endpoints () {
  const { config } = useContext(InteractorContext)
  const { endpoints, gqlOperations } = config
  if (endpoints && endpoints.length === 0) { return }
  
  const endpointGroups = new Set()
  endpoints.forEach(endpoint => {
    if (!endpoint.isGql) {
      endpointGroups.add(endpoint.path)
    }
  })
  
  const gqlEndpoint = endpoints.find(endpoint => endpoint.isGql)
  if (gqlEndpoint) {
    gqlEndpoint.handlers = gqlOperations
  }
  
  const endpointsToRender = []
  if (gqlEndpoint) {
    endpointsToRender.push(gqlEndpoint)
  }
  Array.from(endpointGroups).forEach(endpointGroup => {
    endpointsToRender.push({
      path: endpointGroup,
      handlers: endpoints.filter(endpoint => endpoint.path === endpointGroup)
    })
  })

  return endpointsToRender.map(endpointGroup => <EndpointGroup {...endpointGroup} />)
}