import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;


        const form = new FormData(e.currentTarget);
        console.log(form.get('password'))
    }
    return (
        <div>
            <Navbar></Navbar>
            <h3 className="text-center text-2xl font-semibold mt-12">Login your account</h3>
            <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
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
                    <button className="btn btn-primary">Login</button>
                </div>
                <p>Don't have an account ? <Link to="/register" className="text-blue-500">Register</Link></p>
            </form>
        </div>
    );
};

export default Login;