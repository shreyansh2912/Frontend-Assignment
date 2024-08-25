import React from 'react'

function Count() {
  let num = 0;
  let numtag 
  let incre = ()=>{
    numtag = document.getElementById("num");
    num = num+1;
    numtag.innerHTML = num;
  }
  let decre = ()=>{
    if(num >= 0){
      numtag.innerHTML = num;
      num = num - 1;
    }
  }
  let reset = ()=>{
    num = 0;
    numtag.innerHTML = num;
  }
  return (
    <div className='bg-primary '>
        <div className='text-center'>
            <h1 className='text-white'>React Web</h1>
            <div className='num text-white' id='num'>0</div>
            <div className='mt-3 '><button className='bg-dark text-white' onClick={decre}>Decrement</button> <button className='bg-dark text-white' onClick={incre}>Increment</button></div>
            <div className='mt-3' onClick={reset}><button className='bg-dark text-white'>Reset</button></div>
        </div>
    </div>
  )
}

export default Count
