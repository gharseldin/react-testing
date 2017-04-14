import React from 'react'

/*let Product = ({name, cost, description}) => (
    <section>
        <h2>{name} ${cost}</h2>
        <p>{description}</p>
    </section>
)

export default Product*/

// We will need it in Class for to have it mount

export default class Product extends React.Component{

    componentDidMount(){
        console.log('Component mounted')
    }
    render() {
        let {name, cost, description} = this.props
        return (
        <section>
        <h2>{name} ${cost}</h2>
        <p>{description}</p>
        </section>
        )
    }
}