import { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const [itemDetalle, setDetalleProducto] = useState([]);
    const { id } = useParams();
    useEffect(()=>{
        (async ()=>{
            let itemDetail = await fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            setDetalleProducto(itemDetail);
        })()
    },[id]);
  return (
   <h1>
        
   </h1>
  );
}

export default ItemDetailContainer;