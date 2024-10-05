import React, { useState } from 'react'
import Header from '../Component/Header'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("")
    const [cuisine, setCuisine] = useState("")
    const [cooking, setcooking] = useState("")
    const navigation = useNavigate();

    const Getdata = () => {
        let data = JSON.parse(localStorage.getItem('corse')) || [];
        if (data) {
            return data;
        } else {
            return [];
        }
    };

    const [record, setRecord] = useState(Getdata());

    const handle = (e) => {
        e.preventDefault();

        if (!title || !instructions || !ingredients || !cuisine || !cooking) {
            toast.error("All fields are required..");
            return false;
        }

        let obj = {
            id: Math.floor(Math.random() * 10000),
            title,
            instructions,
            ingredients,
            cuisine,
            cooking,
        };

        let old = [...record, obj];
        localStorage.setItem('corse', JSON.stringify(old));
        toast.success("Successfully added Task");

        setTimeout(() => {
            navigation("/view");
        }, 1000);

        setTitle('');
        setInstructions("");
        setIngredients("");
        setCuisine("");
        setcooking("");
    };

    return (
        <div>
            <Header />

            <div className=" container mt-3">
                <div className="row">
                    <div className=" col-lg-6 mx-auto">
                        
                        <form onSubmit={handle} className=' bg border p-3 shadow bg-light'>
                            <h3 className='mb-3 text-center'>Add Recipe</h3>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label"> Title</label>
                                <input type="text" className="form-control" onChange={(e) =>  setTitle(e.target.value)} value={title} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Ingredients</label>
                                <input type="text" className="form-control" onChange={(e) => setIngredients(e.target.value)} value={ingredients} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Instructions</label>
                                <input type="text" className="form-control" onChange={(e) => setInstructions(e.target.value)} value={instructions} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Cuisine Type</label>
                                <input type="text" className="form-control" onChange={(e) => setCuisine(e.target.value)} value={cuisine} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Cooking Time</label>
                                <input type="number" className="form-control" onChange={(e) => setcooking(e.target.value)} value={cooking} />
                            </div>
                           
                            
                            <button type="submit" className="btn btn-primary mx-auto d-block mt-4">Add Recipe</button>
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
            />
        </div>
    );
};

export default Add;
