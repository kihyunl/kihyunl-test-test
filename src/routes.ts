import { Router } from '@layer0/core/router'
import { starterRoutes } from '@layer0/starter'
import { CACHE_ASSETS } from './cache'
import shoppingFlowRouteHandler from './shoppingFlowRouteHandler'

export default new Router()
  .use(starterRoutes)
  // example routes for cacheable pages:
  .get('/', shoppingFlowRouteHandler)
  .get('/image', shoppingFlowRouteHandler)
  // example route for cacheable assets:
  .match('/static/:path*', ({ cache, proxy }) => {
    cache(CACHE_ASSETS)
    return proxy('origin')
  })
  // fallback route for all other requests:
  .fallback(({ proxy }) => {
    proxy('origin')
  })
