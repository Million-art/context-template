import { createContext ,useContext,useState } from 'react'
const TheamContext=createContext()
const TheamContextUpdate=createContext()
 export function useTheam(){
    return useContext(TheamContext);
}
 export function useTeamUpdate(){
    return useContext(TheamContextUpdate);
}





export default function TheamProvider({children}){
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