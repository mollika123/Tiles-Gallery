import React from 'react';
import Marquee from 'react-fast-marquee';
 
const BreakingNews = () => {
  return (
    <div className=' flex py-3 px-3 bg-gradient-to-r from-gray-200 to-gray-900 text-white'>
<button className='bg-gray-800 text-white animate-pulse text-white px-4 py-3'>New Arrivals:</button>

      <Marquee>
New Arrivals: Ceramic Blue Tile | 
Weekly Feature: Modern Geometric Patterns | 
Trending Now: Marble Effect Luxury Tiles | 
Hot Deal: Up to 30% Off Selected Tiles | 
Best Seller: Glossy White Floor Tile | 
Outdoor Special: Anti-Slip Patio Tiles | 
Limited Edition: Vintage Pattern Collection | 
New Collection: Wood Look Natural Finish | 
Customer Favorite: Matte Grey Minimal Tiles | 
Premium Picks: Italian Porcelain Series | 
Upgrade Your Space with Modern Designs | 
Join the Community & Share Your Style | 
Fast Delivery Available Nationwide | 
Shop Now & Transform Your Home
      </Marquee>
    </div>
  );
};

export default BreakingNews;