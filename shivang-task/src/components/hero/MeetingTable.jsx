
import React, { useState } from "react";


const meetings = [
 {
    id: 1,
    dateTime: "01 May, 2025 at 2pm",
    status: "Completed",
    type: "Online",
    buyerName: "Mango Private Limited",
    brand: "Mango",
    department: "Design",
    title: "Costing Discussion with Zara",
    meetingDate: "01 May, 2025",
    participants: { name: "Mohd Saleem", count: 2 },
  },
  {
    id: 2,
    dateTime: "02 May, 2025 at 3pm",
    status: "Upcoming",
    type: "Offline",
    buyerName: "Cherry Innovations",
    brand: "Cherry",
    department: "Development",
    title: "UI/UX Review",
    meetingDate: "02 May, 2025",
    participants: { name: "Mohd Saleem", count: 2 },
  },
  {
    id: 3,
    dateTime: "03 May, 2025 at 10am",
    status: "Follow-up",
    type: "Offline",
    buyerName: "Pineapple Inc.",
    brand: "Pineapple",
    department: "Marketing",
    title: "Campaign Strategy",
    meetingDate: "03 May, 2025",
    participants: { name: "Mohd Saleem", count: 2 },
  },
  {
    id: 4,
    dateTime: "04 May, 2025 at 1pm",
    status: "Re-scheduled",
    type: "Offline",
    buyerName: "Peach Corp.",
    brand: "Peach",
    department: "Finance",
    title: "Budget Review",
    meetingDate: "04 May, 2025",
    participants: { name: "Mohd Saleem", count: 2 },
  },
  {
    id: 5,
    dateTime: "05 May, 2025 at 4pm",
    status: "Overdue",
    type: "Online",
    buyerName: "Banana Solutions",
    brand: "Banana",
    department: "Product",
    title: "Feature Prioritization",
    meetingDate: "05 May, 2025",
    participants: { name: "Mohd Saleem", count: 2 },
  },
  {
    id: 6,
    dateTime: "06 May, 2025 at 11am",
    status: "In Progress",
    type: "Online",
    buyerName: "Coconut Group",
    brand: "Coconut",
    department: "Support",
    title: "Customer Feedback",
    meetingDate: "06 May, 2025",
    participants: { name: "Mohd Saleem", count: 2 },
  },
  {
    id: 7,
    dateTime: "07 May, 2025 at 2pm",
    status: "Ongoing",
    type: "Online",
    buyerName: "Lemon Technologies",
    brand: "Lemon",
    department: "Sales",
    title: "Sales Strategy",
    meetingDate: "07 May, 2025",
    participants: { name: "Mohd Saleem", count: 2 },
  },
  {
    id: 8,
    dateTime: "08 May, 2025 at 9am",
    status: "Completed",
    type: "Offline",
    buyerName: "Grapefruit LLC",
    brand: "Grapefruit",
    department: "Research",
    title: "Market Analysis",
    meetingDate: "08 May, 2025",
    participants: { name: "Mohd Saleem", count: 2 },
  },
  {
    id: 9,
    dateTime: "09 May, 2025 at 3pm",
    status: "Draft",
    type: "Offline",
    buyerName: "Kiwi Systems",
    brand: "Kiwi",
    department: "HR",
    title: "Employee Engagement",
    meetingDate: "09 May, 2025",
    participants: { name: "Mohd Saleem", count: 2 },
  },
  {
    id: 10,
    dateTime: "10 May, 2025 at 5pm",
    status: "Archived",
    type: "Offline",
    buyerName: "Orange Enterprises",
    brand: "Orange",
    department: "Legal",
    title: "Contract Review",
    meetingDate: "10 May, 2025",
    participants: { name: "Mohd Saleem", count: 2 },
  },
]

const MeetingTable = () => {

    
const statusColors = {
  "Completed": "bg-green-500",
  "Upcoming": "bg-yellow-500",
  "Follow-up": "bg-blue-500",
  "Re-scheduled": "bg-purple-600",
  "Overdue": "bg-red-600",
  "In Progress": "bg-orange-500",
  "Ongoing": "bg-black",
  "Draft": "bg-gray-500",
  "Archived": "bg-red-400"
};


const typeColors = {
  "Online": "bg-green-100 text-green-700",
  "Offline": "bg-gray-200 text-gray-700"
};


 const [selected, setSelected] = useState([]);

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };



  return (
    
    <div className='  w-[full] bg-[#ffffff] pb-20 overflow-x-scroll overflow-hidden  fontsans1  ' >
<table className=" w-[100vw]  text-sm  text-left">
     <thead className="bg-[#f5f5f5] border-2 border-gray-200   text-gray-600 font-semibold">
         <tr className=" h-[100%] " >
             <th className="p-4">
              <input type="checkbox" />
            </th>
              <th className="p-4 ">Date & Time
            </th>
            <th className="p-4">Status</th>
            <th className="p-4">Type </th>
            <th className="p-4">Buyer Name </th>
            <th className="p-4">Brand </th>
            <th className="p-4">Dept. </th>
            <th className="p-4">Title</th>
            <th className="p-4">Meeting Date</th>
            <th className="p-4">Participants</th>
            <th className="p-4  h-[100%]  sticky right-0  flex items-center justify-center bg-[#f5f5f5]  shadow12  ">Action</th>
        
         </tr>
     </thead >

     <tbody className="bg-[#ffffff] border-1 h-10 border-gray-200  text-gray-600 font-semibold" >
 {meetings.map((meeting) => {
            const isSelected = selected.includes(meeting.id);
            return (
                  <tr
                key={meeting.id}
                className={("border-t", isSelected ? "bg-purple-200" : "")}
              >
                 <td className="p-2 px-4">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleSelect(meeting.id)}
                    className="accent-purple-500"
                  />
                </td>
                <td className="p-2 px-4 text-gray-500">{meeting.dateTime}</td>
                <td className="p-2 px-4">
                  <span
                    className={`text-white px-2 py-1 rounded-sm text-xs font-medium ${
                      statusColors[meeting.status] || "bg-gray-400"
                    }`}
                  >
                    {meeting.status}
                    {meeting.status === "Follow-up" && (
                      <>
                        <span>({meeting.followUpCount})</span>
                      </>
                    )}
                  </span>
                </td>
                <td className="p-2 px-4">
                  <span
                    className={`px-2 py-1 rounded-sm text-xs outline-1 font-medium ${
                      typeColors[meeting.type]
                    }`}
                  >
                    {meeting.type}
                  </span>
                </td>
                <td className="p-2 px-4 text-black-900 underline cursor-pointer">
                  {meeting.buyerName}
                </td>
                <td className="p-2 px-4 text-black-900 underline cursor-pointer">{meeting.brand}</td>
                <td className="p-2 px-4 text-black-900 underline cursor-pointer">{meeting.department}</td>
                <td className="p-2 px-4 text-black-900 underline cursor-pointer">
                  {meeting.title}
                </td>
                <td className="p-2 px-4 text-gray-500">{meeting.meetingDate}</td>
                <td className="p-2 px-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-green-600 text-white text-xs flex items-center justify-center">
                      M
                    </div>
                    <div>
                      <div className="text-sm font-medium">{meeting.participants.name} +{meeting.participants.count}</div>
                      <div className="text-xs text-gray-500">Buyer, Sales</div>
                    </div>
                  </div>
                </td>
                <td  className="p-4 px-7 sticky  flex items-center justify-center right-0 cursor-pointer bg-[#ffffff]  shadow12   ">
                  <i class="ri-more-2-fill"></i>
                </td>
                
              </tr>

            )})}
     </tbody>

</table>

    </div>
  )
}

export default MeetingTable ;