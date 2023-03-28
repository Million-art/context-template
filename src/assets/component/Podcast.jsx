import { useContext } from "react"
import { UserContaex } from "../../context/UserContaex"


export default function Podcast() {
  const user=useContext(UserContaex)
  return (
    <div>{user}podcast</div>
  )
}
