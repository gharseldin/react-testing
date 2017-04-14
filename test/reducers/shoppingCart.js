import { expect } from 'chai'
import shoppingCart from "../../app/reducers/shoppingCart"

describe ('shoppingCart reducer', ()=> {
    it('can add new products', () => {
        expect (
            shoppingCart([] ,{type: 'ADD_TO_CART', payload: 22})
        ).to.eql([22])
    })

    it('can remove products from cart', ()=> {
        // We can initialize code here for our test case
        let state = []
        state = shoppingCart(state, {type : 'ADD_TO_CART', payload : 10})
        state = shoppingCart(state, {type : 'ADD_TO_CART', payload : 20})
        state = shoppingCart(state, {type : 'ADD_TO_CART', payload : 30})
        state = shoppingCart(state, {type : 'ADD_TO_CART', payload : 40})
        state = shoppingCart(state, {type : 'ADD_TO_CART', payload : 50})
        expect(
            shoppingCart(state, {type: 'REMOVE_FROM_CART', payload: 30})
        ).to.eql([10, 20, 40, 50])
    })
})