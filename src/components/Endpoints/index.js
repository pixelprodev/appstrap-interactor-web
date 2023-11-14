import { useContext, useState } from 'react'
import InteractorContext from '../../context'
import Section from '../common/Section'
import EndpointNavigation from './Navigation'
import EndpointDetails from './EndpointDetails'

export default function Endpoints () {
  const { endpoints } = useContext(InteractorContext)
  if (endpoints && endpoints.length === 0) { return }
  const [selectedEndpointKey, setSelectedEndpointKey] = useState(endpoints[0][0])
  
  return (
    <Section
      heading='Endpoints'
      navigation={<EndpointNavigation selectedEndpointKey={selectedEndpointKey} update={setSelectedEndpointKey}/>}
      content={<EndpointDetails selectedEndpointKey={selectedEndpointKey} />}
    />
  )
}