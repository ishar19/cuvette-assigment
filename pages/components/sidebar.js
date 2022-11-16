export default function Sidebar(){
    return(
        <div>
            <div className="pt-16 flex flex-col gap-8 ">
                <div className="cursor-pointer flex gap-2 pl-8 py-4 pr-5 text-[#566474]  hover:bg-blue-100 w-fit rounded-2xl hover:text-blue-600">
                    <img src="./icon1.svg"/>
                    <p>Dashboard</p>
                </div>
                <div className="cursor-pointer flex gap-2 pl-10 py-4 pr-3 text-blue-600 bg-blue-100 w-fit rounded-2xl ">
                    <img src="./icon2.svg" />
                    <p>Skill Test</p>
                </div>
                <div className="cursor-pointer flex gap-2 pl-8 py-4 pr-5 text-[#566474] hover:bg-blue-100 w-fit hover:rounded-2xl hover:text-blue-600">
                    <img src="./icon3.svg" />
                    <p>Internships</p>
                </div>
            </div>
            <div class="absolute top-16 left-[15vw] w-0.5 h-[180vh] bg-gray-200"></div>
        </div>
        
    )
}