import React, { useState } from 'react'
import TopProduct from './Components/TopProduct'
import PromptInput from './Components/PromptInput'

function Home() {
    const [promt, setPromt] = useState(null)
    return (
        <div className='bg-[#f6d5d2]'>
            <h3 className="text-xl text-[#d6675d] px-5 pt-5">
                Hallo, Welcome GenAi Hunters !
            </h3>
            <PromptInput setPromt={setPromt} promt={promt} />
            
        </div>
    )
}

export default Home