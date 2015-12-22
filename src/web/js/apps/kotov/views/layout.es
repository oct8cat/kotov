import _ from 'lodash'
import { LayoutView } from 'backbone.marionette'

export const Layout = LayoutView.extend({
    template: _.template('<header data-region="header" /><main data-region="content" /><footer data-region="footer" />'),
    regions: {
        content: '[data-region="content"]'
    }
})

export default Layout
