import {useParams} from 'react-router-dom';
const ProductDetails = () => {

    const param = useParams()
    return (
        <>Id: {param.id}</>
    )
}

export default ProductDetails;