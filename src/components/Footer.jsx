import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full'>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-orange-600'> &lt;</span>

                <span>Pass</span><span className='text-orange-600'>OP/&gt;</span>


            </div>
            <div className='flex justify-center items-center'>Created with &copy; Prem Vishwakarma</div>
        </div>
    )
}

export default Footer
