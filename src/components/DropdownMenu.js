import React, { useState } from "react";
import responseData from "../response";
import DropdownItem from "./DropdownItems";

const DropdownMenu = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to handle item selection
  const onSelect = (itemId) => {
    if (selectedItems.includes(itemId)) {
      // If the item is already selected, remove it from the list
      setSelectedItems(selectedItems.filter((item) => item !== itemId));
    } else {
      // If the item is not selected, add it to the list
      setSelectedItems([...selectedItems, itemId]);
    }
  };

  // Filter root-level items (items with no parent) from the data
  const rootItems = responseData.data.categories.filter(
    (item) => item.parent === "0"
  );

  return (
    <div className="container">
      <h1>React Recursive Dropdown Menu</h1>
      <div>
        {/* Map through root items and render DropdownItem components */}
        {rootItems.map((item) => (
          <DropdownItem
            key={item.id}
            item={item}
            selectedItems={selectedItems}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
