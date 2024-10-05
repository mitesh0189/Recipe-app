import React, { useEffect, useState } from 'react'
import Header from '../Component/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [cooking, setcooking] = useState("")
        const navigation=useNavigate()

        let location=useLocation();
        


        const Getdata= () =>{
            let data=JSON.parse(localStorage.getItem('corse')) || [];
            if(data){
                return data;
            }else{
                return []
            }
        }
        const [record,setRecord]=useState(Getdata())

        
    
    const handle =(e) =>{
        e.preventDefault()

        if(!title || !instructions || !ingredients || !cuisine || !cooking){
            toast.error("all filed reuired..");
            return false;
        }

        let up=record.map((val)=>{
          if(val.id == location.state.id){
            val.title=title,
            val.instructions=instructions,
            val.ingredients=ingredients;
            val.cuisine=cuisine;
            val.cooking=cooking;
          }
          return val;
        })
        

       
        localStorage.setItem('corse',JSON.stringify(up));
        toast.success("suceessfully add Update");

        setTimeout(()=>{
            navigation("/view")
        },1000)
        setTitle('');
        setInstructions("");
        setIngredients("");
        setCuisine("");
        setcooking("");

    }

    useEffect(()=>{
      setTitle(location.state.title);
      setInstructions(location.state.instructions);
      setIngredients(location.state.ingredients);
      setCuisine(location.state.cuisine);
      setcooking(location.state.cooking);
    },[location])
    return (
        <div>
            <Header />

            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        
                        <form onSubmit={handle} className= ' bg border  p-3 shadow'>
                        <h3 className='mb-3 text-center'>Edit Recipe</h3>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label"> Title</label>
                                <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} value={title}  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Ingredients</label>
                                <input type="text" className="form-control" onChange={(e) => setIngredients(e.target.value)} value={ingredients}  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Instructions</label>
                                <input type="text" className="form-control" onChange={(e) => setInstructions(e.target.value)} value={instructions}  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Cuisine Type</label>
                                <input type="text" className="form-control" onChange={(e) => setCuisine(e.target.value)} value={cuisine}  />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Cooking Time</label>
                                <input type="number" className="form-control" onChange={(e) => setcooking(e.target.value)} value={cooking}  />
                            </div>
                            
                            <button type="submit" className="btn btn-primary mx-auto d-block mt-4">Update</button>
                        </form>

                    </div>
                </div>
            </div>
            <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition: Bounce
            />

        </div>
    )
}

export default Edit
