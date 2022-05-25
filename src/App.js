import { useState } from 'react';
import './App.css';
import TagWrapper from './components/TagWrapper';

function App() {

  const [tags, setTags] = useState(["Frontend", "CSS","JavaScript"]);

  function handleShowTags(){
    if(tags.length>0){
      return <TagWrapper tags={tags} setTags={setTags} />
    }
  }

  return <div className="container">
    <div className='headerImage' />
    <div className='innerContainer'>
    {handleShowTags()}
    </div>


  </div>;
}

export default App;
