import { TiThSmall } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { CiBowlNoodles } from "react-icons/ci";
import { RiRestaurantLine } from "react-icons/ri";
import { FaPizzaSlice } from "react-icons/fa6";
import { PiHamburger } from "react-icons/pi";


const Category = [
    {
        id : 1,
        name : "All",
        icon : <TiThSmall className="text-red-500 w-[60px] h-[60px]"/>
    },
    {
        id : 2,
        name : "breakfast",
        icon : <MdOutlineFreeBreakfast className="text-red-500 w-[60px] h-[60px]"/>
    },
    {
        id : 3,
        name : "soups",
        icon : <MdOutlineSoupKitchen className="text-red-500 w-[60px] h-[60px]"/>
    },
    {
        id : 4,
        name : "pasta",
        icon : <CiBowlNoodles className="text-red-500 w-[60px] h-[60px]"/>
    },
    {
        id : 5,
        name : "main_course",
        icon : <RiRestaurantLine className="text-red-500 w-[60px] h-[60px]"/>
    },
    {
        id : 6,
        name : "pizza",
        icon : <FaPizzaSlice className="text-red-500 w-[60px] h-[60px]"/>
    },
    {
        id : 7,
        name : "burger",
        icon : <PiHamburger className="text-red-500 w-[60px] h-[60px]"/>
    },
]


export default Category;