import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";


const Register = () => {
    const {registerUser, setUser} = useContext(AuthContext);
    const [error, setError] = useState("")
    const [emailError, setEmailError] = useState("")
    // console.log(authInfo)

    const handleRegister = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email)) {
            setEmailError("Please enter a valid email");
            return;
        }
        
        if(password.length < 6){
            setError("Password must be 6 characters")
            return;
        }
        if(!/^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[a-zA-Z]).+$/.test(password)){
            setError("Password must contain atleast one number & a special character and one letter")
            return;

        }
         console.log(name, photo, email, password);
        
        registerUser(email, password)
        .then(result => {
            setUser(result.user)
        })
        .catch(error => setError(error.message.split("/")[1].split(")")[0]))

        setError('')
        setEmailError('')

        
    }

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Registration now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" name="photo" placeholder="Your Photo" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div>
            {emailError && <span className="text-red-500">{emailError}</span>}
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
        {/* show error message */}
        <div>
            {
                error && <span className="text-red-500">{error}</span>
            }
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;