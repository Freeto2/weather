import { useRoutes } from 'react-router'
import routesApp from './index'

const AppWrapper = () => {
  return  useRoutes(routesApp)
}

export default AppWrapper