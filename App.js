import React,{createContext} from 'react'
import Header from './component/Header'
import {UseState} from 'react'
let UserContext=createContext(null)
 
const App = () => {
  const 
  return (
    <UserContext.Provider value={[
      {name:"Sagar",age:29,location:"Finland"},
      {name:"Suraj",age:201,location:"sydney"}
    ]}>
        <Header/>
    </UserContext.Provider>
  )
}

export default App;
export {UserContext}