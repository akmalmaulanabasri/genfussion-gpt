import { CChart } from '@coreui/react-chartjs'
import React from 'react'

function TopProduct(props) {

    const random = () => {
        const min = 80
        const max = 100
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    return (
        <div className={`p-5 bg-gray-200 mt-3`} >
            <span className="text-2xl mb-3">
                {props.title}
            </span>
            <div className={` mt-3 border border-red-100 rounded-md shadow-lg p-5`}>
                <CChart
                    type="bar"
                    data={{
                        labels: ['Mei', 'Juni', 'Juli'],
                        datasets: [
                            {
                                label: 'Elektronik',
                                backgroundColor: '#f87979',
                                data: [random(), random(), random()],
                            },
                            {
                                label: 'Fashion Pria',
                                backgroundColor: '#a23c33',
                                data: [random(), random(), random()],
                            },
                            {
                                label: 'Sepatu Wanita',
                                backgroundColor: '#191919',
                                data: [random(), random(), random()],
                            },

                        ],
                    }}
                    labels="months"
                    options={{
                        plugins: {
                            legend: {
                                labels: {
                                    color: 'black',
                                }
                            }
                        },
                        scales: {
                            x: {
                                grid: {
                                    color: 'gray',
                                },
                                ticks: {
                                    color: 'gray',
                                },
                            },
                            y: {
                                grid: {
                                    color: 'gray',
                                },
                                ticks: {
                                    color: 'gray',
                                    color: 'gray',
                                },
                            },
                        },
                    }}
                />
            </div>
        </ div>
    )
}

export default TopProduct