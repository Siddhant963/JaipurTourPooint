import Busservicepage from "@/Components/Busservicepage";
import serviceData from "../../../data/all_services.json";
import Carrental from "@/Components/Carrental";
import Dnavbar from "@/Components/Dnavbar";
import Dfooter from "@/Components/Dfooter";

const page = async ({params}) => {
    const {service} = await params;
    const data = serviceData[service];
   
  return (
    <div>
     <Dnavbar/>
      {/* <Busservicepage data={data} /> */}
      <Carrental data={data} />
      <Dfooter/>
    </div>
  )
}

export default page
