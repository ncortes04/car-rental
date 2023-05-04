import React, {useState} from 'react'

const Sidebar = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [price, setPrice] = useState(150);

  const handleSliderChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems({
      ...checkedItems,
      [name]: checked,
    });
  };

  const Types = [
    { name: 'Sport', key: 'Sport', quantity: 20 },
    { name: 'SUV', key: 'SUV', quantity: 20 },
    { name: 'MPV', key: 'MPV', quantity: 20 },
    { name: 'Sedan', key: 'Sedan', quantity: 20 },
    { name: 'Coupe', key: 'HatchBack', quantity: 20 },
  ];
  const Capacity = [
    { name: '2 Person', key: '2 Person', quantity: 20 },
    { name: '4 Person', key: '4 Person', quantity: 20 },
    { name: '6 Person', key: '6 Person', quantity: 20 },
    { name: '8 or More', key: '8 or More', quantity: 20 },
  ]
  return (
    <div className='sidebar-container'>
        <label>TYPE</label>
        <div className='check-list'>
          {Types.map((item) => (
          <label key={item.key} className='check-label'>
            <input
              type="checkbox"
              className='check-box'
              name={item.name}
              checked={checkedItems[item.name]}
              onChange={handleCheckboxChange}
            />
            <p className='check-text'>{item.name} <span>({item.quantity})</span></p>
          </label>
      ))}
        </div>
        <label>CAPACITY</label>
        <div className='check-list'>
        {Capacity.map((item) => (
        <label key={item.key} className='check-label'>
          <input
            type="checkbox"
            className='check-box'
            name={item.name}
            checked={checkedItems[item.name]}
            onChange={handleCheckboxChange}
          />
            <p className='check-text'>{item.name} <span>({item.quantity})</span></p>
        </label>
      ))}
        </div>
        <label>PRICE</label>
        <input
        className='blue-slider'
        type="range"
        min="10"
        max="500"
        value={price}
        onChange={handleSliderChange}
      />
      <p className='price-text'>Max: ${price}</p>
    </div>
  )
}

export default Sidebar