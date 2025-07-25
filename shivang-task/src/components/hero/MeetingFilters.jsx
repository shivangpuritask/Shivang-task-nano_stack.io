import React from 'react'

const MeetingFilters = () => {

    const filters = [
  "Buyer Name",
  "Brand",
  "Dept",
  "Meeting Type",
  "Participants",
  "Meeting Date",
  "Status",
];

  return (
 <div className="flex flex-wrap gap-2 items-center border border-gray-200 rounded-t-md p-3 bg-white shadow-sm mt-2 fontsans1 ">
     
      <div className="flex items-center px-3 py-2 gap-2 border border-gray-300 rounded-md bg-white text-xs text-gray-700 w-fit">
        <img width="20" height="20" src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/external-social-social-media-basic-others-anggara-putra-20.png" alt="external-social-social-media-basic-others-anggara-putra-20"/>

        <input
          type="text"
          placeholder="Search anything here..."
          className="outline-none bg-transparent w-full placeholder-gray-400 fontsans "
        />
      </div>

       {filters.map((filter) => (
        <div
          key={filter}
          className="px-3 py-2 border border-gray-300 rounded-md text-xs text-gray-500 bg-white cursor-pointer w-fit"
        >
          <div className="flex justify-between items-center">
            {filter}
            <svg
              className="w-3 h-3 text-gray-500 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      ))}

      </div>
  )
}

export default MeetingFilters