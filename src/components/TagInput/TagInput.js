import React, { useState } from "react";

const TagInput = ({ addTag, index }) => {
  const [newTag, setNewTag] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTag(newTag, index);
        setNewTag("");
      }}>
      <input
        className="tag_input"
        placeholder="Add a tag"
        type="text"
        value={newTag}
        onChange={(e) => {
          setNewTag(e.target.value);
        }}
      />
      <input className="tag_submit" type="submit" />
    </form>
  );
};

export default TagInput;
