import { createContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ProductCard from './components/ProductCard'

const products = [
  {
    id: 1,
    tittle: 'tourmaline & eucaliptus bar soap',
    price: 12,
    description: 'Recharge your skin with the super Energizing power, of finely crushed tourmaline powder blended with natural complexion',
    image: 'https://images.squarespace-cdn.com/content/v1/5f733a04bb753e79eb9e9d72/1603738775131-9PBO1KOHDWE3CQCD1VVQ/DD_BarSoap_VermontSunshine-1.png?format=500w'
  },
  {
    id: 2,
    tittle: 'tourmaline & eucaliptus bar soap',
    price: 12,
    description: 'Recharge your skin with the super Energizing power, of finely crushed tourmaline powder blended with natural complexion',
    image: 'https://images.squarespace-cdn.com/content/v1/5f733a04bb753e79eb9e9d72/1603738775131-9PBO1KOHDWE3CQCD1VVQ/DD_BarSoap_VermontSunshine-1.png?format=500w'
  },
  {
    id: 3,
    tittle: 'tourmaline & eucaliptus bar soap',
    price: 12,
    description: 'Recharge your skin with the super Energizing power, of finely crushed tourmaline powder blended with natural complexion',
    image: 'https://images.squarespace-cdn.com/content/v1/5f733a04bb753e79eb9e9d72/1603738775131-9PBO1KOHDWE3CQCD1VVQ/DD_BarSoap_VermontSunshine-1.png?format=500w'
  },
  {
    id: 4,
    tittle: 'tourmaline & eucaliptus bar soap',
    price: 12,
    description: 'Recharge your skin with the super Energizing power, of finely crushed tourmaline powder blended with natural complexion',
    image: 'https://images.squarespace-cdn.com/content/v1/5f733a04bb753e79eb9e9d72/1603738775131-9PBO1KOHDWE3CQCD1VVQ/DD_BarSoap_VermontSunshine-1.png?format=500w'
  },
  {
    id: 5,
    tittle: 'tourmaline & eucaliptus bar soap',
    price: 12,
    description: 'Recharge your skin with the super Energizing power, of finely crushed tourmaline powder blended with natural complexion',
    image: 'https://images.squarespace-cdn.com/content/v1/5f733a04bb753e79eb9e9d72/1603738775131-9PBO1KOHDWE3CQCD1VVQ/DD_BarSoap_VermontSunshine-1.png?format=500w'
  },
  {
    id: 6,
    tittle: 'tourmaline & eucaliptus bar soap',
    price: 12,
    description: 'Recharge your skin with the super Energizing power, of finely crushed tourmaline powder blended with natural complexion',
    image: 'https://images.squarespace-cdn.com/content/v1/5f733a04bb753e79eb9e9d72/1603738775131-9PBO1KOHDWE3CQCD1VVQ/DD_BarSoap_VermontSunshine-1.png?format=500w'
  },


]
function App() {
  const [fSize, setFSize] = useState(20)
  const [list, setList] = useState(products)
  const [product, setProduct] = useState({})

  //   useEffect(()=>{
  //     if (product.id){
  //       const newArr=list.map(p=>{
  //         if (p.id==product.id){
  //           return {...p,tittle:product.tittle}
  //         }
  //         else {
  //           return p
  //         }
  //       });

  //     }


  // },[product])
  const handlerState = (setState) => {
    if (product.tittle) {

      setState(product.tittle)
    }
  }
  return (


    <div className="App">
      <header> <h1> Product List</h1></header>
      <div className='header-panel'>
        <input type="text" value={product.tittle ? product.tittle : ''} onChange={e => setProduct({ ...product, tittle: e.target.value })} />
        <input type="range" min={19} max={24} value={fSize} onChange={e => setFSize(e.target.value)} />
      </div>
      <div className='product-container'>

        {list && list.map(product =>
          <ProductCard key={product.id} product={product} fsize={fSize} setProduct={setProduct} handlerState={handlerState} pTittle={product.tittle?product.tittle:''}/>
        )}
      </div>


    </div>

  )
}

export default App
