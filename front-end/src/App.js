// import { useSelector } from "react-redux";
import Registration from "./component/Registration";
// import axios from 'axios'

function App() {

  // const products = useSelector(state => state.products)

  // const users = useSelector(state => state.users)
  // console.log(users)
  //  axios.post("http://localhost:5000/api/auth/register", users)
  // .then((res) => {
  //   if(res.data) {
  //     console.log(res.data)
  //   }
  //   if (res.data.message){
  //     console.log(res.data.message)
  //   }
  // })
  // .catch((error) => console.log(error));

  return (
    <>
      {/* {products.map(product => <div> {product.name} - {product.price}</div>)}
      
      {users.map(user => <div> {user.name} - {user.email}</div>)} */}
     
     <Registration/>
      {/* {users.map(user => <div> {user.name} - {user.email}</div>)} */}
     {/* {console.log(users)} */}

    </>
  );
}

export default App;
