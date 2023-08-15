import React, { useState } from 'react'
import 'boxicons'


function Navbar() {
    const [navShow, setNavShow] = useState(false)
    return (
        <>
            <div className="bg-[#a23c33] flex px-5 py-3 items-center justify-between shadow">
                <span id="title" className='text-2xl text-white'>GenFussion</span>
                {/* <span id="btn" className='' onClick={() => setNavShow(!navShow)}>
                    <box-icon
                        aria-label="button"
                        name="menu"
                        size="md"
                    ></box-icon>
                </span> */}
            </div>
            <div id="navshow" className={`bg-gray-100 ${navShow ? '' : 'hidden'} `}>
                <ul>
                    <li className='px-5 py-2 hover:bg-gray-300'>Home</li>
                    <li className='px-5 py-2 hover:bg-gray-300'>Users</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar