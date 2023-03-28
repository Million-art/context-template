 
// import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Dashbord from './assets/component/Dashbord'
import  TheamProvider  from './context/UserContaex'
 
 export default function App() {
   return (
    <>
     
       <TheamProvider>
          <Dashbord />
      </TheamProvider>
     </>
   )
 }
 