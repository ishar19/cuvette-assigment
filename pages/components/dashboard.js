import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';
import {rankState, percentileState, answerState} from '../skilltestState'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Dashboard() {
    const [isOpen, setIsOpen] = useState(false)

    const [rank, setRank] = useRecoilState(rankState);

    const [percentile, setPercentile] = useRecoilState(percentileState);

    const [answer, setAnswer] = useRecoilState(answerState);


    const data = [
        {
            name: '0%',
            percentile: 5,
        },
        {
            name: '20%',
            percentile: 20,
        },
        {
            name: '40%',
            percentile: 55,
        },
        {
            name: '60%',
            percentile: 50,
        },
        {
            name: '80%',
            percentile: 30,
        },
        {
            name: '100%',
            percentile: 12,
        },
    ];



    const onSave = (event) => {
        setRank(document.getElementById("rankInput").value)
        setPercentile(document.getElementById("percentileInput").value)
        setAnswer(document.getElementById("scoreInput").value)
        setIsOpen(false)

    };

    return (
        <div className="mt-8">
            <div className="text-[#566474] mb-12 ml-12"  >Skill Test</div>
            <div className="ml-8 border-solid border-slate-200 border-2 flex gap-8 rounded-md p-4	 ">
                <div>
                    <img src="./html.svg" />
                </div>
                <div>
                    <p className="text-[#222F3E] font-bold">Hypertext Markup Language</p>
                    <p className="text-[#566474]">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
                </div>
                <div>
                    <button onClick={() => setIsOpen(true)} className="text-white bg-[#142683] px-12 py-4 rounded-lg font-bold ml-12">Update</button>
                </div>
            </div>


            <div className="ml-8 mt-12 border-solid border-slate-200 border-2 rounded-md p-4">
                <div className="text-[#1E272E] font-bold mb-4">
                    Quick Statistics
                </div>
                <div className="flex flex-row justify-between">
                    <div className="flex gap-1">
                        <div>
                            <img src="./trophy.svg" />
                        </div>
                        <div className="ml-2">
                            <div className="text-[#1E272E] font-bold">{rank?rank:12980}</div>
                            <div className="text-[#9EAAB7] text-sm">YOUR RANK</div>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div>
                            <img src="./clipboard.svg" />
                        </div>
                        <div className="ml-2">
                            <div className="text-[#1E272E] font-bold">{percentile?percentile:37}%</div>
                            <div className="text-[#9EAAB7] text-sm">PERCENTILE</div>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <div>
                            <img src="./checkmark.svg" />
                        </div>
                        <div className="ml-2">
                            <div className="text-[#1E272E] font-bold">{answer?answer:7}/15</div>
                            <div className="text-[#9EAAB7] text-sm">CORRECT ANSWER</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='ml-8 mt-12 border-solid border-slate-200 border-2 rounded-md p-4'>
                <p className='font-semibold text-[#1E272E]'>Comparison Graph</p>
                <p className='text-[#566474]'><span  className='font-semibold'>You scored {percentile ? percentile : 37}% percentile </span>which is lower than the
                    average percentile 72% of all the engineers who took this assessment</p>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line type="monotone" dataKey="percentile" stroke="#82ca9d" />
                </LineChart>
            </div>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50 translate-x-[20vw] translate-y-[-130vh] py-8">
                <div className="absolute inset-[-500px] bg-black/30 w-[150vw] h-[150vh]" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4 w-[60vw]">
                    <Dialog.Panel className="w-full rounded bg-white">
                        <Dialog.Title>
                            <div className=' flex flex-row justify-between px-8 align-middle py-4'>
                                <div className='text-2xl font-semibold text-[#222F3E]'>Update Scores</div>
                                <div>
                                    <img src="./html.svg" />
                                </div>
                            </div>
                        </Dialog.Title>
                        <ol className='ml-4'>
                            <li>
                                <div className='flex flex-row justify-between mt-6 mb-8 '>
                                    <div className='text-[#566474] '>
                                        <svg className='inline mr-2' width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <ellipse cx="12.5" cy="13.9821" rx="12.5" ry="12.0536" fill="#142683" />
                                            <path d="M12.16 19V10.69L10.435 11.095V9.625L12.97 8.5H14.155V19H12.16Z" fill="white" />
                                        </svg>
                                    Update your <span className='font-bold'>rank</span> </div>
                                    <div><input id='rankInput' type='num' className='border-4 border-blue-400 focus:border-blue-700 focus:outline-none rounded-lg pl-8 w-[120px] h-[40px] mr-4  placeholder:text-blue-700' placeholder='12980'></input></div>
                                </div>
                            </li>
                            <li>
                                <div className='flex flex-row justify-between mb-8'>
                                    <div className='text-[#566474] '>
                                        <svg className='inline mr-2' width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12.5" cy="14.5" r="12.5" fill="#142683" />
                                            <path d="M8.765 19V17.605C9.405 17.075 10.025 16.55 10.625 16.03C11.235 15.51 11.775 14.995 12.245 14.485C12.725 13.975 13.105 13.48 13.385 13C13.675 12.51 13.82 12.035 13.82 11.575C13.82 11.145 13.7 10.765 13.46 10.435C13.23 10.105 12.845 9.94 12.305 9.94C11.755 9.94 11.34 10.12 11.06 10.48C10.78 10.84 10.64 11.275 10.64 11.785H8.78C8.8 11.015 8.97 10.375 9.29 9.865C9.61 9.345 10.035 8.96 10.565 8.71C11.095 8.45 11.69 8.32 12.35 8.32C13.42 8.32 14.25 8.615 14.84 9.205C15.44 9.785 15.74 10.54 15.74 11.47C15.74 12.05 15.605 12.615 15.335 13.165C15.075 13.715 14.73 14.245 14.3 14.755C13.87 15.265 13.405 15.745 12.905 16.195C12.405 16.635 11.92 17.045 11.45 17.425H15.995V19H8.765Z" fill="white" />
                                        </svg>

                                    Update your <span className='font-bold'>percentile</span> </div>
                                    <div><input id='percentileInput' min='0' max="100" type='number' className='border-4 border-blue-400 focus:border-blue-700 focus:outline-none rounded-lg pl-8 w-[120px] h-[40px] mr-4  placeholder:text-blue-700' placeholder='37'></input></div>
                                </div>
                            </li>
                            <li>
                                <div className='flex flex-row justify-between mb-8'>
                                    <div className='text-[#566474] '>
                                        <svg className='inline mr-2' width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="12.5" cy="14.5" r="12.5" fill="#142683" />
                                            <path d="M12.455 19.18C11.765 19.18 11.14 19.06 10.58 18.82C10.02 18.57 9.57 18.19 9.23 17.68C8.89 17.17 8.71 16.53 8.69 15.76H10.58C10.59 16.27 10.755 16.7 11.075 17.05C11.405 17.39 11.865 17.56 12.455 17.56C13.015 17.56 13.445 17.405 13.745 17.095C14.045 16.785 14.195 16.395 14.195 15.925C14.195 15.375 13.995 14.96 13.595 14.68C13.205 14.39 12.7 14.245 12.08 14.245H11.3V12.67H12.095C12.605 12.67 13.03 12.55 13.37 12.31C13.71 12.07 13.88 11.715 13.88 11.245C13.88 10.855 13.75 10.545 13.49 10.315C13.24 10.075 12.89 9.955 12.44 9.955C11.95 9.955 11.565 10.1 11.285 10.39C11.015 10.68 10.865 11.035 10.835 11.455H8.96C9 10.485 9.335 9.72 9.965 9.16C10.605 8.6 11.43 8.32 12.44 8.32C13.16 8.32 13.765 8.45 14.255 8.71C14.755 8.96 15.13 9.295 15.38 9.715C15.64 10.135 15.77 10.6 15.77 11.11C15.77 11.7 15.605 12.2 15.275 12.61C14.955 13.01 14.555 13.28 14.075 13.42C14.665 13.54 15.145 13.83 15.515 14.29C15.885 14.74 16.07 15.31 16.07 16C16.07 16.58 15.93 17.11 15.65 17.59C15.37 18.07 14.96 18.455 14.42 18.745C13.89 19.035 13.235 19.18 12.455 19.18Z" fill="white" />
                                        </svg>

                                    Update your <span className='font-bold'>current score (out of 15)</span> </div>
                                    <div><input id='scoreInput' type='num' className='border-4 border-blue-400 focus:border-blue-700 focus:outline-none rounded-lg pl-8 w-[120px] h-[40px] mr-4 placeholder:text-blue-700' placeholder='7'></input></div>
                                </div>
                            </li>
                        </ol>
                        <div className='text-right mr-8 mb-4'>
                            <button onClick={() => setIsOpen(false)} className="text-[#142683] bg-white border-2 border-[#142683] px-4 py-1 rounded-md font-bold">Cancel</button>
                            <button onClick={onSave} className="text-white bg-[#142683] px-8 py-2 rounded-md font-bold ml-8">Save
                                <svg className='inline ml-2' width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.33325 8.28415H12.6666" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M8 3.61751L12.6667 8.28417L8 12.9508" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </button>
                        </div>
                     </Dialog.Panel>
                </div>
            </Dialog>


        </div>
    )
}