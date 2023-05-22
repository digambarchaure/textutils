import React, { useState } from "react"
import "./login.css"

const LoginPage = () => {
  return (
    <>
      <div className="container mb-3 my-3">
      <form>
        <div class="form-group row">
            <label class="col-sm-2 col-form-label">
                Email Id
            </label>
            <div class="col-sm-10">
                <input
                type="text"
                class="form-control"
                id="email"
                placeholder="email"
                />
            </div>
            </div>
            <div class="form-group row my-3" >
            <label for="inputPassword" class="col-sm-2 col-form-label">
                Password
            </label>
            <div class="col-sm-10">
                <input
                type="password"
                class="form-control"
                id="inputPassword"
                placeholder="Password"
                />
            </div>
            </div>

            <button type="submit" class="btn btn-primary">submit</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
