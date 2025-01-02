import Image from "next/image"
export default function TopSide(){
    return(
        <>
        <div className="max-md:grid max-ss:grid  mt-4 ml-4">
            <div className="w-1/3 h-[340px] ml-[340px] max-ss:w-full max-md:w-full ">
                <Image src={"/PIZZA.jpeg"} alt="" width={450} height={250} />
        
             </div>
             <div className="max-md:w-[390px] max-2xl:w-1/2 ">
                <h2 className="text-[28px] font-bold ml-6">PIZZA SHOP </h2> 
                <h2 className="text-[20px] ml-6 ">Pizza is one of the world s most beloved dishes, and for good reason. This savory treat combines the perfect blend of flavors, textures, and aromas, making it a staple in many cuisines. From classic Neapolitan-style pizzas with fresh tomatoes and mozzarella, to gourmet pies loaded with unique toppings, theres a pizza out there for everyone.</h2>
        {/* new */}
             </div>
        
        </div>
        </>
    )
}