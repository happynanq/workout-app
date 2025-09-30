import { useQuery } from "@tanstack/react-query"
import exerciseService from "../../../services/exercise/exercise.service"

export const useListExercises = ()=>{
  return(useQuery({
    queryKey:["list exercises"],
    queryFn: ()=>exerciseService.getAll(),
    select : ({data})=>data
  }))
}