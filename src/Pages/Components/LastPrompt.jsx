import React, { useEffect } from 'react'
import TopProduct from './TopProduct'

function LastPrompt(props) {
    const [lastPrompt, setLastPrompt] = React.useState([]);

    function getLastPrompt(prompt) {
        lastPrompt.push({
            prompt: prompt,
            card: TopProduct
        })
        props.setFocus(false)
        console.log(lastPrompt)
    }

    return (
        <>
            <div className={`bg-gray-200 p-5 mt-3 ${props.focus ? '' : 'hidden'}`}>
                <div className="flex justify-between items-center">
                    <h3>Last Prompt</h3>
                    <box-icon
                        aria-label="button"
                        name="x"
                        size="md"
                        onClick={() => props.setFocus(false)}
                    ></box-icon>
                </div>
                <ul className='mt-2'>
                    {props.options.map((option) => (
                        <li key={option.value} className='py-2'>
                            <div className="flex flex-row items-center justify-between">
                                <div className="flex flex-row items-center">
                                    <span className="text-gray-700">{option.label}</span>
                                </div>
                                <div className="flex flex-row items-center">
                                    <span className="bg-gray-700 text-white px-3 py-1 rounded-sm" onClick={() => getLastPrompt(option.value)}>Use</span>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>


            </div>
            {lastPrompt && lastPrompt.map((d) => (
                <d.card title={d.prompt} />
            ))}
        </>
    )
}

export default LastPrompt