import React from 'react'

function Regi() {
  return (
    <div>
      <div className='container my-5 w-25 py-3 bg-primary br'>
        <div className='h3 m-3 text-center text-white'>Ragistration Page</div>
        <form>
            <div className='d-flex flex-column'>
                <span className='h5'>Name :</span>
                <input type='email' placeholder='Name'/> <br/>
            </div>
            <div className='d-flex flex-column'>
                <span className='h5'>Phone No. :</span>
                <input type='telephone'  placeholder='Phone'/> <br/>
            </div>
            <div className='d-flex flex-column'>
                <span className='h5'>Email :</span>
                <input type='email' placeholder='Email'/> <br/>
            </div>
            <div className='d-flex flex-column'>
                <span className='h5'>Password :</span>
                <input type='password'/>
            </div>
            <div className='text-center m-3'>
                <button type='button' className='text-center fw-bold bg-warning text-white'>Submit</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Regi
