import React, { useState } from "react";
import responseData from "../response";
import "./DropdownItems.css";

const DropdownItem = ({ item, selectedItems, onSelect }) => {
  // Check if the item has children
  const hasChildren = responseData.data.categories.some(
    (subItem) => subItem.parent === item.id
  );

  // State to keep track of collapsed categories
  const [collapsedCategories, setCollapsedCategories] = useState([]);

  // State to manage local selected items
  const [localSelectedItems, setLocalSelectedItems] = useState(selectedItems);

  // Function to handle checkbox changes
  const handleCheckboxChange = () => {
    // Determine the new list of selected items
    const newSelectedItems = localSelectedItems.includes(item.id)
      ? localSelectedItems.filter((id) => id !== item.id)
      : [...localSelectedItems, item.id];

    if (!localSelectedItems.includes(item.id)) {
      // Unselect all children when unchecking a parent
      const childrenToUnselect = responseData.data.categories
        .filter((subItem) => subItem.parent === item.id)
        .map((subItem) => subItem.id);
      setLocalSelectedItems(
        newSelectedItems.filter((id) => !childrenToUnselect.includes(id))
      );
    } else {
      setLocalSelectedItems(newSelectedItems);
    }

    // Call the parent onSelect with the updated selected items
    onSelect(newSelectedItems);
  };

  // Function to handle category toggle
  const handleCategoryToggle = (categoryId) => {
    setCollapsedCategories((prevCollapsedCategories) => {
      if (prevCollapsedCategories.includes(categoryId)) {
        // If the category is collapsed, uncollapse it
        return prevCollapsedCategories.filter((id) => id !== categoryId);
      } else {
        // If the category is not collapsed, collapse it
        return [...prevCollapsedCategories, categoryId];
      }
    });
  };

  return (
    <div className="container">
      <div className="category-item">
        <label className="category-label">
          <input
            type="checkbox"
            checked={localSelectedItems.includes(item.id)}
            onChange={() => {
              // Call checkbox change and category toggle functions
              handleCheckboxChange();
              handleCategoryToggle(item.id);
            }}
          />
          <span className="category-name">{item.name}</span>
        </label>
        {hasChildren && collapsedCategories.includes(item.id) && (
          <div className="subcategory-list">
            {/* Render subitems using a recursive DropdownItem */}
            {responseData.data.categories
              .filter((subItem) => subItem.parent === item.id)
              .map((subItem) => (
                <DropdownItem
                  key={subItem.id}
                  item={subItem}
                  selectedItems={localSelectedItems}
                  onSelect={(newSelectedItems) =>
                    setLocalSelectedItems(newSelectedItems)
                  }
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownItem;
