import { LocateFixed, MapPin, BriefcaseBusiness, Mail } from "lucide-react";

const contactItems = [
  {
    icon: LocateFixed,
    label: "LOCATION",
    value: "Bengaluru, Karnataka",
    subValue: "India",
  },
  {
    icon: MapPin,
    label: "FROM",
    value: "Brahmapur, Odisha",
    subValue: "India",
  },
  {
    icon: BriefcaseBusiness,
    label: "EXPERIENCE",
    value: "7+ Years",
  },
  {
    icon: Mail,
    label: "EMAIL",
    value: "raj333sh@gmail.com",
  },
 
];

const FloatingContactBar = () => {
  return (
    <aside
      className="
        absolute
        right-6
        top-80
        z-40
        hidden
        w-[200px]
        -translate-y-1/2
        flex-col
        rounded-xl
        border
        border-white/10
        bg-[#07111d]/80
        p-4
        backdrop-blur-xl
        lg:flex
      "
    >
      {contactItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className={`
              flex
              gap-3
              py-3
              ${
                index !== contactItems.length - 1
                  ? "border-b border-white/10"
                  : ""
              }
            `}
          >
            <Icon
              size={20}
              className="mt-0.5 shrink-0 text-cyan-400"
            />

            <div className="min-w-0">
              <p className="text-[15px] font-medium tracking-[0.18em] text-cyan-400">
                {item.label}
              </p>

              <p className="mt-1 break-words text-[15px] font-medium leading-5 text-white">
                {item.value}
              </p>

              {item.subValue && (
                <p className="text-[15px] text-white/60">
                  {item.subValue}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default FloatingContactBar;