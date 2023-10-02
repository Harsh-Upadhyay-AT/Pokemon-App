import React from 'react'
import { useParams } from 'react-router-dom'
// import MoveAilments from './Components/MoveAilments';

// import { MoveAilments } from './Components/MoveAilments';
// import MoveAilments from './Components/MoveAilments';

const MoveDetails = () => {
  const {listId} = useParams();
  return (
    <div>
{/* <MoveAilments id = {parseInt(listId as string)}/> */}
    </div>
  )
}

export default MoveDetails
