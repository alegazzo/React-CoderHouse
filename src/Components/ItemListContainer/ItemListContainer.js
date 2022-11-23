import './ItemListContainer.css';
import { useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';



export default function ItemListContainer(props){
    const [listadoProductos, setListadoProductos] = useState([]);
    const { id } = useParams();
    useEffect(()=>{
        (async ()=>{
            let arrayItemList = await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            setListadoProductos(arrayItemList);
        })()
    },[]);
  
    return(
        listadoProductos.map(item => {
            return(<div className='cardItem' key={item.id}>
            <p>{item.title}</p>
            <img src={item.image}/>
            <Link to={`/item/${item.id}`}>Ver Mas</Link>
            </div>);
        
       })
    );

}


