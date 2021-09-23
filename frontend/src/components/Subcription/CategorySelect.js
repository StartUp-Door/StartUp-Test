import React from 'react'
import Itemcart from './Itemcart'
import data from './data'
import { Link } from "react-router-dom";
import './css/style1.css'
import { useLocation, useParams }  from 'react-router-dom';

export default function CategorySelect() {
  
    const {id} = useParams();
    const {data1} = useLocation();
    var title = data1[0].title;
    var price = data1[0].price;
    return (
        <div className="root">
             <h1 className="point">Select category</h1>
             
            
             <br /> <br /> <br />
             <section className="py-4 container">
                   <div className="row justify-content-center">
                       {data.productData.map((item,index)=>{
                           return( 
                            <Itemcart img={item.img} title={item.title} item={item} key={index} />
                            
                           )
                       })

                       }
                    
                   </div>
             </section>
             <button className="btn btn-primary  button2">
             <Link to={{pathname:`/membership/payment/${id}` , data2:[{title:title,price:price}] } }  style={{textDecoration:'none'}} > Continue  </Link>        
             </button>
        </div>
    )
}
