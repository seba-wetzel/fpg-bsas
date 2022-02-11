import { height } from "@mui/system"
import Maps from "/components/Maps"
import SeccionesFooter from "components/SeccionesFooter"

const Home = () => { 

  return  (
<div style={{height:"90vh", display: "flex", "flexDirection": "column"}}>
<Maps/>
<SeccionesFooter/>

</div>

) 
}

export default Home
