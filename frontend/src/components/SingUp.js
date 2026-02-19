import React from 'react'

function SingUp() {
    return (
        <div className='container mt-2'>
            <div className='text-center'>
                <h2><i className="fas fa-user-plus me-2"></i> Sign Up</h2>
                <p className="text-muted">Create your account to get started!</p>
            </div>

            <div>
                <form action="" method="post">
                    <div className="">
                        <label htmlFor="fullname" className="form-label">Full Name</label>
                        <div className='input-group'>
                            <span className='input-group-text'>
                                <i className="fas fa-user me-2"></i>
                            </span>
                        </div>
                        <input type="text" name='FullName' className="form-control" id="fullname" placeholder="Enter your full name" required />
                    </div>
                    <div className="">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <div className='input-group'>
                            <span className='input-group-text'>
                                <i className="fas fa-envelope me-2"></i>
                            </span>
                        </div>
                        <input type="email" name='Email' className="form-control" id="email" placeholder="Enter your email" required />
                    </div>
                    <div className="">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className='input-group'>
                            <span className='input-group-text'>
                                <i className="fas fa-lock me-2"></i>
                            </span>
                        </div>
                        <input type="password" name='Password' className="form-control" id="password" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                </form>
            </div>

        </div>
    )
}

export default SingUp
