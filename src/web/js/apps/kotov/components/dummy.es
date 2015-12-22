import _ from 'lodash'
import { Model } from 'backbone'
import { ItemView } from 'backbone.marionette'

import './dummy.css'

export class Dummy {
    start (opts) {
        const data = window.dummy = new Model({
            title: 'Dummy component',
            content: 'This is a dummy component.<br /> ' +
                     'Use <tt>window.dummy.set({title: "...", content: "..."})' +
                     '</tt> to test UI updates.',
        })
        opts.region.show(new View({model: data}))
    }
}

export const View = ItemView.extend({
    tagName: 'section',
    className: 'component component-dummy',
    template: _.template('<h1 data-ui="title" /><div data-ui="content" />'),
    ui: {
        title: '[data-ui="title"]',
        content: '[data-ui="content"]',
    },
    modelEvents: {
        'change *': 'onChangeAll'
    },
    onChangeAll: function (model) {
        this.updateUI(Object.keys(model.changed))
    },
    onRender: function () {
        this.updateUI()
    },
    updateUI: function (keys) {
        if (typeof keys === 'undefined') { keys = Object.keys(this.ui) }
        keys.forEach((k) => { this.ui[k].html(this.model.get(k)) })
    }
})

export default Dummy
