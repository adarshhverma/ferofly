import React from 'react'
import '../style/Booking.css'
function Booking() {
    return (
        <div className='booking'>
            
                <div className='booking__item'>
                    <label htmlFor="indate">Check In</label>
                    <input className='field' type='date' id='indate' name='indate' />
                </div>
                <div className='booking__item'>
                    <label htmlFor="outdate">Check Out</label>
                    <input className='field' type='date' id='outdate' name='outdate' />
                </div>
           
            
                <div className='booking__item'>
                    <label htmlFor="numOfAdults">Adults</label>
                    <input className='field' type='number' id='numOfAdults' name='numOfAdults' />
                </div>
                <div className='booking__item'>
                    <label htmlFor="numOfKids">Kids</label>
                    <input className='field' type='number' id='numOfKids' name='numOfKids' />
                </div>
          
            <div className='booking__item'>
                <button className='btn btn-dark booking__btn' value='Search' >Search</button>
            </div>
        </div>
    )
}

export default Booking
