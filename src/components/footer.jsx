import logo from "../resources/images/logo.png"
import logo1 from "../resources/images/logo1.png"
import logo2 from "../resources/images/logo2.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { faDove } from "@fortawesome/free-solid-svg-icons"
import facebookIcon from "../resources/images/facebook-f.svg"
import instaIcon from "../resources/images/instagram.svg"
import twitterIcon from "../resources/images/twitter.svg"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"
import location from "../resources/images/localization.png"

export default function Footer()
{

    const ul_1 = [
        'Shop now','Shop on sale','Live inventory','Virtual showroom','Financing',
        'Discount appliance in stock','Austin appliance liquidation','Used appliance',
        'Appliance repair','Helpful appliance tips'
    ]

    const ul_2 = [
        'Our brands','Delivery','Appliance measuring guide','Do i have electric or gas?','Our products',
        'FAQ','Contact','Terms',
        'Refund policy','Privacy policy'
    ]

    return (

        <footer className="bg-[#071822] px-[80px] py-[100px]">

            <section className="flex gap-3">

                <article className="w-3/12">

                    <header className="text-lg font-extrabold text-white capitalize mb-4">Our Companies</header>

                    <div className="">

                        <div className="my-6">

                            <img src={logo} alt=""/>

                            <p className="my-6 text-gray-300 text-xs">Shop Austin's #1 Local Discount Appliance Outlet</p>
                            
                        </div>

                        <div className="my-6">

                            <img src={logo1} alt=""/>

                            <p className="my-6 text-gray-300 text-xs">Shop Discount Appliance Repair Parts</p>
                            
                        </div>

                        <div className="my-6">

                            <img src={logo2} alt=""/>

                            <p className="my-6 text-gray-300 text-xs">Wholesale Supply Distributor of Bulk Scratch and Dent Appliances to Appliance Vendor's Across the Country</p>
                            
                        </div>

                    </div>

                </article>

                <article className="w-6/12">

                    <header className="text-lg font-extrabold text-white capitalize mb-4">Our Companies</header>

                    <div className="grid grid-cols-2">

                        <ul className="">

                            {ul_1.map((ul,index) => (
                                <li key={index} className="text-gray-300 text-sm font-light mb-4">
                                    <a href="" className="">
                                        {ul}
                                    </a>
                                </li>
                            ))}
                            
                        </ul>

                        <ul className="">

                            {ul_2.map((ul,index) => (
                                <li key={index} className="text-gray-300 text-sm font-light mb-4">
                                    <a href="" className="">
                                        {ul}
                                    </a>
                                </li>
                            ))}
                            
                        </ul>

                    </div>
                    
                    
                </article>

                <article className="w-3/12">

                    <div className="">

                        <header className="text-lg font-extrabold text-white capitalize mb-4">Get Latest Discount Offers</header>

                        <div className="">

                            <form>

                            <div>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                    type="text"
                                    name="account-number"
                                    id="account-number"
                                    className="block w-full rounded-md border-0 py-1.5 bg-white bg-opacity-[0.08] px-4 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-none"
                                    placeholder="Email Address"
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <FontAwesomeIcon icon={faPaperPlane} className="text-white"/>
                                    </div>
                                </div>
                            </div>

                            </form>

                        </div>

                    </div>

                    <div className="mt-5">

                        <header className="text-lg font-extrabold text-white capitalize mb-4">Follow Us</header>

                        <div className="">

                            <ul className="">

                                <li className="inline-block mr-4">
                                    <a className="inline-flex w-10 h-10 rounded-full items-center justify-center bg-white bg-opacity-[0.08]">
                                        <img src={facebookIcon} alt="" className="w-4 h-4"/>
                                    </a>
                                </li>

                                <li className="inline-block mr-4">
                                    <a className="inline-flex w-10 h-10 rounded-full items-center justify-center bg-white bg-opacity-[0.08]">
                                        <img src={instaIcon} alt="" className="w-4 h-4"/>
                                    </a>
                                </li>

                                <li className="inline-block mr-4">
                                    <a className="inline-flex w-10 h-10 rounded-full items-center justify-center bg-white bg-opacity-[0.08]">
                                        <img src={twitterIcon} alt="" className="w-4 h-4"/>
                                    </a>
                                </li>

                            </ul>

                        </div>

                        <div className="mt-5">

                            <header className="text-lg font-extrabold text-white capitalize mb-4">Contact Us</header>

                            <div className="">

                                <ul className="">

                                    <li className="block mr-4">
                                        <a className="text-gray-300 text-sm">
                                            <span className="inline-flex rounded-full items-center justify-center bg-white bg-opacity-[0.08] text-white w-6 h-6 p-4">
                                                <FontAwesomeIcon icon={faPhone} className=""/>
                                            </span>
                                            <span className="pl-2">(512) 992-2714</span>
                                        </a>
                                    </li>

                                    <li className="block mr-4">
                                        <a className="text-gray-300 text-sm">
                                            <span className="inline-flex rounded-full items-center justify-center bg-white bg-opacity-[0.08] text-white w-6 h-6 p-4">
                                                <FontAwesomeIcon icon={faMapMarkerAlt} className=""/>
                                            </span>

                                            <span className="pl-2">123 N Loop Blvd E, Austin, TX 78751</span>
                                        </a>
                                    </li>

                                </ul>

                            </div>

                        </div>

                        <div className="mt-5 mb-5">

                            <img src={location} alt="" className="block rounded-md"/>

                        </div>

                    </div>
                    
                </article>

            </section>

            <section className="border-x-0 border-b-0 border-t border-t-gray-500 text-gray-300 pt-[50px] text-xs">

                © 2022 Neu Appliances

            </section>

        </footer>

    )

}