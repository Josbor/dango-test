import React, { useEffect, useState } from 'react'

      
const ProductCard = ({product,fsize,setProduct,totalProducts,setTotalProducts}) => {
    //STATES
   
    const [quantity,setQuantity]=useState(1)
    const {price,description,image,tittle}=product
   
    const editField=document.querySelector('#input-edit'); 
   
    //STYLES
    const cardTittle={
        fontSize:`${fsize}px`,
        fontWeight:'bold',
        textTransform:'capitalize'
    }

    const cardImage={
        width:'100%',
        height:'140px',
        backgroundImage:`url("${image}")`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        borderRadius:'15px',
      
        

    }
    const handleQuantity=(cant)=>{
        setTotalProducts((Number(totalProducts)-quantity)+Number(cant))
        setQuantity(Number(cant)==0?null:Number(cant))
    }
    return (
    <div className='product-card' >
        <div style={cardImage}></div>
        <div>

        <div  className='tittle-field' onClick={()=>{
            setProduct(product);
            const end = editField.value.length;

          
            editField.setSelectionRange(end, end);
         
            editField.focus()
            
           
        
        }} ><h1 style={cardTittle}>{tittle}</h1></div>
        <div className='card-amount'>
            <h2>${price}.00</h2>
            <input type="number" min={0} max={100} value={quantity} onChange={e=>handleQuantity(e.target.value)} onBlur={e=>e.target.value==''&&quantity==''&&setQuantity(0)} onFocus={(e)=>e.target.value==0&&setQuantity('')}/>
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