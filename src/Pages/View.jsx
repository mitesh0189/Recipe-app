import React, { useEffect, useState } from 'react';
import Header from '../Component/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const View = () => {
  const [record, setRecords] = useState([]);
  const [mdelete, setMDelete] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedRecord = JSON.parse(localStorage.getItem('corse')) || [];
    setRecords(storedRecord);
    setFilterData(storedRecord);
  }, []);

  // Delete single record
  const deleteUser = (id) => {
    const updatedRecords = record.filter((val) => val.id !== id);
    localStorage.setItem('corse', JSON.stringify(updatedRecords));
    toast.error("Record deleted successfully...");
    setRecords(updatedRecords);
    setFilterData(updatedRecords);
  };


  // Filter records by search term (title or description)
  const filteredRecords = filterData.filter((val) => {
    const title = val.title ? val.title.toLowerCase() : '';
    const instructions = val.instructions ? val.instructions.toLowerCase() : '';
    const ingredients = val.ingredients ? val.ingredients.toLowerCase() : '';
    const cuisine = val.cuisine ? val.cuisine.toLowerCase() : '';
    const cooking = val.cooking ? val.cooking.toLowerCase() : '';
    
    

    return title.includes(searchTerm.toLowerCase()) || instructions.includes(searchTerm.toLowerCase()) || ingredients.includes(searchTerm.toLowerCase()) || cuisine.includes(searchTerm.toLowerCase())|| cooking.includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row mb-3">
          <div className="col-lg-12">
            <h1 className="text-center text-black mb-4 bg-light bg-opacity-50">Display Records</h1>
            <input 
              type="text"
              className=" form-control mb-4"
              placeholder="Search by title or ingredients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
          </div>
        </div>



        <div className="row">
          {filteredRecords.length === 0 && (
            <p className="text-center">No records found.</p>
          )}
          {filteredRecords.map((val, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="box card h-100">
                <div className=" card-body">
                  
                  {/* Title and Description */}
                  <h4 className="card-subtitle mb-2 ">Title: {val.title}</h4>
                  <h6 className="card-title text-capitalize">Ingredients: {val.ingredients}</h6>        
                  <p className="card-text">Instructions: {val.instructions}</p>
                  <h6 className="card-title text-capitalize">Cuisine Type: {val.cuisine}</h6>  
                  <h5 className="card-title text-capitalize">cooking Time: {val.cooking}</h5>  
                  

                  {/* Action Buttons */}
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-danger btn-sm" onClick={() => deleteUser(val.id)}>Delete</button>
                    <button className="btn btn-success btn-sm p-2 mx-2" onClick={() => navigate("/edit", { state: val })}>Edit</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

export default View;
