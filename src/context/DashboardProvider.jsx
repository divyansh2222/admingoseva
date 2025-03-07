import { createContext } from "react";

 
export  const DashboardContext= createContext()


const DashboardProvider = ({children})=>{

    const Donation = "32423";
    const Volunter ="122332";
    const Testimonial ='32423'
    return(
        <DashboardContext.Provider value={{Donation,Volunter,Testimonial}}> 
            {children}
          </DashboardContext.Provider>
    )
}
export default DashboardProvider