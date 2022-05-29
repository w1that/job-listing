import { useEffect, useState } from "react";
import "./App.css";
import TagWrapper from "./components/TagWrapper";
import JobList from "./components/JobList";
import Pagination from "./components/Pagination";

function App() {
  const [tags, setTags] = useState([]);
  const [selectedPage, setSelectedPage] = useState(0);

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
        <JobList selectedPage={selectedPage} setTags={setTags} tags={tags} />
      </div>

      <Pagination
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
