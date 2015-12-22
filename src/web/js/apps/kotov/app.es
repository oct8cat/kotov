import { history } from 'backbone'
import { Application } from 'backbone.marionette'
import Router from './router'
import Layout from './views/layout'

export const app = new Application()

app.on('start', function () {
    app.layout = (new Layout({el: '#root'})).render()
    app.router = new Router({layout: app.layout})
    history.start({pushState: true})
})

export default app
