import React, { useState } from 'react'
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
const Home = () => {
  const [lists, setalists] = useState([]);

  return (
    <div>
      <DragDropContext>
<Droppable droppble/>
      </DragDropContext>
    </div>
  )
}

export default Home