import React from 'react'

function Bill() {

    let grandTotal = {};
    let handleSubtotal=(input,price,tag)=>{
        let inputtag = document.getElementById(`${input}`)
        let totalTag = document.getElementById(`${tag}`)
        totalTag.innerHTML = (inputtag.value * price).toFixed(2);
        grandTotal[tag] =  inputtag.value * price ;
        let tepTotal = 0;
        // console.log(grandTotal);
        for (const value in grandTotal) {
            tepTotal += grandTotal[value]
        }
        let grandTotalTag = document.getElementById(`total`);
        tepTotal = tepTotal.toFixed(2);
        grandTotalTag.innerHTML = tepTotal;    
    }

  return (
    <div className='container p-5 w-75'>
      <table  border="1" className='table table-striped text-dark' >
            <thead>
                <th >Product info</th>
                <th>Quantity</th>
                <th>Price (per unit)</th>
                <th>Price (subtotal)</th>
                <th></th>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <img src="" alt='img'/> <br/>
                        Fortuna Window Hardware - Decorative Holdbacks-Mocha
                    </td>
                    <td><input type="number" id='firstInput' onKeyUp={()=> handleSubtotal('firstInput','29.99','first')}/></td>
                    <td>$29.99</td>
                    <td id='first'></td>
                    <td><button className='bg-danger fw-bold text-light'>Remove</button></td>
                </tr>
                <tr>
                    <td>
                        <img src="" alt='img'/> <br/>
                        Woven Trellies Window Hardware - Clip Rings - Bronze
                    </td>
                    <td><input type="number" id='secondInput' onKeyUp={()=> handleSubtotal('secondInput','12.99','second')}/></td>
                    <td>$12.99</td>
                    <td id='second'></td>
                    <td><button className='bg-danger fw-bold text-light'>Remove</button></td>
                </tr>
                <tr>
                    <td>
                        <img src="" alt='img'/> <br/>
                        Men's Blue Shirt
                    </td>
                    <td><input type="number" id='thirdInput' onKeyUp={()=> handleSubtotal('thirdInput','20.00','third')}/></td>
                    <td>$20.00</td>
                    <td id="third"></td>
                    <td><button className='bg-danger fw-bold text-light'>Remove</button></td>
                </tr>
                <tr>
                    <td>
                        <img src="" alt='img'/> <br/>
                        Nike Shoes For Men and Women
                    </td>
                    <td><input type="number" id='fourInput' onKeyUp={()=> handleSubtotal('fourInput','150.00','four')}/></td>
                    <td>$150.00</td>
                    <td id="four"></td>
                    <td><button className='bg-danger fw-bold text-light'>Remove</button></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td className='' id='total'>00.00</td>
                    <td></td>
                </tr>
            </tbody>
      </table>
    </div>
  )
}

export default Bill
