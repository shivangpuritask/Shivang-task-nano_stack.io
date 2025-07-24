import React from 'react'
import TabFilter from './TabFilter'
import MeetingFilters from './MeetingFilters'

const DashboardPage = () => {
  return (
    <div className='w-11/12 bg-[#f8fafd] inset-shadow-2xl px-5' >

        <div className="flex items-center justify-between p-4 px-1 bg-gray-50">

          <div>
        <h1 className="text-lg fontsans2 text-gray-900">Buyer Meeting List View</h1>
        <div className="text-sm fontsans1  text-gray-500">
          <a href="#" className="text-purple-600 font-medium fontsans2 hover:underline">
            Buyer Meeting
          </a>
          <span> 
            <i class="ri-arrow-right-double-line"></i>
          </span>
          Buyer Meeting List View
        </div>

      </div>

       <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 px-6 py-1 text-white bg-purple-500 hover:bg-purple-600 rounded-md fontsans ">
         <span> <i class="ri-upload-2-fill"></i> </span>
          Export
        </button>
        <button className="flex items-center gap-2 px-6 py-1  text-white bg-black hover:bg-gray-800 rounded-md fontsans ">
          <span  ><i class="ri-add-fill"></i></span>
          Create New Meeting
        </button>
      </div>



      </div>
      <TabFilter />
      <MeetingFilters />

    </div>
  )
}

export default DashboardPage
