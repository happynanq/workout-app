import { useQuery } from "@tanstack/react-query"
import userServices from "../../../services/user.services"

export const useProfile = () =>{
  return useQuery({
    queryKey:['get profile'],
    queryFn: ()=>{

      return userServices.getProfile()
    },
    select:({data})=>data
  })
}