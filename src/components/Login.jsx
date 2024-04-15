import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {

  const {loginUser, googleLogin, setUser, fbLogin, user} = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  

    const handleLogin = (e) =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log( email, password);
        loginUser(email, password);
    }
    const handleGoogleLogin = () =>{
      googleLogin()
      .then(result => setUser(result.user))
      .catch(error => console.error(error))
    }

    const handleFBLogin = () =>{
      fbLogin()
      .then(result => setUser(result.user))
      .catch(error => console.error(error))
    }

    useEffect(() =>{
      if(user){
        navigate(location.state)
      }
    }, [user])

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
       
       
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
      <button onClick={handleGoogleLogin} className="btn mx-16 mb-6">Google Login</button>
      <button onClick={handleFBLogin} className="btn mx-16 mb-6">Facebook Login</button>
    </div>
      
    
  </div>
</div>
    );
};

export default Login;