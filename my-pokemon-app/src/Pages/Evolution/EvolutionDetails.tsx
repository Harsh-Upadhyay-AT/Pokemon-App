import React from 'react'
import { useParams } from 'react-router-dom'
import EvolutionChain from './Components/EvolutionTrigger';
import EvolutionTrigger from './Components/EvolutionTrigger';

const EvolutionDetails = () => {
  const {listId} = useParams();
  return (
    <div>

{/* <EvolutionChain id = {parseInt(listId as string)}/> */}
<EvolutionTrigger id = {parseInt(listId as string)}/>

    </div>
  )
}

export default EvolutionDetails
