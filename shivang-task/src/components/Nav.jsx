import React from 'react'


const Nav = () => {
  return (

    <header className=" w-full shadow- px-4 py-2 flex  items-center  ">

<div className="w-70 h-10 flex justify-start items-center">
     <div className="  w-20  ">
        <img className=' object-contain ' src="./download.png" alt="Logo"/>
        </div>
</div>

    <div className="  w-full h-10 flex justify-between  items-center  px-4 py-2  " >
  
      <div className=" w-100  flex gap-12  ">

         <button className="text-gray-600">
         <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/menu--v3.png" alt="menu--v3"/>
        </button>

        <div className="w-full h-8  px-4 py-2  border-gray-300 border-1 rounded-md text-sm bg-[#f8fafd]   flex items-center gap-3 " >

         <img width="20" height="20" src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/external-social-social-media-basic-others-anggara-putra-20.png" alt="external-social-social-media-basic-others-anggara-putra-20"/>

        <input
          type="text"
          placeholder="Search anything here..."
          className=' fontsans  outline-none '
           />
        </div>

      </div>

      
      <div className="flex  items-center gap-6">
        
        <div className="relative">
           <i className="ri-chat-4-line  text-[#7a7a7a] text-2xl  "></i>
          <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1 py-0.5 rounded-full">
            10
          </span>
        </div>

        
        <div className="relative  ">
        <i className="ri-notification-line  text-[#7a7a7a] text-2xl  "></i>
          <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs px-1 py-0.5 rounded-3xl ">
            10
          </span>
        </div>

       
        <div className="flex gap-3 ">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Mohd Saleem"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm text-left leading-tight">
            <div className="font-medium text-gray-800">Mohd Saleem</div>
            <div className="text-gray-500">Admin</div>
          </div>

        </div>
      </div>
      </div>
    </header>
 
 )
}

export default Nav