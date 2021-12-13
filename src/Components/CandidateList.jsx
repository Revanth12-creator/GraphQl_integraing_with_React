import React ,{  Fragment } from 'react';
import { useQuery, useMutation, gql } from "@apollo/client"

const allCANDIDATE_QUERY = gql`
{
  Allcandidate{
    id
    name
    email
    dateOfBirth
  }
}
`

const DELETE_CANDIDATE = gql`
mutation{
  removeCandidate(id:ID){
    id
    email
    name
  }
}
`

 function CandidateList() {
    const { loading, error, data } = useQuery(allCANDIDATE_QUERY);
     const [removeCandidate,]=useMutation(DELETE_CANDIDATE);

    if(loading) return <div>Loading...</div>;

    if(error) return <div>Error....</div>
    return (
        <Fragment>
        <div className="profileData container">
            <h1 className="text-center">LIST</h1> 
             <div>
                   <table cellpadding="10"className="table table-bordered text-center">
                       <tr>
                               <th>ID</th>
                               <th>Name</th>
                               <th>Email</th>
                               <th>DOB</th>
                               <th>action</th>
                       </tr>
                       <tbody>
                    {
                        
                       data.Allcandidate.map((data, index)=> (
                            <tr key={index}>
                                
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                   <td>{data.dateOfBirth} </td>
                                   <td><button>Edit</button><button 
                                   onClick={()=>removeCandidate({
                                     variables:{
                                       id:data.id
                                     }
                                   })}>Delete</button></td>
                                
                            </tr>
                        ))
                    }
                    </tbody>
                   </table>
                 </div>
        </div>

         </Fragment>
    )
}

export default CandidateList;


