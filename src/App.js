 
import Dashbord from './assets/component/Dashbord'
import  TheamProvider  from './context/UserContaex'
 
 export default function App() {
   return (
    <>
     {/* sending Dashbord component to context.jsx as a parameter */}
       <TheamProvider>
          <Dashbord />
      </TheamProvider>
     </>
   )
 }
 