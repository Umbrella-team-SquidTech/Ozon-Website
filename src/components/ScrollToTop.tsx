import { Button } from "./ui/button"
import { CircleArrowUp } from 'lucide-react';

interface props{
    scrollToTop:()=>void;
}

const ScrollToTop = ({scrollToTop}:props) => {
  return (
    <Button
        onClick={scrollToTop}
    className="  rounded-full bg-gradient-to-tr from-[#11998E]  to-[#38EF7D]  text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-sm transition-all hover:shadow-md hover:shadow-gray-900/20 active:opacity-[0.85] fixed bottom-4 right-4"
    >
        <CircleArrowUp size={24} />
    </Button>
  )
}

export default ScrollToTop