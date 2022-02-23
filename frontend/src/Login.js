import {React,useState} from 'react';
import axios from 'axios';


function Login(){

  console.log(process.env);
  axios.create({ baseURL: process.env.REACT_APP_API_URL });

    const [username,setusername] = useState({name:''});
    const handleSubmit = (e)=>{
      e.preventDefault();

      if (username) {

        console.log(username);

        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ username })
        // };

        axios.get('api/todos')
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
        })
      }
  
    };
  
    const handleChange = (e)=>{
      e.preventDefault();

      setusername({name: e.target.value});
      
    }

    return(
        <div>
            <form name="form" onSubmit={handleSubmit}>
                <input type="text" className="form-control" name="username" value={username['name']} onChange={handleChange} />
                <button className="btn btn-primary">To-do</button>
            </form>                         
        </div>
    );

}

export default Login;