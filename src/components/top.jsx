import logo from "../resources/images/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Top()
{

    return (

        <section className="bg-[#071822] lg:flex lg:gap-[10px] items-center px-[120px] py-[20px]">

            <article className="lg:w-4/12">

                <ul className="m-0 p-0">

                    <li className="">
                        <a href="" className="">
                            <img src={logo}/>
                        </a>
                    </li>

                </ul>

            </article>

            <article className="lg:w-4/12">

                <form method="post" action="" disabled className="lg:w-full">

                    <div className="">
                        <div className="relative rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                            </div>
                            <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Search for appliance"
                            />
                        </div>
                    </div>

                </form>
                
            </article>

            <article className="lg:w-4/12">

                <ul className="m-0 p-0 lg:flex lg:items-center lg:justify-end lg:gap-1">

                    <li className="inline-block text-white bg-white bg-opacity-[0.08] rounded-md px-[12px] py-[16px]">
                        <a href="" className="">
                            <FontAwesomeIcon icon={faShoppingCart}/>  <span>Cart</span>
                        </a>
                    </li>

                    <li className="inline-block text-white bg-white bg-opacity-[0.08] rounded-md px-[12px] py-[16px]">
                        <a href="" className="">
                            <FontAwesomeIcon icon={faUserCircle}/>  <span>My Account</span>
                        </a>
                    </li>

                    <li className="inline-block text-white bg-white bg-opacity-[0.08] rounded-md px-[12px] py-[16px]">
                        <a href="" className="">
                            <FontAwesomeIcon icon={faBars}/>  <span>Menu</span>
                        </a>
                    </li>

                </ul>
                
            </article>
            
        </section>

    )

}