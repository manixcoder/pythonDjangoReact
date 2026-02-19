import React from 'react'
import {toast, ToastContainer} from 'react-toastify' // Import React Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import React Toastify CSS

function SingUp() {
    return (
        <div className='container mt-2'>
            <div className='text-center'>
                <h2><i className="fas fa-user-plus me-2"></i> Sign Up</h2>
                <p className="text-muted">Create your account to get started!</p>
            </div>

            <div>
                <form action="" method="post" className='p-4 rounded shadow mx-auto' style={{maxWidth:'400px'}}>
                    <div className="">
                        <label htmlFor="fullname" className="form-label">Full Name</label>
                        <div className='input-group'>
                            <span className='input-group-text'>
                                <i className="fas fa-user me-2"></i>
                            </span>
                            <input type="text" name='FullName' className="form-control" id="fullname" placeholder="Enter your full name" required />
                        </div>

                    </div>

                    <div className="">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <div className='input-group'>
                            <span className='input-group-text'>
                                <i className="fas fa-envelope me-2"></i>
                            </span>
                            <input type="email" name='Email' className="form-control" id="email" placeholder="Enter your email" required />
                        </div>

                    </div>
                    <div className="">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className='input-group'>
                            <span className='input-group-text'>
                                <i className="fas fa-lock me-2"></i>
                            </span>
                            <input type="password" name='Password' className="form-control" id="password" placeholder="Enter your password" required />
                        </div>

                    </div>
                    <div className="mb-3 form-check ">
                        <input type="checkbox" className="form-check-input" id="terms" required />
                        <label className="form-check-label" htmlFor="terms">I agree to the terms and conditions</label>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mt-3">Sign Up</button>
                </form>

                <ToastContainer 
                position="top-right" 
                autoClose={5000} 
                hideProgressBar={false} 
                newestOnTop={false} 
                closeOnClick rtl={false} 
                pauseOnFocusLoss draggable pauseOnHover theme="light" />
            </div>

        </div>
    )
}

export default SingUp
