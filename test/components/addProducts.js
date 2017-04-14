import React from 'react'
import sinon from 'sinon'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import AddProduct from '../../app/components/addProducts.jsx'

describe ('<AddProduct />', () => {
    it('Responds to click events', () => {
        let handleClick = sinon.spy()
        let wrapper = shallow(<AddProduct handleClick={handleClick}/>)
        wrapper.find('button').simulate('click')
        expect(handleClick.calledOnce).to.equal(true)
    })
})