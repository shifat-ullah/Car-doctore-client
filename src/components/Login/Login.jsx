import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { Authcontext } from '../../providers/Authproviders';
const Login = () => {
    const { signin } = useContext(Authcontext);

    const hendlesubmite = event => {
        event.preventDeafault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 mb-10">
                <div className="hero-content md:flex-row flex-col w-[80%]">
                    <div className=" w-1/2 lg:text-left">

                        <img src={login} className='' alt="" />
                    </div>
                    <div className="card md:w-[50%] max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={hendlesubmite}>
                            <h1 className="text-3xl text-center text-orange-600 font-bold">Login now!</h1>
                            <div className="card-body">
                                <div className="form-control">

                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder=' Enter your Email' name='email' className='border bordder-7 p-1 rounded' />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder=' Enter your Password' name='password' className='border bordder-7 p-1 rounded' />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-2">
                                    <button type='submite' className="btn bg-orange-500 text-white">Sign IN</button>
                                </div>
                            </div>
                        </form>

                        <p className='text-center text-sm mb-6'><Link to='/signup'>Have an account? <span className=' text-orange-900 font-bold'>Sign UP</span></Link></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;