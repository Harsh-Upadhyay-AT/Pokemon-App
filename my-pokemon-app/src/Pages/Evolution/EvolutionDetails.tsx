import React from 'react'
import { useParams } from 'react-router-dom'
import EvolutionTrigger from './Components/EvolutionTrigger';

const EvolutionDetails = () => {
  const {listId} = useParams();
  return (
    <div>

<EvolutionTrigger id = {parseInt(listId as string)}/>

    </div>
  )
}

export default EvolutionDetails
