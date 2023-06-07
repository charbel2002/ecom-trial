import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faHeadset } from "@fortawesome/free-solid-svg-icons"

export default function Nav()
{

    return (

        <nav className="bg-[#071822] bg-opacity-90 lg:flex lg:gap-[10px] items-center px-[120px] py-[16px]">

            <div className="lg:w-9/12">

                <ul className="p-0 m-0 lg:flex lg:items-center lg:gap-10">

                    <li className="">
                        <a className="text-white bg-opacity-70 font-light flex items-center text-sm">
                            <span className="pr-3 inline-block">Deals</span> <FontAwesomeIcon icon={faAngleDown} className="text-gray-300"/>
                        </a>

                        <div className=""></div>

                    </li>

                    <li className="">
                        <a href="" className="text-white bg-opacity-70 font-light text-sm">
                            Shop Now
                        </a>
                    </li>

                    <li className="">
                        <a href="" className="text-white bg-opacity-70 font-light text-sm">
                        <span className="pr-3 inline-block">Products</span> <FontAwesomeIcon icon={faAngleDown} className="text-gray-300"/>
                        </a>
                        <div className=""></div>
                    </li>

                    <li className="">
                        <a href="" className="text-white bg-opacity-70 font-light text-sm">
                            Financing
                        </a>
                    </li>

                    <li className="">
                        <a href="" className="text-white bg-opacity-70 font-light text-sm">
                            Testimonials
                        </a>
                    </li>

                    <li className="">
                        <a href="" className="text-white bg-opacity-70 font-light text-sm">
                            Pricing
                        </a>
                    </li>

                </ul>

            </div>

            <div className="lg:3/12">

                <ul className="p-0 m-0 lg:flex lg:items-center lg:gap-10">

                    <li className="">
                        <a href="" className="text-[#F8D357] bg-opacity-70 font-light text-sm">
                            <FontAwesomeIcon icon={faPhone} className="text-gray-300 pr-3"/>
                            <span className="inline-block">(512) 992-2714</span>
                        </a>
                    </li>

                    <li className="">
                        <a href="" className="text-white bg-opacity-70 font-light text-sm">
                            <FontAwesomeIcon icon={faHeadset} className="text-gray-300 pr-3"/>
                            <span className="">Need Help?</span>
                        </a>
                    </li>

                </ul>

            </div>
            
        </nav>

    )

}