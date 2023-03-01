import React,{useState,useEffect} from 'react'


export default function DanhSachSanPham(props) {
  
  const [signal,setSignal] = useState(false)
 
  return (
    <div>
        <div className="col-4 mt-4">
        <div style={{width:'300px',height:'400px'}} className="card text-white bg-light">
  <img style={{width:'100%'}} className="card-img-top" src={props.source} alt />
  <div className="card-body">
    <h4 style={{color:'black',marginLeft:'-100px',marginTop:'-20px'}} className="card-title">{props.name}</h4>
    <p style={{color:'black',marginLeft:'-150px'}}>{props.giaBan.toLocaleString()}</p>
    

  </div>
</div>

        </div>
      
    </div>
  )
}
