import { gql } from "@apollo/client"
const GETALLMOBILES_QUERY = gql`
{
  getAllMobiles {
    id
    model
    price
  }
}
`
const addMobiles = gql`
mutation($addMobileModel: String!, $addMobilePrice: String!){
  addMobile(model: $addMobileModel, price: $addMobilePrice) {
    id
  }
}
`
const DELETEMOBILE_QUERY = gql`
mutation deleteMobile($deleteMobileId: ID!){
  deleteMobile(id: $deleteMobileId)
}
`

const UPDATEMOBILE_QUERY = gql`
mutation($updateMobileId2: ID!, $updateMobileModel2: String, $updateMobilePrice2: String){
  updateMobile(id: $updateMobileId2,model: $updateMobileModel2,price: $updateMobilePrice2)
}
`
const data=""

export default {GETALLMOBILES_QUERY,addMobiles,DELETEMOBILE_QUERY,UPDATEMOBILE_QUERY,data};



