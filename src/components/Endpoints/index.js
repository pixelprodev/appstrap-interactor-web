import { useContext } from 'react'
import InteractorContext from '../../context'
import EndpointGroup from './EndpointGroup'

export default function Endpoints () {
  const { config } = useContext(InteractorContext)
  const { endpoints } = config
  if (endpoints && endpoints.length === 0) { return }

  return endpoints.map(endpointGroup => <EndpointGroup {...endpointGroup} />)
}