import React, { useEffect, useState } from 'react'
import CreatableSelect from 'react-select/creatable';
import { TypeAnimation } from 'react-type-animation';
import LastPrompt from './LastPrompt';

function PromptInput(props) {
    const [focus, setFocus] = useState(false)
    const [options, setOptions] = useState([
        { value: 'Berikan saya 3 kategori terbaik dalam 3 bulan terakhir', label: 'Berikan saya 3 kategori terbaik dalam 3 bulan terakhir' },
        { value: 'Berikan saya 3 keluhan teratas dalam 3 bulan terakhir', label: 'Berikan saya 3 keluhan teratas dalam 3 bulan terakhir' },
    ])

    console.log(options)

    function manualSubmit() {
        const input = [document.querySelector('#promptinput').value]
        // options.push({ value: input[0], label: input[0] })
        // if (input == '') return null
        // if (options.includes(input)) return null
        props.setPromt(input)
    }

    const text = `Berikut adalah tiga produk dengan rating tertinggi beserta detailnya dari daftar yang Anda berikan: \n\nSolid Gold Petite Micropave \n\nHarga: $168 \nKategori: Jewelry \nRating: 3.9 \nSilicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5 \n\nHarga: $109 \nKategori: Electronics \nRating: 4.8 \nWD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive \n\nHarga: $114 \nKategori: Electronics \nRating: 4.8 \nMasing-masing produk memiliki rating yang sangat baik, yang menunjukkan kepuasan pelanggan yang tinggi terhadap produk tersebut. Jika Anda ingin informasi lebih lanjut tentang produk atau rekomendasi tambahan, silakan beri tahu saya.`


    return (
        <>
            <div className="p-5 flex flex-row items-center justify-center">
                <div className="w-full">
                    <input id='promptinput' onFocus={() => setFocus(true)} list="browsers" name="myBrowser" className='shadow-inner w-full p-2 border border-gray-300 rounded-lg bg-[#d6675d] placeholder-white' placeholder='Tanya AI!' />
                </div>
                <input type="button" onClick={() => manualSubmit()} value="Submit" className='w-1/2 py-2 bg-cyan-300 rounded-lg ms-3' />
            </div>

            <LastPrompt focus={focus} setFocus={setFocus} options={options} setOptions={setOptions} setPromt={props.setPromt} />

            <div className={`bg-gray-200 p-5 mt-3`}>
                <h4 className='font-bold'>
                    Berikan 3 produk dengan rating tertinggi dengan detail
                </h4>
                <p className='mt-3'>
                    <TypeAnimation
                        sequence={[text, 50]}
                        speed={99}
                    />
                </p>
            </div>



        </>
    )
}

export default PromptInput