import HomeHero from "../components/homehero"
import topProducts from "../resources/data/featured_products.json"
import FeaturedProduct from "../components/featuredproduct"

export default function Home()
{

    return (

        <>
            
            <HomeHero></HomeHero>

            <section className="px-[80px] py-[64px] bg-[#EDF8F8]">

                <header className="font-extrabold text-3xl my-5 text-center">Cosmetic Rating</header>

                <div className="font-light w-8/12 mx-auto text-center">
                    We rate our scratch and dent appliances by their cosmetic appearance (How they look). Appliances with lower cosmetic ratings get Deeper Discounts! You pick your level of savings!
                </div>

                <div className="grid grid-cols-3 gap-6 my-12">

                    {topProducts.map((product,index) => (

                        <FeaturedProduct rating={product.rating} name={product.name} damage={product.damage} discount={product.discount} tag={product.tag} image={product.image} tagColor={product.tagColor}/>

                    ))}

                </div>

            </section>

        </>

    )

}