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
   doctorInfo:{
    url:`${backendDomain}/api/doctorinfo`,
    method:'get'
   },
}

export default commnApiEndpoint;