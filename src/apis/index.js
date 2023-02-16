import axios from "axios"; 
//Import axios

export default axios.create({
    baseURL: "https://videoclub-back.vercel.app/"
}); 

//Create HTTP request to get the url data