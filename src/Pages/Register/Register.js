import React from 'react';

const Register = () => {

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name)
    }

    return (
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-10 ">
            <div className="card-body">
                <h2 className='text-3xl font-bold'>Register Now !!</h2>

                <form onSubmit={handleRegister} >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" />
                    </div>
                    <button className="btn btn-primary my-2 w-full" type="submit">Register </button>

                </form>

            </div>
        </div>
    );
};

export default Register;