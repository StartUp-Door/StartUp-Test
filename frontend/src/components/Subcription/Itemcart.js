import React,{useState} from 'react'


export default function Itemcart(props) {
   // const [select , Setselect] = useState([])
    
  // console.log(select)
    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 ">
            <div class="card p-0 overflow-hidden h-100 shadow" >
            <div class="text-center">
            <img  src={props.img} class="card-img-top rounded img-fluid "  alt="" />
            </div>
             <div class="card-body text-center">
              <h5 class="card-title">{props.title}</h5>
              <div className="text-rigth">
               <button class="btn btn-primary " onClick={console.log(1)}   >Select</button>
               </div>
              </div>
             </div>
        </div>
    )
}
