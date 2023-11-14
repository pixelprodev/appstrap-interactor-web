import React, {useContext, useEffect, useState} from 'react'
import styled from '@emotion/styled'
import RouteFilter from './RouteFilter'
import {SectionHeader} from '../../styles/SharedStyles'
import InteractorContext from '../../context'
import RouteGroup from './RouteGroup'

const Container = styled.div({
  width: '59%',
  borderRight: '1px solid #DFE2E5'
})

export default function Routes () {
  const { status: { routes = [] } } = useContext(InteractorContext)
  const [ routeFilter, setRouteFilter ] = useState('')
  const [ filteredRoutes, setFilteredRoutes ] = useState(routes)
  //
  // useEffect(() => {
  //   const filterExp = new RegExp(RegExp.escape(routeFilter), 'i')
  //   const unsortedFilteredRoutes = routes.filter(r => filterExp.test(r.id))
  //   const groupedRoutes = unsortedFilteredRoutes.reduce((groupedRoutes, r) => {
  //     Array.isArray(groupedRoutes[r.path])
  //       ? groupedRoutes[r.path].push(r)
  //       : groupedRoutes[r.path] = [r]
  //     return groupedRoutes
  //   }, {})
  //   setFilteredRoutes(groupedRoutes)
  // }, [routes, routeFilter])

  return (
    <Container>
      <SectionHeader>
        <h2>Routes</h2>
        <RouteFilter routeFilter={routeFilter} setRouteFilter={setRouteFilter} />
      </SectionHeader>
      { Object.keys(filteredRoutes).map(group => <RouteGroup key={group} path={group} routes={filteredRoutes[group]} />) }
    </Container>
  )
}
