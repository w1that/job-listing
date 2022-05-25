import { useState } from "react";
import "./App.css";
import TagWrapper from "./components/TagWrapper";
import JobList from "./components/JobList";

function App() {
  const [tags, setTags] = useState([]);

  function handleShowTags() {
    if (tags.length > 0) {
      return <TagWrapper tags={tags} setTags={setTags} />;
    }
  }

  return (
    <div className="container">
      <div className="headerImage" />
      <div className="innerContainer">
        {handleShowTags()}
        <JobList setTags={setTags} tags={tags} />
      </div>
    </div>
  );
}

export default App;
