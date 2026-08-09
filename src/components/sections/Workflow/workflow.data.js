import {
  ClipboardList,
  UsersRound,
  FileText,
  Scale,
  Handshake,
  FilePenLine,
  Send,
  CircleCheck,
} from "lucide-react";

const workflowSteps = [
  {
    id: 1,
    title: "Requirement",
    subtitle: "Analysis",
    icon: ClipboardList,
    color: "#28D7FF",
  },
  {
    id: 2,
    title: "Vendor",
    subtitle: "Search",
    icon: UsersRound,
    color: "#28D7FF",
  },
  {
    id: 3,
    title: "Quotation",
    subtitle: "Collection",
    icon: FileText,
    color: "#D28A42",
  },
  {
    id: 4,
    title: "Comparison &",
    subtitle: "Evaluation",
    icon: Scale,
    color: "#28D7FF",
  },
  {
    id: 5,
    title: "Negotiation",
    subtitle: "",
    icon: Handshake,
    color: "#D28A42",
  },
  {
    id: 6,
    title: "Technical Bid",
    subtitle: "Preparation",
    icon: FilePenLine,
    color: "#28D7FF",
  },
  {
    id: 7,
    title: "Submission &",
    subtitle: "Follow-up",
    icon: Send,
    color: "#28D7FF",
  },
  {
    id: 8,
    title: "Execution &",
    subtitle: "Delivery",
    icon: CircleCheck,
    color: "#34D399",
  },
];

export default workflowSteps;