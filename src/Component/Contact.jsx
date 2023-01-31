import React from 'react'

function Contact() {
  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className='container contact_div'>
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Full Name</label>
              <input type="text" required className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name"/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
              <input type="number" required className="form-control" id="exampleFormControlInput1" placeholder="Enter Phone Number"/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" required className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div className="col-12">
              <button className='btn btn-outline-primary' type='submit'>Submit Form</button>
              {/* <button className='btn-get-started' type='submit'>Submit Form</button> */}
            </div>
<br />
          </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Contact