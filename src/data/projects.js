import {
  Cpu,
  Factory,
  ShoppingCart,
  Code2,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Grid-Tie Inverter",
    subtitle: "Solar System",
    category: "Mechanical",
    description:
      "Designed and developed a grid-tie inverter system for solar applications.",
    icon: Cpu,
    accent: "cyan",
    image: "/grid-tie-inverter.jpg",
  },

  {
    id: 2,
    title: "Compressed Air",
    subtitle: "Vehicle",
    category: "Diploma",
    description:
      "Built a working compressed air vehicle as part of an academic project.",
    icon: Factory,
    accent: "cyan",
    image: "/compressed-air-vehicle.jpg",
  },

  {
    id: 3,
    title: "Industrial",
    subtitle: "Procurement",
    category: "Professional",
    description:
      "End-to-end procurement activities managed for multiple industrial projects.",
    icon: ShoppingCart,
    accent: "orange",
    image: "/industrial-procurement.jpg",
  },

  {
    id: 4,
    title: "GeM & SAP Ariba",
    subtitle: "Workflows",
    category: "Professional",
    description:
      "Managed tenders, auctions and vendor workflows across procurement platforms.",
    icon: ShoppingCart,
    accent: "orange",
    image: "/gem-sap-ariba.jpg",
  },

  {
    id: 5,
    title: "Portfolio",
    subtitle: "Website",
    category: "Personal",
    description:
      "Built this portfolio using HTML, CSS, JavaScript and React.",
    icon: Code2,
    accent: "cyan",
    image: "/portfolio-website.png",
  },

  {
    id: 6,
    title: "Steel Estimation & Invoice Generator",
    subtitle: "Website",
    category: "Personal",
    description:
      "Built this Estimation using HTML, CSS, JavaScript.",
    icon: Code2,
    accent: "cyan",
    image: "/steel-estimate-cum-invoce-maker.png",
  },
];

export default projects;