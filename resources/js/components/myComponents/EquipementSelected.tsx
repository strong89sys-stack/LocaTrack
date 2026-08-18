import { FaCircleDot } from "react-icons/fa6";
import { MdBattery5Bar, MdClose, MdPrecisionManufacturing } from "react-icons/md";

export default function EquipementSelected(){
    return(
        <>
        <div className="col-span-4 flex flex-col overflow-hidden bg-white h-125">
            <div className="p-4 border rounded-md bg-inherit border-b-[#bdc8ce] shadow ">
                <div className="flex items-center justify-between mb-1">
                    <h3 className="text-[20px] leading-7 font-semibold text-[#121c28] font-[Inter, serif] ">
                        Equipement sélectionné
                    </h3>
                    <span><button><MdClose /></button></span>
                </div>
            </div>
            <div className=" flex-1 overflow-y-auto bg-inherit p-6 border rounded-md ">
                <div className="flex items-center gap-4 mb-6 ">
                    <div className=" text-[#007f9d] bg-[#e5eeff] rounded-md flex items-center w-16 h-16 justify-center ">
                        <span className="text-[1.875rem] leading-9 ">
                            <MdPrecisionManufacturing />
                        </span>
                    </div>
                    <div>
                        <h4 className="text-[22px] leading-7 font-semibold text-[#121c28] ">MB-001</h4>
                        <p className="text-[16px] leading-5 font-normal ">Perceuse à cadre</p>
                    </div>
                </div>
                <div className="flex gap-2 mb-6">
                    <span className="items-center inline-flex gap-1 text-[#004e61] text-[14px] leading-4 font-semibold py-1 px-2.5 bg-[#b7eaff33] border border-[#b7eaff] rounded-[9999px] "><FaCircleDot className="text-[6px] bg-[#004e61] rounded-[50%] " />Online</span>
                    <span className="inline-flex items-center gap-1 text-[#3e484d] text-[14px] leading-4 font-semibold py-1 px-2.5 bg-[#dfe9fa] border border-[#bdc8ce] rounded-[9999px] ">Location</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex flex-col col-span-2 p-5 bg-[#f8f9ff] border rounded-md items-center gap-4 hover:-translate-y-1 shadow transition-all ">
                        <span className="text-[1rem] leading-4 block mb-1 ">Etat de la batterie</span>
                        <div className="flex items-center gap-2">
                            <span className="text-[#121c28] leading-0 text-[20px] font-semibold ">87%</span>
                            <span className="text-[#00647c] leading-0 text-[0.875rem] mb-0.5 "><MdBattery5Bar /></span>
                        </div>
                    </div>
                </div>
                <div className="pt-4 border-t border-t-[#bdc8ce80] ">
                    <div className="flex items-center justify-between">
                        <span className="text-[#3e484d] text-[16px] leading-5 font-normal ">Location</span>
                        <span className="text-[#121c28] text-[14px] leading-4 font-semibold tracking-wider text-right ">
                            Zone 4, Marcory
                            <br />
                            <span className="text-xs text-[#6e797e] leading-4 ">5.2893° N, -3.9871° W</span>
                        </span>
                    </div>
                    <div className="flex items-center justify-between mt-5">
                        <span className="text-[#3e484d] text-[16px] leading-5 font-normal">Dernier Signal</span>
                        <span className="text-[#121c28] text-[14px] leading-4 font-semibold tracking-wider text-right ">Il y a 2 min</span>
                    </div>
                    <div className="flex items-center justify-between my-5">
                        <span className="text-[#3e484d] text-[16px] leading-5 font-normal">Client</span>
                        <span className="text-[#121c28] text-[14px] leading-4 font-semibold tracking-wider text-right ">
                            <span></span>Koffi A.
                        </span>
                    </div>
                </div>
                <div className="py-4 bg-white border-t border-t-[#bdc8ce] flex ">
                    <button className="flex-1 text-white bg-[#00647c] text-[16px] leading-4 tracking-wider font-semibold py-5 rounded-md cursor-pointer w-full border hover:translate-y-0.5 transition-all ">Détails</button>
                </div>
            </div>

        </div>
        </>
    )
}
