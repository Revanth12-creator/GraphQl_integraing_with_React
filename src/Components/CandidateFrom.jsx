import React, { Component, useState } from 'react';
import { useQuery, useMutation, gql } from "@apollo/client"
import CandidateList from './CandidateList';

const allCANDIDATE_QUERY = gql`
mutation{
  createCandidate(createCandidateInput:{
    name:$name,
    email: $email
    dateOfBirth: $dateOfBirth
  }){
    name
    email
    dateOfBirth
    age
    id
  }
}
`

function CandidateForm(){
    const [model,setModel]=useState("");
    const [price,setPrice]=useState("")
    // const [addMobile]=useMutation(ADD_MOBILE_QUERY);
    console.log(model,price);

        return (
            <div>
                 <div className='card col-md-4 mx-auto my-5'>
                    <h1 className="text-center ">Add Candidates</h1>
                    <form action="" onSubmit={(e)=>{
                        e.preventDefault()
                    }}>
                        <div className="form-group">
                            <label htmlFor="">Model</label>
                                <input type="text" name="model" className="form-control" 
                                onChange={(e)=>setModel(e.target.value)}
                               />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Price</label>
                            <input type="text" name="price" className="form-control"
                                onChange={(e)=>setPrice(e.target.value)}
                             />
                        </div>
                        <div className="form-group">
                           <button  className="btn btn-success form-control" 
                        //    onClick={
                        //       ()=> {
                        //           addMobile({
                        //               variables:{
                        //                   model:"hhdd",
                        //                   price:"555"
                        //               },
                        //           });
                        //       }
                        //    }
                           >Submit</button>
                        </div>
                    </form>
                </div>
                <div>
                    <CandidateList />
                </div>
            </div>
        )
 }

export default CandidateForm;