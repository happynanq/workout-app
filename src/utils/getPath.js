export const getPath = (...paths)=>{
  let s = import.meta.env.VITE_SERVER_URL
  for(let i = 0; i < paths.length; i++ ){
    s += paths[i]
  }
  return s
}