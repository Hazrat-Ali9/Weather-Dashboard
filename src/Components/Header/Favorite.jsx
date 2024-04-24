/* eslint-disable react/prop-types */

import heart from '../../assets/heart.svg'
import heartRed from '../../assets/heart-red.svg'
import { useContext } from 'react';
import { FavoriteContext } from '../../Context/WeatherContext';

const Favorite = ({isOpenModal,setIsOpenModal}) => {
  const {favorite} = useContext(FavoriteContext);
  return (
    <div 
    className="p-2 border bg-gray-500 cursor-pointer flex gap-2 items-center rounded-md transition-all relative"
    onClick={()=>setIsOpenModal(!isOpenModal)}
    >
      <img src={favorite.length>0 ? heartRed : heart} alt="favoriteList" />
      <span
      className='text-white'
      >Favorite Locations</span>
      {
        favorite.length>0 && <span className='text-white bg-red-600 rounded-full px-2 absolute bottom-7 right-0'>{favorite.length}</span>
      }
    </div>
  );
};

export default Favorite;
