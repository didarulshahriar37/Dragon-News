import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const [nameError, setNameError] = useState("");

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if (name.length < 5) {
            setNameError("Name should be more than 5 character");
        }
        else {
            setNameError("");
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo });
                    navigate("/");
                }).catch((error) => {
                    console.log(error);
                    setUser(user);
                });;
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
                // ..
            });
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">

                        {/* Name */}
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Your name" required />

                        {
                            nameError && <p className='rexr-xs text-red-700'>{nameError}</p>
                        }

                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input name='photo' type="text" className="input" placeholder="Your Photo URL" required />

                        {/* Email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        {/* Password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center pt-5'>Already Have An Account ? <Link className='text-secondary hover:underline' to="/auth/login">Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;