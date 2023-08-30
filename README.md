# React Recursive Dropdown Menu with Checkboxes

This project demonstrates how to create a recursive dropdown menu with checkboxes using React. The menu allows you to select items at different levels of the hierarchy and includes a feature to unselect child items when their parent item is unselected.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.

   ```
   git clone https://github.com/Hashwi/React_Recursive_Dropdown_Menu.git
   ```

2. Navigate to the project directory.

   ```
   cd React_Recursive_Dropdown_Menu
   ```

3. Install the necessary dependencies using npm or yarn.

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

4. Start the development server.

   ```
   npm start
   ```

   or

   ```
   yarn start
   ```

5. Open your browser and go to `http://localhost:3000` to see the recursive dropdown menu in action.

## Usage

The recursive dropdown menu is designed to display hierarchical categories with checkboxes. Each item in the menu can be expanded to reveal its sub-items. You can select individual items by clicking on their checkboxes. When you unselect a parent item, its child items will be unselected as well.

## Folder Structure

The project has the following folder structure:

```
recursive-dropdown-react/
  ├── src/
  │   ├── components/
  │   │   ├── DropdownItems.js
  │   │   ├── DropdownItems.css
  │   │   ├── DropdownMenu.js
  │   ├── response.js
  │   ├── App.js
  │   ├── index.js
  ├── public/
  ├── package.json
  ├── README.md
```

- `components/`: This folder contains the React components used to build the recursive dropdown menu.
- `response.js`: Contains the data for categories and their hierarchy.
- `App.js`: The main application component that renders the `DropdownMenu`.
- `index.js`: Entry point of the application.
- `public/`: Contains the public assets.
- `package.json`: Lists project dependencies and scripts.
- `README.md`: The file you're reading now, providing information about the project.


