import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Alert({alert, onUpdate, onDelete  }){
 
    const [isEdit, setIsEdit] = useState(false);

function FromEdit (){
  const [newValue, setNewValue] = useState(alert.status)
  function handleSubmit(e){
    e.preventDefault()
  }
  function handleChange(e){
    const value = e.target.value
    setNewValue(value)
  }
  function handleClick(){
    onUpdate(alert.id, newValue)
    setIsEdit(false)
  }
  return (
    <div style={ { display:"grid", justifyContent:"center" } } >
      <>//{alert.name} ____</>
        <>{alert.id} ____</>
        <>{alert.gender} ____</>
        <>{alert.created} //</>
    <form onSubmit={handleSubmit} style={{width:260, marginLeft:100}} >
      <input type="text"
      onChange={handleChange}
      value={newValue} />
      <button onClick={handleClick}>Up Status</button>
    </form>
    </div>
  )
}




function AlertElement(){
    return(
        <div style={ { textAlign:"center" } }>
        <>//{alert.name} ____</>
        <>{alert.id} ____</>
        <>{alert.gender} ____</>
        <>{alert.created} //</>
        <div style={{color:"red"}}> Status:{alert.status} </div>
        <>
          <button  onClick={() => setIsEdit(true)}>Edit Status</button>
          <IconButton
            onClick={(e) => onDelete(alert.id)}
            aria-label="delete"
          >
            <DeleteIcon />
          </IconButton>
          <button>Res</button>
        </>
      </div>
    )
}
return (
  <div>
    {isEdit ? <FromEdit/> : <AlertElement/>}
  </div>
)
}