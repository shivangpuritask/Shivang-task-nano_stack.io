import React from 'react'

import { useState } from "react";
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
  CheckSquare
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { label: "Tasks", icon: <ListChecks size={18} /> },
  { label: "Buyer Meeting", icon: <Calendar size={18} />, active: true },
  { label: "Quick Costing", icon: <BadgeDollarSign size={18} /> },
  { label: "Pre Order Costing", icon: <Calculator size={18} /> },
  { label: "Style Library", icon: <Book size={18} /> },
  { label: "Requisitions", icon: <FileText size={18} />, sub: true },
  { label: "Buyer Purchase", icon: <ShoppingCart size={18} />, sub: true },
  { label: "Inventory", icon: <Package size={18} />, sub: true },
  { label: "Sample Development", icon: <FlaskConical size={18} /> },
  { label: "Production", icon: <CheckSquare size={18} />, sub: true },
  { label: "Master Admin", icon: <User size={18} />, sub: true },
  { label: "Users", icon: <Users size={18} />, sub: true },
  { label: "Suppliers", icon: <User size={18} /> },
  { label: "Showroom", icon: <Home size={18} />, sub: true },
  { label: "Shipment", icon: <Truck size={18} />, sub: true },
  { label: "KPI's", icon: <BarChart2 size={18} />, sub: true },
  { label: "E-Invoice / E-Way Bill", icon: <File size={18} /> },
  { label: "Reports", icon: <FileText size={18} /> },
  { label: "Master Data", icon: <Database size={18} />, sub: true },
  { label: "Settings", icon: <Settings size={18} /> },
];

const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-screen p-4 shadow-sm border-r">
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-3 px-3 py-2 rounded-4xl cursor-pointer text-sm fontsans1 ${
              item.active
                ? "bg-purple-100 font-bold fontsans2 text-purple-600"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

// const Sidebar = () => {
//   return (
//     <div>Sidebar</div>
//   )
// }

// export default Sidebar