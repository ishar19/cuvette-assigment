
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'; 
import {
    useRecoilValue,
} from 'recoil';
import { rankState, percentileState, answerState } from '../skilltestState'
ChartJS.register(ArcElement, Tooltip, Legend);

export default function StatBar(){
    const answer = useRecoilValue(answerState);
     const data = {
        labels: ['Answered', 'Unanswered'],
        datasets: [
            {
                data: [answer?answer:7,15-answer ],
                backgroundColor: [
                    'rgb(37, 99, 235)',
                    "rgb(147, 197, 253)"
                ],
                borderColor: [
                ],
                borderWidth: 0,
            },
        ],
    };
    return(
        <div className="mt-16 mr-8 pt-8 w-[30vw]">
            <div className="border-solid border-slate-200 border-2 rounded-md p-8">
                <p className="text-[#1E272E] font-bold mb-4">Syllabus wise Analysis</p>
                <div>
                    <p className="text-[#566474]">HTML Tools, Forms, History</p>
                    <div className="flex flex-row">
                        <div class="">
                            <div class="mb-8">
                                <div class="bg-blue-200 relative h-[10px] w-[15vw] rounded-2xl">
                                    <div
                                        class="bg-blue-500 absolute top-0 left-0 h-full w-[80%] rounded-2xl"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <p className="mt-[-5px] ml-1 text-blue-500 font-bold">80%</p>
                    </div>
                  
                </div>
                <div>
                    <p className="text-[#566474] mb-4">Tags & References in HTML</p>
                    <div className="flex flex-row">
                        <div class="">
                            <div class="mb-8">
                                <div class="bg-yellow-200 relative h-[10px] w-[15vw] rounded-2xl">
                                    <div
                                        class="bg-yellow-500 absolute top-0 left-0 h-full w-[60%] rounded-2xl"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <p className="mt-[-5px] ml-1 text-yellow-500 font-bold">60%</p>
                    </div>

                </div>
                <div>
                    <p className="text-[#566474] mb-4">Tables & CSS Basics</p>
                    <div className="flex flex-row">
                        <div class="">
                            <div class="mb-8">
                                <div class="bg-pink-200 relative h-[10px] w-[15vw] rounded-2xl">
                                    <div
                                        class="bg-pink-400 absolute top-0 left-0 h-full w-[24%] rounded-2xl"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <p className="mt-[-5px] ml-1 text-pink-400 font-bold">24%</p>
                    </div>

                </div>
                <div>
                    <p className="text-[#566474] mb-4">Tables & CSS Basics</p>
                    <div className="flex flex-row">
                        <div class="">
                            <div class="mb-8">
                                <div class="bg-green-200 relative h-[10px] w-[15vw] rounded-2xl">
                                    <div
                                        class="bg-green-400 absolute top-0 left-0 h-full w-[96%] rounded-2xl"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <p className="mt-[-5px] ml-1 text-green-400 font-bold">96%</p>
                    </div>

                </div>
            </div>
            <div className='border-solid border-slate-200 border-2 rounded-md p-8 mt-8'>
                <div className='flex flex-row justify-between'>
                    <div className='text-[#1E272E] font-bold mb-4'>Question Analysis</div>
                    <div className='text-blue-600 mb-4'>{answer?answer:7}/15</div>
                </div>
                <div className='text-[#566474]'><span className='font-bold'>You scored {answer ? answer : 7} question correct out of 15.</span> However it
                    still needs some improvements</div>
                <div>
                    <Doughnut data={data} />
                </div>
            </div>
        </div>
    )

}