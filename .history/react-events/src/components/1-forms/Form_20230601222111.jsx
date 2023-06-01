import { useState } from "react";


const Form = () => {
    return (
        <div>
            <form>
                <h1 className="display-5 text-danger">FORMS</h1>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                        User Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

        </div>
    );
}


export default Form;