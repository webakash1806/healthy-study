import React from 'react'

const Btn = ({ data }) => {
    return (
        <button className='bg-red text-white p-[6px] px-[25px] rounded-[4px] tracking-wide capitalize font-semibold border border-red hover:bg-white hover:text-red hover:shadow-[2px_2px_5px_#131D28] transition-all duration-200'>{data}</button>
    )
}

export default Btn
