import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronDown className="text-sky-400" size={36} />
    </div>
  );
};

export default ScrollIndicator;