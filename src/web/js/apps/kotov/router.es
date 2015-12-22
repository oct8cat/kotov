import { Router as BackboneRouter } from 'backbone'
import Dummy from './components/dummy'

export const Router = BackboneRouter.extend({
    initialize: function (opts) {
        this.layout = opts.layout
    },
    routes: {
        '': 'index',
    },
    index: function () {
        ;(new Dummy()).start({region: this.layout.getRegion('content')})
    }
})

export default Router
