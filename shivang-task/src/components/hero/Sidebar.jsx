import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  Home,
  ListChecks,
  Calendar,
  BadgeDollarSign,
  Calculator,
  Book,
  FileText,
  ShoppingCart,
  Package,
  FlaskConical,
  Settings,
  User,
  Users,
  LayoutDashboard,
  Truck,
  BarChart2,
  File,
  Database,
  CheckSquare,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: <LayoutDashboard size={18} /> , path: "/1" },
  { label: "Tasks", icon: <ListChecks size={18} />  , path: "/1" },
  { label: "Buyer Meeting", icon: <Calendar size={18} /> , path: "/"},
  { label: "Quick Costing", icon: <BadgeDollarSign size={18} />  , path: "/1" },
  { label: "Pre Order Costing", icon: <Calculator size={18} /> , path: "/1" },
  { label: "Style Library", icon: <Book size={18} /> , path: "/1" },
  { label: "Requisitions", icon: <FileText size={18} />, sub: true , path: "/1"  },
  { label: "Buyer Purchase", icon: <ShoppingCart size={18} />, sub: true , path: "/1"  },
  { label: "Inventory", icon: <Package size={18} />, sub: true , path: "/1"  },
  { label: "Sample Development", icon: <FlaskConical size={18} /> , path: "/1" },
  { label: "Production", icon: <CheckSquare size={18} />, sub: true , path: "/1" },
  { label: "Master Admin", icon: <User size={18} />, sub: true , path: "/1" },
  { label: "Users", icon: <Users size={18} />, sub: true , path: "/1" },
  { label: "Suppliers", icon: <User size={18} />, path: "/1"  },
  { label: "Showroom", icon: <Home size={18} />, sub: true , path: "/1" },
  { label: "Shipment", icon: <Truck size={18} />, sub: true , path: "/1" },
  { label: "KPI's", icon: <BarChart2 size={18} />, sub: true , path: "/1" },
  { label: "E-Invoice / E-Way Bill", icon: <File size={18} />, path: "/1"  },
  { label: "Reports", icon: <FileText size={18} /> , path: "/1" },
  { label: "Master Data", icon: <Database size={18} />, sub: true, path: "/1"  },
  { label: "Settings", icon: <Settings size={18} /> , sub: true, path: "/1" },
];

const Sidebar = () => {
  
  const initialActiveIndex = menuItems.findIndex(item => item.label === "Buyer Meeting");

  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);

  return (
    <div className="w-64 bg-white p-4 h-full flex flex-col shadow-sm ">
      <div className="space-y-2 flex-1 overflow-y-auto hide-scrollbar">
        {menuItems.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <NavLink
              key={index}
              to={item.path}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-3 px-3 py-2 rounded-4xl cursor-pointer text-sm fontsans1 w-full text-left transition-colors ${
                isActive
                  ? "bg-purple-100 font-bold fontsans2 text-purple-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span>{item.label}  </span>
               {item.sub && (
                  <svg className="ml-auto h-4 w-4 text-gray-500 group-hover:text-violet-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
