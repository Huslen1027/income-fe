import Homee from "@/components/icons/Homee";
import Gift from "@/components/icons/categoryicon/Gift";
import Food from "@/components/icons/categoryicon/Food";
import ShoppingIcon from "@/components/icons/categoryicon/ShoppingIcon";
import TaxiIcon from "@/components/icons/categoryicon/TaxiIcon";
import HomeeIcon from "@/components/icons/categoryicon/HomeeICon";
import Drinkicon from "@/components/icons/categoryicon/Drinkicon";
import PlusIcon from "@/components/icons/categoryicon/PlusIcon";
export const AddCategory = [
  {
    hello: (
      <div className="w-[300px] flex gap-2 mt-3 justify-ceter items-center">
        <PlusIcon />
        Add Category
      </div>
    ),
  },
  {
    icon: <HomeeIcon />,
    text: "Home",
  },
  {
    icon: <Gift />,
    text: "Gift",
  },
  {
    icon: <Food />,
    text: "Food",
  },
  {
    icon: <Drinkicon />,
    text: "Home",
  },
  {
    icon: <TaxiIcon />,
    text: "Taxi",
  },
  {
    icon: <ShoppingIcon />,
    text: "Shopping",
  },
];
