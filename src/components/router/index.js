import PageHome from "../../pages/PageHome"
import PageWeather from '../../pages/PageWeather'

export const routesApp = [
    {
        name: 'Weather',
        element: <PageWeather />,
        path: '/'
    },
    {
        name: 'Home',
        element: <PageHome />,
        path: '/home'
    }
]

export default routesApp