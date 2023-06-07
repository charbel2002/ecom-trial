import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import huge from "../resources/images/huge.png"
import great from "../resources/images/great.png"
import massive from "../resources/images/massive.png"
import { faS } from "@fortawesome/free-solid-svg-icons"

export default function FeaturedProduct({rating,name,damage,discount,tag,image,tagColor})
{

    const starIcons = Array.from({ length: rating }, (_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className="text-orange-400"/>
      ));

    return (

        <div className="bg-white border border-gray-300 rounded-[16px] px-12 py-10 relative overflow-hidden">

            <div className={`p-2 rounded-lg ${tagColor} text-white absolute -top-2`}>
                <span className="">{tag}</span>
            </div>

            <div className="my-5 text-center">
                <span className="text-xl font-extrabold">Cosmetic Rating : </span> 
                <span className="">{rating} Star{rating > 1 ? 's' : ''}</span> 
            </div>

            <div className="text-center my-3">

                {starIcons}

            </div>

            <div className="text-center font-bold text-blue-400">
                {name}
            </div>

            <div className="">
                <img src={image} alt=""/>
            </div>

            <div className="flex item justify-between my-5">

                <span className="text-sm font-light">Cosmetic Damage</span>

                <span className="text-sm font-light">{damage}</span>

            </div>

            <div className="flex item justify-between my-5">

                <span className="text-sm font-light">Discount</span>

                <span className="text-sm font-light flex items-center justify-between">

                    {discount == 'Massive' ? <img src={massive} alt=""/> : ''}

                    {discount == 'Huge' ? <img src={huge} alt=""/> : ''}

                    {discount == 'Great' ? <img src={great} alt=""/> : ''} 
                    
                    <span className="">{discount}</span>

                </span>

            </div>
            
        </div>

    )

}