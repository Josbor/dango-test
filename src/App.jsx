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
    image: 'https://images.squarespace-cdn.com/content/v1/5f733a04bb753e79eb9e9d72/1603737633448-DPXORCQCDBQ63Q8YKID1/DD_BarSoap_SlateValley-1.png?format=500w'
  },
  {
    id: 2,
    tittle: 'tourmaline & argan oil bar soap',
    price: 12,
    description: 'Recharge your skin with the super Energizing power, of finely crushed tourmaline powder blended with natural complexion',
    image: 'https://images.squarespace-cdn.com/content/v1/5f733a04bb753e79eb9e9d72/1603738775131-9PBO1KOHDWE3CQCD1VVQ/DD_BarSoap_VermontSunshine-1.png?format=500w'
  },
  {
    id: 3,
    tittle: 'tourmaline & tea tree bar soap',
    price: 12,
    description: 'Recharge your skin with the super Energizing power of finely crushed tourmaline powder blended with natural complexion',
    image: 'https://images.squarespace-cdn.com/content/v1/5f733a04bb753e79eb9e9d72/1603738452720-38B05MVFQQPDF3SFM88F/DD_BarSoap_SummerBreeze-1.png?format=500w'
  },
  {
    id: 4,
    tittle: 'tourmaline unscented bar soap',
    price: 12,
    description: 'Recharge your skin with the super Energizing power of finely crushed tourmaline powder blended with natural complexion',
    image: 'https://images.squarespace-cdn.com/content/v1/5f733a04bb753e79eb9e9d72/1603736826662-AIPOB84CGAYMAMF08ZNW/DD_BarSoap_LavenderFarm-1.png?format=500w'
  },
  {
    id: 5,
    tittle: 'tourmaline & tea tree bar soap',
    price: 12,
    description: 'Recharge your skin with the super Energizing power of finely crushed tourmaline powder blended with natural complexion',
    image: 'https://images.squarespace-cdn.com/content/v1/5f733a04bb753e79eb9e9d72/1603736709682-CJU0RMP9Y0WGCMB14V55/DD_BarSoap_ForestGlen-1.png?format=500w'
  },
  {
    id: 6,
    tittle: 'tourmaline unscented bar soap',
    price: 12,
    description: 'Recharge your skin with the super Energizing power of finely crushed tourmaline powder blended with natural complexion',
    image: 'https://images.squarespace-cdn.com/content/v1/5f733a04bb753e79eb9e9d72/1603736826662-AIPOB84CGAYMAMF08ZNW/DD_BarSoap_LavenderFarm-1.png?format=500w'
  },


]
function App() {
  const [fSize, setFSize] = useState(20)
  const [list, setList] = useState([])
  const [prod, setProd] = useState({})
  const [totalProducts,setTotalProducts]=useState(0)

    useEffect(()=>{
      setList(products)
      setTotalProducts(products.length)
    },[])


    useEffect(()=>{
      if (prod.id){
      
        const newArr=list.map(p=>{
          if (p.id==prod.id){
            return {...p,tittle:prod.tittle==''?'no tittle':prod.tittle}
          }
          else {
            return p
          }
        });
        setList(newArr)
        console.log(newArr)
      }


  },[prod])


  const handlerBlur=()=>{
    if(prod.id){
      setProd({})
    }
  }


  return (


    <div className="App">
      <header> <h1> Product List</h1></header>
      <div className='header-panel'>
        
        <div> <input  
              id='input-edit' 
              type="text" 
              placeholder='select your item & edit it'
              value={prod.tittle ? prod.tittle : ''}
              onChange={e => setProd({ ...prod, tittle: e.target.value })}
              onBlur={handlerBlur}
              
              /></div>
        <div>
          <h3>
          Total Items:
          </h3>
          <p>
            {totalProducts}
          </p>
          </div>

        <div> <input type="range" min={19} max={24} value={fSize} onChange={e => setFSize(e.target.value)} /></div>
       
       
      </div>
      <div className='product-container'>

        {list && list.map(product =>
          <ProductCard 
            key={product.id}
            product={product}
            fsize={fSize} setProduct={setProd} 
            totalProducts={totalProducts}
            setTotalProducts={setTotalProducts}
             />
        )}
      </div>


          <footer>
            <div>
              Create by : Jose Borrego
              </div>
              <a className='button-repository' href='https://github.com/Josbor/dango-test'> project repository</a>
          </footer>

    </div>

  )
}

export default App
