import { NavLink, useNavigate } from "react-router-dom"

const DekstopFooter = () => {
    const navigate = useNavigate()

    return(
        <>
            <div className="bg-[#212121] text-white w-full font-inter" style={{padding: "15px 12rem 15px 12rem"}}>
                <div className="flex justify-between mt-8 mb-6 cursor-default">
                    <div className="w-3/4">
                        <img className="" src="Logo_-_MGI_ver1.png" style={{width: "13rem", maxHeight: "13rem"}} onClick={() => navigate("/MGI-Example/")}/>
                    </div>
                    <h1 className="text-lg w-1/4 my-auto font-semibold">Navigation</h1>
                    <h1 className="text-lg w-1/4 my-auto font-semibold">office</h1>

                </div>
                <div className="flex justify-between ">
                    <div className="w-3/4">
                        <p className="cursor-default">MULTICERT GLOBAL INDONESIA (MGI) is a professional company <br/> provides extensive range of expertises in the field of certification, audit, 
                            <br/>inspectionand various independent assessment
                        </p>
                    </div>
                    <div className="w-1/4 flex flex-col">
                        <NavLink>About Us</NavLink>
                        <NavLink className="mt-4">Services</NavLink>
                        <NavLink className="mt-4">NavLinkublication</NavLink>
                        <NavLink className="mt-4">News & Event</NavLink>
                        <NavLink className="mt-4">Career</NavLink>
                    </div>
                    <div className="w-1/4 flex flex-col cursor-default">
                        <p className="font-semibold">Office</p>
                        <p className="mt-1">PT. Multicert Global Indonesia</p>
                        <p className="mt-4 font-semibold">Email</p>
                        <p className="mt-1">info@mgi-cert.com</p>
                        <p className="mt-4 font-semibold">Telephone Numb</p>
                        <p className="mt-1">+62 (21) 390 7774</p>
                        <p className="mt-4 font-semibold">Address</p>
                        <p className="mt-1">Jl. KH. Mas Mansyur #96-98 
                        Kebon Melati, Tanah AbangJakarta Pusat. INDONESIA</p>
                    </div>
                </div>

                <p className="text-center text-lg mt-12 cursor-default">© 2019 Multicert Global Indonesia. All Rights Reserved</p>
            </div>
        </>
    )
}

export default DekstopFooter