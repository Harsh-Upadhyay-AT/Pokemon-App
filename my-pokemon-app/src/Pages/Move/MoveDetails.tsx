import React from 'react'
import { useParams } from 'react-router-dom'
import MoveAilments from './Components/MoveAilments';
import MoveTarget from './Components/MoveTarget';


const MoveDetails = () => {
  const {listId} = useParams();
  return (
    <div>
<MoveAilments id = {parseInt(listId as string)}/>
<MoveTarget id = {parseInt(listId as string)}/>

    </div>
  )
}

export default MoveDetails
