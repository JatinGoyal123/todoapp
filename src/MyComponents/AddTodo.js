import React,{useState} from 'react'

export const AddTodo = ({addTodo}) => {
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const onsubmit=(e)=>{
        
        e.preventDefault();
        if(!title|| !desc)
        {
            alert('It should not be empty');
        }
       else{
        addTodo(title,desc);
        setTitle('');
        setDesc('');
       }
        
    }
    return (
        <div className="container my-3">
            <h3>Add Todo</h3>
            <form onSubmit={onsubmit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Add Title</label>
    <input type="text" className="form-control" value ={title} onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Add Desc</label>
    <input type="text" className="form-control" value ={desc} onChange={(e)=>setDesc(e.target.value)} id="desc"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>    
        </div>
    )
}
