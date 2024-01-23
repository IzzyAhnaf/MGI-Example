import { useState } from "react";
import { GoArrowDown, GoArrowRight, GoArrowUp, GoArrowUpRight } from "react-icons/go";
import { IoMdAdd } from "react-icons/io";

const PublicationsPages = () => {
    const [show, setShow] = useState(false);
    const [showButtonUs1, setShowButtonUs1] = useState(false);
    const [showButtonUs2, setShowButtonUs2] = useState(false);
    const [showButtonUs3, setShowButtonUs3] = useState(false);
    const [showButtonUs4, setShowButtonUs4] = useState(false);
    const [SNIApproval1b, setSNIApproval1b] = useState(false);
    const [SNIApproval1n, setSNIApproval1n] = useState(false);
    const [SNIApproval5, setSNIApproval5] = useState(false);
    const [arrowDownload1, setArrowDownload1] = useState(false);
    const [arrowDownload2, setArrowDownload2] = useState(false);
    const [arrowDownload3, setArrowDownload3] = useState(false);
    const [arrowDownload4, setArrowDownload4] = useState(false);

    return (
      <>
        <section className="" style={{ backgroundColor: "rgba(196, 148, 47, 0.3)"}}>
          <div className="flex justify-between">
            <div className="w-3/4 relative">
              <img
                className="absolute top-1/3 left-1/3 z-1"
                style={{ width: "35%" }}
                src="PUBLICATION.png"
                alt=""
              />
  
              <img className="ml-auto relative z-0" style={{ width: "50%" }} src="ali-morshedlo.png" alt="" />
            </div>
            <div className="w-3/4 flex" style={{ paddingLeft: "5rem" }}>
                <div className="flex flex-col my-auto">
                    <div className="flex font-inter" style={{fontSize: "3rem", fontWeight: "500"}}>
                        <h2 className="text-[#C4942F]">PUBLIC</h2>
                        <h2 className="text-black">ATION</h2>
                    </div>
                    <p className="font-inter text-xl mt-4" style={{width: "70%"}}>
                    This information contains necessary information 
                    regarding the SNI certification. Our services are
                    accesible to all applicants whose activities fall
                    within our scope of SNI Certification
                    </p>
                    <button onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} 
                    type="button" className="rounded-lg w-1/3 text-xl text-white mt-12 h-14 bg-[#212121] hover:bg-black flex items-center justify-center font-inter hover:shadow-md">
                        More Detail {show ? <GoArrowUp className="ml-2" /> : <GoArrowDown className="ml-2"/>}
                    </button>
                </div>
                <div className="text-white flex flex-col space-x-2">
                    <img src="Group5.png" className="mt-12 ml-auto" style={{width:"130px"}}/>
                    <div className="flex flex-col mt-auto">
                        <img src="Vector4.png" className="absolute top-1/2 transform translate-y-[150px] right-[90px]" style={{width:"75px"}} alt="" />
                        <div className="flex bg-[#212121] p-2 mt-auto justify-center items-center space-x-2" style={{width:"200px", height:"150px"}}>
                            <p className="text-4xl font-bold font-inter">5</p>
                            <p className="text-xl font-inter">Publication</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/12">

            </div>
          </div>
        </section>
        <section className="p-6" style={{paddingLeft: "12rem", paddingRight: "12rem"}}>
            <img src="Vector4.png" style={{transform: "rotate(-5deg)"}}
            className="mx-auto mt-12"/>
            <div className="font-inter text-4xl flex justify-center mt-6" style={{fontWeight: "600"}}>
                <p className="text-[#C4942F]">Public</p>
                <p className="text-black">ation</p>
            </div>
            <div className="flex flex-col items-center font-inter text-gray-500 mt-5">
                <p>Certification Scheme, Application & Fees,</p>
                <p>Regulation, Scope of Accreditation,</p>
                <p> Complaints and Appeals</p>
            </div>
            {/* Certification Scheme */}
            <div className="flex justify-between mt-24" style={{height: "200px"}}>
                <div className="w-[500px] flex flex-col">
                    <h1 className="font-inter font-bold text-5xl">Certification Scheme</h1>
                    <p className="mt-auto text-gray-500 font-inter">Published date: 10 July 2019</p>
                </div>
                <div className="w-[650px] flex flex-col mr-24 h-[215px]">
                    <p className="font-inter font-thin text-xl"
                    style={{width: "650px"}}>Product Certification Scheme implement the functional approach such as Selection, Determination, Review, Decision, Attestation, and Surveillance. PT Multicert Global Indonesia (MGI) categorize the certification schemes as follows</p>
                    <button type="button" className="rounded-lg w-[180px] text-xl mt-auto text-white bg-[#212121] hover:bg-black flex items-center justify-center font-inter hover:shadow-md ml-auto"
                    style={{height: "50px"}}
                    onMouseEnter={() => setShowButtonUs1(true)} onMouseLeave={() => setShowButtonUs1(false)}>Button Us {!showButtonUs1 ? <GoArrowUpRight className="ml-2"/> : <GoArrowRight className="ml-2"/>}</button>
                </div>
            </div>
            <div className="flex justify-between mt-[100px]">
                <div className="w-[500px] p-8 rounded-lg shadow-md" style={{outline: "1px solid #C4942F"}}>
                    <img src="bx_certification.png" alt="" />
                    <h2 className="mt-2 font-bold font-inter text-lg">Certification Scheme Type 1b</h2>
                    <p className="text-gray-500 text-lg font-inter mt-1 w-[300px]">The process flow of Certification Scheme type 1b</p>
                    <button className="rounded-lg mx-auto text-xl text-white ps-4 pe-4  mt-12 h-14 bg-[#212121] hover:bg-black flex items-center justify-center font-inter hover:shadow-md"
                    onMouseEnter={() => setSNIApproval1b(true)} onMouseLeave={() => setSNIApproval1b(false)}>SNI Approval Scheme Type 1b {!SNIApproval1b ? <GoArrowUpRight className="ml-2"/> : <GoArrowRight className="ml-2"/>}</button>
                </div>
                <div className="w-[500px] p-8 rounded-lg shadow-md" style={{outline: "1px solid #C4942F"}}>
                    <img src="bx_certification.png" alt="" />
                    <h2 className="mt-2 font-bold font-inter text-lg">Certification Scheme Type 1n</h2>
                    <p className="text-gray-500 text-lg font-inter mt-1 w-[300px]">The process flow of Certification Scheme type 1n</p>
                    <button className="rounded-lg mx-auto text-xl text-white ps-4 pe-4  mt-12 h-14 bg-[#212121] hover:bg-black flex items-center justify-center font-inter hover:shadow-md"
                    onMouseEnter={() => setSNIApproval1n(true)} onMouseLeave={() => setSNIApproval1n(false)}>SNI Approval Scheme Type 1n {!SNIApproval1n ? <GoArrowUpRight className="ml-2"/> : <GoArrowRight className="ml-2"/>}</button>
                </div>
                <div className="w-[500px] p-8 rounded-lg shadow-md" style={{outline: "1px solid #C4942F"}}>
                    <img src="bx_certification.png" alt="" />
                    <h2 className="mt-2 font-bold font-inter text-lg">Certification Scheme Type 5</h2>
                    <p className="text-gray-500 text-lg font-inter mt-1 w-[300px]">The process flow of Certification Scheme type 5</p>
                    <button className="rounded-lg mx-auto text-xl text-white ps-4 pe-4 mt-12 h-14 bg-[#212121] hover:bg-black flex items-center justify-center font-inter hover:shadow-md"
                    onMouseEnter={() => setSNIApproval5(true)} onMouseLeave={() => setSNIApproval5(false)}>SNI Approval Scheme Type 5 {!SNIApproval5 ? <GoArrowUpRight className="ml-2"/> : <GoArrowRight className="ml-2"/>}</button>
                </div>
            </div>
            {/* Application & Fees */}
            <div className="flex justify-between mt-24" style={{height: "200px"}}>
                <div className="w-[500px] flex flex-col">
                    <h1 className="font-inter font-bold text-5xl">Application & Fees</h1>
                    <p className="mt-auto text-gray-500 font-inter">Published date: 24 March 2018</p>
                </div>
                <div className="w-[650px] flex flex-col mr-24 h-[240px]">
                    <p className="font-inter font-thin text-xl"
                    style={{width: "650px"}}>
                    The application of SNI certification requires necessary informations to complete the certification process in accordance with the relevant certification scheme such as product to be certified, standards, general features, etc. We describe the Certification fees into two categories                        
                    </p>
                    <button type="button" className="rounded-lg w-[180px] mt-auto text-xl text-white bg-[#212121] hover:bg-black flex items-center justify-center font-inter hover:shadow-md ml-auto"
                    style={{height: "50px"}}
                    onMouseEnter={() => setShowButtonUs2(true)} onMouseLeave={() => setShowButtonUs2(false)}>Button Us {!showButtonUs2 ? <GoArrowUpRight className="ml-2"/> : <GoArrowRight className="ml-2"/>}</button>
                </div>
            </div>
            <div className="flex space-x-4 mt-[100px]">
            <img src="Frame88.png" alt="" />
            <table className="rounded-xl w-full" style={{borderCollapse: "collapse", border: "1px solid #C4942F"}}>
                <thead style={{border: "1px solid #C4942F"}}>
                    <tr>
                        <th className="p-4 text-center" style={{width: "300px", border: "1px solid #C4942F"}}>Fee of Certification Scheme Type 1</th>
                        <th className="p-4 text-center" style={{width: "300px", border: "1px solid #C4942F"}}>Fee of Certification Scheme Type 1</th>
                    </tr>
                </thead>
                <tbody style={{border: "1px solid #C4942F"}}>
                    <tr>
                        <td className="p-4 text-center" style={{border: "1px solid #C4942F"}}>Product Testing Fee</td>
                        <td className="p-4 text-center" style={{border: "1px solid #C4942F"}}>Certification Process Fee (Single Site/Multi Site)</td>
                    </tr>
                    <tr>
                        <td className="p-4 text-center" style={{border: "1px solid #C4942F"}}>Certificate Fee</td>
                        <td className="p-4 text-center" style={{border: "1px solid #C4942F"}}>Product Testing Fee</td>
                    </tr>
                    <tr>
                        <td className="p-4 text-center" style={{border: "1px solid #C4942F"}}></td>
                        <td className="p-4 text-center" style={{border: "1px solid #C4942F"}}>Certificate Fee</td>
                    </tr>
                </tbody>
            </table>
            </div>
            {/* Regulations */}
            <div className="flex justify-between mt-24" style={{height: "200px"}}>
                <div className="w-[500px] flex flex-col">
                    <h1 className="font-inter font-bold text-5xl">Regulations</h1>
                    <p className="mt-auto text-gray-500 font-inter">Published date: 24 March 2018</p>
                </div>
                <div className="w-[650px] flex flex-col mr-24 h-[215px]">
                    <p className="font-inter font-thin text-xl"
                    style={{width: "650px"}}>The standards and/or other normative documents for related to certification. The reference of some Regulations are as following</p>
                    <button type="button" className="rounded-lg w-[180px] text-xl text-white mt-auto bg-[#212121] hover:bg-black flex items-center justify-center font-inter hover:shadow-md ml-auto"
                    style={{height: "50px"}}
                    onMouseEnter={() => setShowButtonUs3(true)} onMouseLeave={() => setShowButtonUs3(false)}>Button Us {!showButtonUs3 ? <GoArrowUpRight className="ml-2"/> : <GoArrowRight className="ml-2"/>}</button>
                </div>
            </div>
            <div className="flex space-x-4 mt-24 text-white">
                <div className="rounded-lg pt-10 ps-8 pb-10 pe-8 w-[400px]" style={{background: "linear-gradient(90deg, #C4942F 0%, #EAC23A 100%)"}}>
                    <h1 className="text-white font-inter font-bold text-xl" style={{width: "150px"}}>The Regulation from Ministry of Industry</h1>
                    <div className="flex justify-between space-x-2">
                        <img className="mt-[120px]" src="notes1.png" alt="" />
                        <button type="button"
                        className="rounded-lg w-[150px] text-lg text-white bg-[#212121] hover:bg-black flex items-center justify-center font-inter hover:shadow-md ml-auto mt-auto"
                        style={{height:"40px"}} onMouseEnter={() => setArrowDownload1(true)} onMouseLeave={() => setArrowDownload1(false)}>
                        Download {arrowDownload1 ? <GoArrowUpRight className="ml-2"/> : <GoArrowRight className="ml-2"/>}
                        </button>
                    </div>
                </div>
                <div className="flex flex-col w-[1100px]">
                    <div className="flex space-x-2">
                        <div className="flex flex-col rounded-lg pt-8 ps-8 pb-8 pe-8 bg-[#212121] w-[550px]">
                            <h1 className="text-lg font-inter w-[180px]" style={{fontWeight: "550"}}>The Regulation from Ministry of Trade</h1>
                            <button type="button" className="rounded-lg w-[150px] text-lg text-white flex items-center justify-center font-inter hover:shadow-md mt-8 hover:bg-[#755d0c] bg-[#C4942F]"
                            style={{height: "40px"}} 
                            onMouseEnter={() => {setArrowDownload2(true)}} onMouseLeave={() => setArrowDownload2(false)}>Download {arrowDownload2 ? <GoArrowUpRight className="ml-2"/> : <GoArrowRight className="ml-2"/>}</button>
                        </div>
                        <div className="flex flex-col rounded-lg pt-8 ps-8 pb-8 pe-8 w-[550px]" style={{background: "linear-gradient(90deg, #C4942F 0%, #EAC23A 100%)"}}>
                            <h1 className="text-lg font-inter w-[180px]" style={{fontWeight: "550"}}>The Regulation from BSN</h1>
                            <button type="button" 
                            className="rounded-lg w-[150px] text-lg text-white bg-[#212121] hover:bg-black flex items-center justify-center font-inter hover:shadow-md mt-auto"
                            style={{height: "40px"}} onMouseEnter={() => setArrowDownload3(true)} onMouseLeave={() => setArrowDownload3(false)}>Download {arrowDownload3 ? <GoArrowUpRight className="ml-2"/> : <GoArrowRight className="ml-2"/>}</button>
                        </div>
                    </div>

                    <div className="flex bg-[#212121] rounded-lg pt-8 ps-12 pb-8 pe-12 w-[1100px] mt-2 h-[200px] justify-between">
                        <h1 className="text-2xl font-inter w-[180px] my-auto" style={{fontWeight: "550"}}>The Regulation from Ministry of Trade</h1>
                        <button type="button"
                        className="rounded-lg w-[150px] text-lg text-white flex items-center justify-center font-inter hover:shadow-md mt-auto hover:bg-[#755d0c] bg-[#C4942F] mb-4"
                        style={{height: "40px"}} 
                        onMouseEnter={() => setArrowDownload4(true)} onMouseLeave={() => setArrowDownload4(false)}>Download {arrowDownload4 ? <GoArrowUpRight className="ml-2"/> : <GoArrowRight className="ml-2"/>}</button>
                    </div>
                </div>
            </div>
            {/* Scope of Accredetation */}
            <div className="flex justify-between mt-24" style={{height: "200px"}}>
                <div className="w-[600px] flex flex-col">
                    <h1 className="font-inter font-bold text-5xl">Scope of Accredetation</h1>
                    <p className="mt-auto text-gray-500 font-inter">Published date: 14 April 2020</p>
                </div>
                <div className="w-[650px] flex flex-col mr-24 h-[215px]">
                    <p className="font-inter font-thin text-xl"
                    style={{width: "650px"}}>This information contains our scope of SNI certification as KAN's Accreditation</p>
                    <button type="button" className="rounded-lg w-[180px] text-xl text-white mt-auto bg-[#212121] hover:bg-black flex items-center justify-center font-inter hover:shadow-md ml-auto"
                    style={{height: "50px"}}
                    onMouseEnter={() => setShowButtonUs4(true)} onMouseLeave={() => setShowButtonUs4(false)}>Button Us {!showButtonUs4 ? <GoArrowUpRight className="ml-2"/> : <GoArrowRight className="ml-2"/>}</button>
                </div>
            </div>
            <div className="flex justify-between mt-24 text-black">
                <div className="flex flex-col w-1/2 p-8">
                    <hr style={{border: "1px solid #212121", width: "100%"}}/>
                    <div className="my-5 flex justify-between">
                        <p className="text-lg ps-2" style={{fontWeight: "550"}}>Electrical & Electronic</p>
                        <IoMdAdd className="my-auto font-bold text-2xl"/>
                    </div>
                    <hr style={{border: "1px solid #212121", width: "100%"}}/>
                </div>

                <div className="flex flex-col w-1/2 p-8">
                    <img src="Frame101.png" alt="" />
                    <img className="mt-12" src="Rectangle10.png" alt="" />
                    <img className="mt-4 transform rotate-180" src="Rectangle10.png" alt="" />
                </div>
            </div>  
        </section>
      </>
    );
  };
  
  export default PublicationsPages;
  