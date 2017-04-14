import { expect } from 'chai'

import {addToCart} from '../../app/actions'

describe ('Add to Cart', () =>{

    it('will return an action object with a payload of 22 when passed 22'), () => {
        expect (addToCart(22).payload).to.equal(22)
    }
    
    it ('will return an action object of type ADD_TO_CART', () => {
        expect (addToCart(22).type).to.equal('ADD_TO_CART')
    })
})