import {Link} from 'react-router-dom'
const Product = () => {
    return (
        <>
            <Link to='/products/1'>Product 1</Link>
            <Link to='/products/2'>Product 2</Link>
            <Link to='/products/3'>Product 3</Link>
        </>
        
    )
}

export default Product;