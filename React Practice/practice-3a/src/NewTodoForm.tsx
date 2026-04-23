import { useState } from "react";

const NewTodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();

    if (newItem === "") return;
    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form className="new-item-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="item">Todo Item</label>
        <input
          type="text"
          id="item"
          placeholder="Enter new item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add Item</button>
    </form>
  );
};

export default NewTodoForm;
