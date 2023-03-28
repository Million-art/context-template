import { createContext ,useContext,useState } from 'react'
const TheamContext=createContext()
const TheamContextUpdate=createContext()
 export function useTheam(){
    return useContext(TheamContext);
}
 export function useTeamUpdate(){
    return useContext(TheamContextUpdate);
}


//function that have a state and control the state to send to the Dahboard component
//parameter must be 'children'
 
export default function TheamProvider({children}){
    console.log(children)
    const [theam,setTheam]=useState(true);


         function TheamUpdate(){
                    setTheam(theam=>!theam)
                }
    return(
        <TheamContext.Provider value={theam}>
            <TheamContextUpdate.Provider value={TheamUpdate}>
                {children}
            </TheamContextUpdate.Provider>
         </TheamContext.Provider>
    )

    }