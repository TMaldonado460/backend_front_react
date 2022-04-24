import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFetch } from "usehooks-ts";
import axios from "axios";




const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    
    const submit = (e) => {
        e.preventDefault();

        var data = JSON.stringify({
            "username": e.target[0].value,
            "password": e.target[1].value
        });
        
        var config = {
            method: 'post',
            url: 'http://localhost:8080/users/signin',
            headers: { 
            'Content-Type': 'application/json', 
            },
            data : data
        };
        
        axios(config)
        .then(function (response) {
            localStorage.setItem("jwt", response.data.jwt);
            localStorage.setItem("role", response.data.authorities[0].authority);
            navigate("/");
        })
        .catch(function (error) {
            setError(true);
        });
        
    }

    
    
  

    return <div className="container">
    <form className="form-signin" onSubmit={submit}>
    <h2 className="form-signin-heading">Please sign in</h2>
    {error?<h6 style={{color:"red"}}>Usuario o contraseña incorrectos.</h6>:null}
    <p>
        <label htmlFor="username" className="sr-only">Username</label>
        <input type="text" id="username" name="username" className="form-control" placeholder="Username" required="" autoFocus="" />
    </p>
    <p>
        <label htmlFor="password" className="sr-only">Password</label>
        <input type="password" id="password" name="password" className="form-control" placeholder="Password" required="" />
    </p>
    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
</div>
};


export default Login;