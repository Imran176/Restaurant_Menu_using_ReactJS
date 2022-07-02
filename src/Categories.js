import React from 'react';

const Categories = ({ categories, filterProps }) => {
  return (
    <div className='btn-container'>
      {/* <button className='filter-btn' onClick={() => filterProps('all')}>all</button> */}
      {categories.map((category, index) => {
        return (
          <button 
          type='button' 
          className='filter-btn' 
          key={index}
          onClick={()=>filterProps(category)}>
            {category}
          </button>
        );
      })}
    </div >
  );
};

export default Categories;
