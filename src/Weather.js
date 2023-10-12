import React, { useState, useEffect } from "react";

const Temp = () => {
  const [city, setCity] = useState(null);
  // const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  const API_KEY = "3535e5af7558da98ee4ac7c20e7f30b5";



  const fetchWeatherForKarachi = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=25.090640&lon=67.235113&appid=${API_KEY}&units=metric` )
      .then((response) => response.json())
      .then((data) => {
        setCity(data);
      })
      .catch((error) => {
        console.log(error);
        setError("An error occurred while fetching data.");
      });
  };

  useEffect(() => {
    fetchWeatherForKarachi();
    const time = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);
  return (
    <>
   <div class="container flex flex-row items-center justify-center h-screen">
	<div
		class="card mb-5  min-w-sm max-w-sm border border-gray-100 bg-gray-50   transition-shadow test  shadow-lg hover:shadow-shadow-xl w-full bg-green-600 text-purple-50 rounded-md">
      
      <h2 class="text-md mb-2 px-4 pt-4">
			<div class="flex justify-between">
				<div class="badge relative top-0">
					<span class="mt-2 py-1 h-12px text-md font-semibold w-12px  rounded right-1 bottom-1 px-4">Laghouat</span></div>
          <span className="text-lg font-bold ">{`${currentTime.getHours()}:${currentTime.getMinutes()}`}</span>
			</div>
		</h2>
    
   
      <br></br>
      {/* <div className="flex justify-center items-center p-8">
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Enter city name"
        className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500 "
      />
      <button
        onClick={searchUser}
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Search
      </button>
      </div> */}
    
      {error ? (
  <p className="errorMsg">{error}</p>
) : city ? (
  
  <div className="info">
      <div class="flex justify-center items-center p-1 bg- rounded-lg hover:scale-105 cursor-pointer ">
        <div class="text-md font-bold flex flex-col text-gray-900"><span className="uppercase text-white">Today</span>
           <span class="font-normal text-gray-700 text-sm"></span></div>
        <div class="w-32 h-32 flex items-center justify-center  ">
            <svg width="95" height="72" viewBox="0 0 95 72" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
            <path d="M56.2837 47.6226C67.476 47.6226 76.5492 40.7461 76.5492 32.2635C76.5492 23.7809 67.476 16.9044 56.2837 16.9044C45.0914 16.9044 36.0182 23.7809 36.0182 32.2635C36.0182 40.7461 45.0914 47.6226 56.2837 47.6226Z" fill="#F8C442"/>
            <path d="M76.5503 32.2632C76.5503 40.7466 67.4778 47.6226 56.2845 47.6226C55.1445 47.6226 54.0263 47.5513 52.937 47.4128C62.538 46.2046 69.8554 39.8826 69.8554 32.2632C69.8554 24.6439 62.538 18.3219 52.937 17.1137C54.0263 16.9752 55.1445 16.9039 56.2845 16.9039C67.4778 16.9039 76.5503 23.78 76.5503 32.2632Z" fill="#F4A240"/>
            <path d="M44.5033 37.8822C45.3831 37.8822 46.0962 37.3417 46.0962 36.6749C46.0962 36.0082 45.3831 35.4677 44.5033 35.4677C43.6236 35.4677 42.9104 36.0082 42.9104 36.6749C42.9104 37.3417 43.6236 37.8822 44.5033 37.8822Z" fill="#F4A240"/>
            <path d="M48.9565 41.2572C49.8362 41.2572 50.5494 40.7167 50.5494 40.0499C50.5494 39.3832 49.8362 38.8427 48.9565 38.8427C48.0767 38.8427 47.3635 39.3832 47.3635 40.0499C47.3635 40.7167 48.0767 41.2572 48.9565 41.2572Z" fill="#F4A240"/>
            <path d="M62.3752 25.0909C63.255 25.0909 63.9682 24.5504 63.9682 23.8837C63.9682 23.2169 63.255 22.6764 62.3752 22.6764C61.4955 22.6764 60.7823 23.2169 60.7823 23.8837C60.7823 24.5504 61.4955 25.0909 62.3752 25.0909Z" fill="#F4A240"/>
            <path d="M56.6435 11.5939C55.8748 11.5939 55.2519 11.1218 55.2519 10.5392V3.35363C55.2519 2.77102 55.8748 2.29894 56.6435 2.29894C57.4122 2.29894 58.0351 2.77102 58.0351 3.35363V10.5392C58.0351 11.1218 57.4122 11.5939 56.6435 11.5939Z" fill="#F4A240"/>
            <path d="M42.903 14.3847C42.422 14.3847 41.9543 14.1956 41.6966 13.8572L36.9562 7.6344C36.5719 7.12998 36.8 6.48493 37.4655 6.19369C38.1309 5.90274 38.9824 6.07515 39.3664 6.57971L44.1068 12.8025C44.4911 13.3069 44.263 13.952 43.5975 14.2432C43.3783 14.339 43.139 14.3847 42.903 14.3847Z" fill="#F4A240"/>
            <path d="M32.8406 22.0088C32.6045 22.0088 32.3652 21.9633 32.1461 21.8674L23.9354 18.2748C23.2698 17.9836 23.0418 17.3385 23.4261 16.8341C23.8102 16.3296 24.6611 16.157 25.327 16.4481L33.5377 20.0408C34.2032 20.332 34.4313 20.9771 34.047 21.4815C33.7893 21.8198 33.3215 22.0088 32.8406 22.0088Z" fill="#F4A240"/>
            <path d="M88.6548 46.4316C88.4188 46.4316 88.1793 46.3861 87.9603 46.2902L79.7497 42.6973C79.0841 42.4061 78.8561 41.7611 79.2404 41.2566C79.6244 40.7519 80.4759 40.5795 81.1413 40.8706L89.3519 44.4635C90.0175 44.7547 90.2455 45.3997 89.8613 45.9042C89.6035 46.2426 89.1358 46.4316 88.6548 46.4316Z" fill="#F4A240"/>
            <path d="M29.1597 32.4238H19.679C18.9102 32.4238 18.2874 31.9518 18.2874 31.3691C18.2874 30.7865 18.9102 30.3145 19.679 30.3145H29.1599C29.9286 30.3145 30.5515 30.7865 30.5515 31.3691C30.5515 31.9518 29.9284 32.4238 29.1597 32.4238Z" fill="#F4A240"/>
            <path d="M93.6084 32.4238H84.1275C83.3588 32.4238 82.7359 31.9518 82.7359 31.3691C82.7359 30.7865 83.3588 30.3145 84.1275 30.3145H93.6084C94.3771 30.3145 95 30.7865 95 31.3691C95 31.9518 94.3771 32.4238 93.6084 32.4238Z" fill="#F4A240"/>
            <path d="M80.4466 22.0088C79.9657 22.0088 79.4979 21.8197 79.2402 21.4814C78.8559 20.9769 79.084 20.3319 79.7495 20.0406L87.9602 16.448C88.6255 16.157 89.477 16.3294 89.8611 16.834C90.2453 17.3384 90.0173 17.9834 89.3518 18.2747L81.1411 21.8674C80.9222 21.9633 80.6828 22.0088 80.4466 22.0088Z" fill="#F4A240"/>
            <path d="M70.3844 14.3847C70.1484 14.3847 69.909 14.3391 69.6899 14.2432C69.0243 13.952 68.7963 13.3069 69.1806 12.8025L73.9209 6.57972C74.305 6.07516 75.1559 5.90261 75.8218 6.1937C76.4874 6.48494 76.7154 7.12999 76.3312 7.63441L71.5908 13.8572C71.3331 14.1956 70.8653 14.3847 70.3844 14.3847Z" fill="#F4A240"/>
            <path d="M72.4467 46.6399C69.3986 46.5948 66.5502 47.2297 64.1466 48.3572C63.6846 48.5739 63.0801 48.3752 62.9877 47.9694C60.9998 39.2347 50.9559 32.59 38.8632 32.59C27.5872 32.59 18.0929 38.3681 15.2501 46.2303C15.1635 46.4699 14.8798 46.6385 14.5523 46.6492C6.4062 46.914 -0.0807194 52.0323 0.000735889 58.2858C0.0833044 64.6325 7.03001 69.7011 15.4047 69.7011H72.1424C80.6179 69.7011 87.4748 64.4491 87.3562 58.005C87.2423 51.819 80.6077 46.7609 72.4467 46.6399Z" fill="#E2E2E2"/>
            <path d="M87.3536 57.8798C87.4779 61.7158 85.1291 65.1414 81.4304 67.3042C81.8681 66.2293 82.103 65.0885 82.103 63.9049C82.103 57.5351 75.2906 52.3732 66.8876 52.3732C63.9477 52.3732 61.2031 53.005 58.8771 54.0991C58.4218 54.3133 57.8239 54.1039 57.7328 53.7037C55.7449 44.969 45.7003 38.3252 33.6078 38.3252C26.9387 38.3252 20.8919 40.3466 16.477 43.627C20.282 37.1255 28.8741 32.59 38.8632 32.59C50.9559 32.59 60.9992 39.2353 62.9883 47.9692C63.0807 48.3751 63.6852 48.5738 64.1472 48.3571C66.5491 47.2301 69.3962 46.5958 72.4428 46.6402C80.5422 46.7583 87.1549 51.7419 87.3536 57.8798Z" fill="#CCCCCC"/>
            <path d="M11.8294 61.6254C12.7091 61.6254 13.4223 61.0849 13.4223 60.4181C13.4223 59.7513 12.7091 59.2108 11.8294 59.2108C10.9496 59.2108 10.2365 59.7513 10.2365 60.4181C10.2365 61.0849 10.9496 61.6254 11.8294 61.6254Z" fill="#CCCCCC"/>
            <path d="M16.9996 65.1354C17.8794 65.1354 18.5926 64.5949 18.5926 63.9281C18.5926 63.2614 17.8794 62.7208 16.9996 62.7208C16.1199 62.7208 15.4067 63.2614 15.4067 63.9281C15.4067 64.5949 16.1199 65.1354 16.9996 65.1354Z" fill="#CCCCCC"/>
            <path d="M35.2983 42.9911C36.1781 42.9911 36.8912 42.4506 36.8912 41.7838C36.8912 41.1171 36.1781 40.5766 35.2983 40.5766C34.4186 40.5766 33.7054 41.1171 33.7054 41.7838C33.7054 42.4506 34.4186 42.9911 35.2983 42.9911Z" fill="#CCCCCC"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="99" height="87" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </div>
        </div>
        
    
    
   
   
   
    <div class="text-md pt-4 pb-4 px-4">
			<div class="flex justify-between items-center">
				<div class="space-y-2">
					<span class="flex space-x-2 items-center"><svg height="20" width="20" viewBox="0 0 32 32" class="fill-current"><path d="M13,30a5.0057,5.0057,0,0,1-5-5h2a3,3,0,1,0,3-3H4V20h9a5,5,0,0,1,0,10Z"></path><path d="M25 25a5.0057 5.0057 0 01-5-5h2a3 3 0 103-3H2V15H25a5 5 0 010 10zM21 12H6V10H21a3 3 0 10-3-3H16a5 5 0 115 5z"></path></svg> <span> <h1 className="temp font-bold">Pressure {`${city.main.pressure}°C`}</h1></span></span>
          <span class="flex space-x-2 items-center"><svg height="20" width="20" viewBox="0 0 32 32" class="fill-current"><path d="M16,24V22a3.2965,3.2965,0,0,0,3-3h2A5.2668,5.2668,0,0,1,16,24Z"></path><path d="M16,28a9.0114,9.0114,0,0,1-9-9,9.9843,9.9843,0,0,1,1.4941-4.9554L15.1528,3.4367a1.04,1.04,0,0,1,1.6944,0l6.6289,10.5564A10.0633,10.0633,0,0,1,25,19,9.0114,9.0114,0,0,1,16,28ZM16,5.8483l-5.7817,9.2079A7.9771,7.9771,0,0,0,9,19a7,7,0,0,0,14,0,8.0615,8.0615,0,0,0-1.248-3.9953Z"></path></svg> <span> <h1 className="temp font-bold" >Humudity {`${city.main.humidity}%`}</h1></span></span>
          <span class="flex space-x-2 items-center"><svg height="20" width="20" viewBox="0 0 32 32" class="fill-current"><path d="M13,30a5.0057,5.0057,0,0,1-5-5h2a3,3,0,1,0,3-3H4V20h9a5,5,0,0,1,0,10Z"></path><path d="M25 25a5.0057 5.0057 0 01-5-5h2a3 3 0 103-3H5 0 115 5z"></path></svg> <span> <h1 className="temp font-bold">Feels Like {`${city.main.feels_like}°C`}</h1></span></span>
          <div class="flex items-center space-x-2">
  <svg height="30" width="20" viewBox="0 0 32 32" class="fill-current">
    <image href="https://png.pngtree.com/png-clipart/20230813/original/pngtree-realistic-sun-icon-for-weather-design-on-white-background-picture-image_7917496.png" width="20" height="20" />
  </svg>
  <span>
    <h1 className="temp font-bold">Temperature Minimum {`${city.main.temp_max}°C`}</h1>
  </span>
</div>

          <div class="flex items-center space-x-2">
  <svg height="30" width="20" viewBox="0 0 32 32" class="fill-current">
    <image href="https://png.pngtree.com/png-clipart/20230813/original/pngtree-realistic-sun-icon-for-weather-design-on-white-background-picture-image_7917496.png" width="20" height="20" />
  </svg>
  <span>
    <h1 className="temp font-bold">Temperature Maximum {`${city.main.temp_max}°C`}</h1>
  </span>
</div>

				</div>
  
        <div>
					<h1 class="text-3xl font-bold">  {`${city.main.temp}`}° </h1>
				</div>
        </div>
        </div>
   
  </div>
) : (
  <div className="flex justify-center font-bold"><p className="errorMsg">Loading</p></div>
)}
	
				

</div>
</div>

    </>
  );
};

export default Temp;