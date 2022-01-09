import React from "react";
const TagsForm = (props) => {
  const [tags, setTags] = React.useState([]);

  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };

  return (
    <div className="tags-input">
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>
            <span>{tag}</span>
            <i className="material-icons" onClick={() => removeTags(index)}>
              {/* close */}
            </i>
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyUp={(event) => addTags(event)}
        placeholder="Add a tag"
      />
    </div>
  );
};
export default TagsForm;
