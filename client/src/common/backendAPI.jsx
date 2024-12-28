const backendDomain = "http://localhost:3000";


const commnApiEndpoint = {
   register:{
    url:`${backendDomain}/api/signup`,
    method:'post'
   },
   signin:{
    url:`${backendDomain}/api/signin`,
    method:'post'
   },
}

export default commnApiEndpoint;