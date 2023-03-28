 import {useTheam} from '../../context/UserContaex'
import {useTeamUpdate} from '../../context/UserContaex'
export default function Dashbord() {
  const darkTheam=useTheam()
  const toogle=useTeamUpdate()

   
  return (<>  <div><button onClick={toogle}>toogle</button></div>
    <div style={{ color: darkTheam ? 'white' : 'black', lineHeight : 10, padding: 20, backgroundColor : darkTheam ? 'black' : 'wheat'}}>Dashbord </div>
    </>
  )
}

