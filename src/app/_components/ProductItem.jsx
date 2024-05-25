import { useState } from "react"
import { useNavigate } from 'react-router-dom';

export default function ProductItem() {
  const [onSale,  setOnSale] = useState(true)
  const navigate = useNavigate()
  const [productId, setProductId] = useState('12')
  return (
    <div className="w-100 position-relative product-box" onClick={()=>{
      navigate(`/product/${productId}`)
    }}>
      <div className={`${onSale?'d-block':'d-non'} position-absolute`}>
       <div className="bg-info p-1 m-2 rounded-circle">
        <p className="m-auto p-1 h-100">Sale</p>
       </div>
       <div className="bg-info p-1  m-2 rounded-circle">
        <p className="m-auto p-1">10%</p>
       </div>
      </div>
      <img src="accessHeader.jpeg" alt="access" width="100%" height={300} />
      <p className="fs-4 my-3">Pearl bracelet | سوار لؤلؤ </p>
      <p>100 EGP</p>
    </div>
  )
}
