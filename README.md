# Todo List Application

This is a simple React-based Todo List application where users can add, edit, and delete tasks. The application allows users to label their tasks and filter them based on labels. The tasks and their labels are stored in `localStorage`, so they persist between page reloads.

## Features

- **Add Todo Item:** Users can add new tasks by providing a title and description.
- **Edit Todo Item:** Users can edit the title and description of an existing task.
- **Delete Todo Item:** Users can delete tasks that are no longer needed.
- **Add Labels:** Users can add labels to tasks for easy categorization.
- **Filter by Labels:** Users can search and filter tasks based on labels.
- **Local Storage Persistence:** Tasks and labels are saved in `localStorage`, so they persist even after a page refresh.

## Components
### 1. TodoContent

This is the main component that handles the core functionality of the Todo List. It manages the state of the todo list, handles adding, editing, and deleting tasks, and also manages labels.

#### State Variables

- **todoList:** Stores the list of todo items.
- **title, description:** Store the input values for a new or edited todo item.
- **label:** Stores the label input for a task.
- **labelStatus, editStatus:** Boolean values to toggle between adding labels and editing tasks.
- **editId:** Stores the ID of the task being edited.
- **filterTodoList:** Stores the filtered todo list based on the search input.
- **searchLabel:** Stores the search input value.
- **filterStatus:** Boolean value to toggle between showing the full list and the filtered list.
### Functions
- **useEffect:** Fetches the todo list from `localStorage` when the component mounts.
- **searchTodoItem:** Filters the todo list based on the label.
- **addTodoItem:** Adds a new todo item to the list.
- **editTodoItem:** Edits an existing todo item.
- **addTodoLabel:** Adds a label to a todo item.
- **deleteTodoItem:** Deletes a todo item.
- **deleteTodoLabel:** Deletes a label from a todo item.
### 2. Header
This component renders the header of the application and includes the search bar for filtering tasks by labels.

#### Props
- **searchLabel:** The current value of the search input.
- **setSearchLabel:** Function to update the search input.
- **searchTodoItem:** Function to trigger the search/filter of tasks.
### 3. TodoCard
This component is used to display individual todo items. It shows the title, description, and labels, and provides options to edit or delete the task or its labels.

## Installation and Usage
#### 1. Clone the repository:

```bash
git clone https://github.com/yourusername/todo-list-app.git
cd todo-list-app
```
#### 2. Install dependencies:

```bash
npm install
```
#### 3. Run the application:

```bash
npm start
```
#### 4. Open the application in your browser at http://localhost:3000.

### Technologies Used
- **React:** For building the user interface.
- **React Toastify:** For displaying notifications.
- **CSS:** For styling the components.
- **LocalStorage:** For persisting todo tasks and labels.
