import React, {useState} from 'react';
import './jobs.css'
function AddJobs() {

    const[job,setJob]=useState("")
    const[department,setDepartment]=useState("")


    return(
      <div className="form">
        <h1 className='heading'>Add New Jobs</h1>
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">Job Title </label>
                  <input className="form__input" type="text" id="firstName" placeholder="Job Title"/>
              </div>
              <div className="lastname">
                  <label className="form__label" for="lastName">Department</label>
                  <input  type="text" name="" id="department"  className="form__input"placeholder="Job Title"/>
              </div>
              <div className="email">
                  <label className="form__label" for="email">Salary From </label>
                  <input  type="text" id="salaryfrom" className="form__input" placeholder="Salary From"/>
              </div>
              <div className="password">
                  <label className="form__label" for="password">Salary To </label>
                  <input className="form__input" type="text"  id="salaryto" placeholder="Salary To"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Experience </label>
                  <input className="form__input" type="text" id="experience" placeholder="Experience"/>
              </div>

              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Skills Required </label>
                  <input className="form__input" type="text" id="skillsrequired" placeholder="Skills Required"/>
              </div>


              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Minimum Qualification </label>
                  <input className="form__input" type="text" id="minimumqualification" placeholder="Minimum Qualification "/>
              </div>

              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Small Description </label>
                  <textarea className="form__input" type="text" id="smalldescription" placeholder="Small Description"/>
              </div>

              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Full Description </label>
                  <textarea className="form__input" type="text" id="fulldescription" placeholder="Full Description"/>
              </div>

              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Company </label>
                  <input className="form__input" type="text" id="comapny" placeholder="Company"/>
              </div>

              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">E-Mail </label>
                  <input className="form__input" type="text" id="email" placeholder="E-mail"/>
              </div>

     

              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Phone </label>
                  <input className="form__input" type="text" id="phone" placeholder="Phone"/>
              </div>

              <div className="confirm-password">
                  <label className="form__label" for="confirmPassword">Company Description </label>
                  <input className="form__input" type="text" id="companydescription" placeholder="Company Description"/>
              </div>




          </div>
          <div class="footer">
              <button type="submit" className='btn'>Save</button>
          </div>
      </div>      
    )       
}
export default AddJobs;

