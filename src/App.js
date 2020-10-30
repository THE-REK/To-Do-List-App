import React, {useState} from "react"
import {connect} from "react-redux"
import {listeyeEkle, isaretle, temizle} from "./actions/actionTypes"
import './App.css';
import {Card, CardBody, CardHeader, } from "reactstrap"

const App=(props)=> {
  const [text, setText]=useState("")
  return (
    <div className="App" > 
    <h1>TO DO LIST
    </h1>
    
    <div className="ekleme_formu">
      <Card style={{width:"300px", marginLeft:"570px", border:"2px solid black"}}>
        <CardHeader >
  <input placeholder="What do you desire ?" value={text} onChange={e=>setText(e.target.value) } />
        <button onClick={()=>{
          setText("")
          props.listeyeEkle(text)}}>+</button>
        </CardHeader>
        <CardBody style={{backgroundColor:"orange"}}>
          <div className="liste">
      {props.liste.map(item =>(
        <div onClick={()=>props.isaretle(item.id)} key={item.id} style={{color:"white"}} className={item.tamamlandi?"yapildi":""}>
          <strong><h5>
            {item.baslik}
          </h5>
            
          </strong>
          </div>
      ) )}
    </div>
      
    
        </CardBody>
        <button onClick={()=>props.temizle()} className="temizle">Delete The Completed</button>
      </Card>
      </div>
    </div>
    
  );
}


const mapStateToProps= state=>{
  return {
    liste:state.liste
  }
}

export default connect(mapStateToProps,{listeyeEkle, isaretle, temizle} )(App);
