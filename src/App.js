import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import menu from './data';

const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(menu)
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterProps={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
