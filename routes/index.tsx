interface IRoute{
    path?: string
    icon?: string
    name: string
    routes?: IRoute[]
    checkActive?(pathname: String, route: IRoute): boolean
    exact?: boolean
  }

  export function routeIsActive (pathname: String, route: IRoute): boolean {
    if (route.checkActive) {
      return route.checkActive(pathname, route)
    }
  
    return route?.exact
      ? pathname == route?.path
      : (route?.path ? pathname.indexOf(route.path) === 0 : false)
  }

const routes: IRoute[] = [

]

export type {IRoute}
export default routes