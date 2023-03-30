import React from 'react';
import myPic from "./image.jpg";
   const Photo =()=>{
   return (
   <div>
   <img src={myPic} className="my-profile" alt='myImage' />
   </div>
   );
   };
   export default Photo