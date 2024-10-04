import React, { useEffect, useState } from 'react';
import logo from '../../Assets/imgs/logo (2).png';
import image from '../../Assets/imgs/userImage.png';
import { useDispatch } from 'react-redux';
import { getAuth, signOut, updateProfile } from 'firebase/auth';
import { logout } from '../../Redux/Auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';

function BrowseHeader() {
  const [userSetting, setUserSetting] = useState(false);
  const [browseSetting , setBrowseSetting] = useState(false)
  const [isNewName, setIsNewName] = useState(false);
  const [newName, setNewName] = useState('');
  const [displayName, setDisplayName] = useState(localStorage.getItem('userName') || ''); // Separate display name state
  const [scrollPosition, setScrollPosition] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = async () => {
    const currentUser = auth.currentUser;
    if (currentUser && newName) {
      try {
        await updateProfile(currentUser, { displayName: newName });
        localStorage.setItem('userName', newName);
        setDisplayName(newName); 
        setIsNewName(false); 
        setNewName(''); 
      } catch (error) {
        console.error("Error updating profile: ", error);
      }
    }
  };


  const handleScroll = () => {
    const position = window.scrollY; // Use window.scrollX for horizontal scroll
    setScrollPosition(position);
    // Perform operations based on scroll position
    console.log("Current Scroll Position:", position);
  };

  // Attach event listener on mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setUserSetting(true);
  };

  const handleMouseLeave = () => {
    setUserSetting(false);
  };
  const handleMouseEnterBrowse=()=>{
    setBrowseSetting(true);

  }
  const handleMouseLeaveBrowse =()=>{
    setBrowseSetting(false);

  }

  const handleSignOut = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      dispatch(logout());
      navigate('/login');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const handleProfileName = () => {
    setIsNewName(!isNewName);
  };

  return (
    <div className={`flex justify-between items-center px-4 py-2 sticky z-[999] top-0  transition-colors duration-300 ease-linear ${scrollPosition > 100 ? "bg-black" : "bg-transparent"} `}>
      {/* Left side: Logo and Navigation */}
      <div className="flex items-center">
        <img src={logo} className="h-8" alt="logo" />
        
        <div className="ml-4 relative">
          {/* Menu items for larger screens */}
          <ul className="hidden mdls:flex gap-4 ">
            <li  className="cursor-pointer text-white text-[10px] xl:text-[16px]  flex items-center">
              Browse
              <i className="fas fa-caret-down ml-1 mdls:hidden"></i>
            </li>
            <li className="text-white text-[10px] xl:text-[16px] cursor-pointer">Home</li>
            <li className="text-white text-[10px] xl:text-[16px] cursor-pointer">TV Shows</li>
            <li className="text-white text-[10px] xl:text-[16px] cursor-pointer">Movies</li>
            <li className="text-white text-[10px] xl:text-[16px] cursor-pointer">New & Popular</li>
            <li className="text-white text-[10px] xl:text-[16px] cursor-pointer">My List</li>
            <li className="text-white text-[10px] xl:text-[16px] cursor-pointer">Browse by Languages</li>
          </ul>

          {/* Dropdown menu for mobile */}
          <div className="mdls:hidden">
            <li  className="cursor-pointer text-white text-sm flex items-center"
             onMouseEnter={handleMouseEnterBrowse} 
             onMouseLeave={handleMouseLeaveBrowse} 
            >
              Browse
              <i className="fas fa-caret-down ml-1"></i>
            </li>
            {browseSetting && (
              <div className="absolute top-8 -left-24  bg-black bg-opacity-80 p-2  w-64   text-center   rounded-md shadow-lg z-10" 
              onMouseEnter={handleMouseEnterBrowse} 
              onMouseLeave={handleMouseLeaveBrowse} >
                <ul className="flex flex-col gap-2 -mt-7 pt-10">
                  <li className="text-white text-[14px] hover:text-red-600">Home</li>
                  <li className="text-white text-[14px] hover:text-red-600">TV Shows</li>
                  <li className="text-white text-[14px] hover:text-red-600">Movies</li>
                  <li className="text-white text-[14px] hover:text-red-600">New & Popular</li>
                  <li className="text-white text-[14px] hover:text-red-600">My List</li>
                  <li className="text-white text-[14px] hover:text-red-600">Browse by Languages</li>
                </ul>
              </div>
            ) }
          </div>
        </div>
      </div>

      {/* Right side: User Image */}
      <div>
        <img
          src={image}
          className="h-8 w-8 rounded-sm"
          alt="user"
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave} 
        />

        {userSetting && (
          <div 
            className='bg-black absolute h-32 p-2 text-sm right-6 text-white'
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            <p className='cursor-pointer font-bold capitalize text-center mb-4 text-red-500'>
              {displayName}
            </p>
            <p className='cursor-pointer' onClick={handleProfileName}>Change Profile Name</p>
            {isNewName && (
              <div className='flex flex-col'>
                <input
                  type="text"
                  value={newName}
                  onChange={event => setNewName(event.target.value)}
                  className='bg-transparent border outline-none rounded-md text-white mt-2 mb-1 p-2 border-gray-500 pl-2'
                  placeholder="Enter new display name"
                />
                <button onClick={handleChange} className=' bg-red-500 text-white rounded px-2 mb-2 py-1'>
                  Change
                </button>
              </div>
            )}
            <p className='cursor-pointer text-center text-red-500' onClick={handleSignOut} >Sign out of Netflix</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BrowseHeader;
