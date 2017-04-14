import React from 'react'
import sinon from 'sinon'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme'
import Product from '../../app/components/product.jsx'

describe ('<Product />', () => {
    it('should contian one h2 tag', ()=> {

        let result = shallow(<Product />)
        
        // We can find a specific tag eg h2, or class eg .classname or id eg #id
        expect(
            result.find('h2')
        ).to.have.length(1)
    })

    it ('will call componentDidMount', () => {
        sinon.spy(Product.prototype, 'componentDidMount')
        let wrapper = mount(<Product />)
        expect(Product.prototype.componentDidMount).to.have.property('callCount', 1)
        Product.prototype.componentDidMount.restore()
    })
})