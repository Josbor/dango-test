import React, { useEffect, useState } from 'react'

const ProductCard = ({product,fsize,setProduct,handlerState,pTittle}) => {
    //STATES
    const [tittle, setTittle] = useState(product.tittle?product.tittle:'')
    const [quantity,setQuantity]=useState(1)
    const {price,description,image}=product
    console.log({pTittle})
    useEffect(()=>{
        if (pTittle!==''){
            setTittle(pTittle)
           
        }

    },[pTittle])
    
    //STYLES
    const cardTittle={
        fontSize:`${fsize}px`,
        fontWeight:'bold'
    }

    const cardImage={
        width:'100%',
        height:'140px',
        backgroundImage:`url("${image}")`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        borderRadius:'15px'


    }
    const handleTittle=()=>{
        setProduct(product)
        handlerState
    }
    return (
    <div className='product-card' onClick={()=>setProduct(product)}>
        <div style={cardImage}></div>
        <div>

        <div ><h1 style={cardTittle}>{tittle}</h1></div>
        <div className='card-amount'>
            <h2>${price}.00</h2>
            <input type="text" value={quantity} onChange={e=>setQuantity(e.target.value)} />
        </div>
        <div className='card-description'>
            <p>{description}</p>
        </div>
        </div>
        <div className='card-buttons'>
            <button> Add to card</button>
            <a href="#">learn more</a>
        </div>
    </div>
  )
}

export default ProductCard