import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBerryDetailsAction } from 'redux/BerrySlice/BerryAsyncThunk'
import { getContestEffectsAction, getContestTypesAction } from 'redux/ContestSlice/ContestAsyncThunk'
import { getEncounterConditionAction, getEncounterMethodAction } from 'redux/EncounterSlice/EncounterAsyncThunk'
import { getEvolutionTriggersAction } from 'redux/EvolutionSlice/EvolutionAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'
import { idText } from 'typescript'
export interface Props {
    id: number
}
const EvolutionTrigger:React.FC<Props> = ({
    id
}) => {

    const dispatch = useAppDispatch()
    const { isLoading, EvolutionTriggerList} = useSelector((state: IRootState) => {
        return state.evolutionStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getEvolutionTriggersAction({
        id,
    })
    )
}
return () => {
  //Reset the current berryList state when components unmouted
    console.log("components unmounted")
}
    },[id])

if(isLoading) {
    return <div>Loadig...</div>
}

const data = [
    {
        label: Strings.name,
        value: EvolutionTriggerList.name
    },
    {
        label: "values",
        value : EvolutionTriggerList.names.map((item)=>item.name)?.join(" ,")
    },
    {
        label: "names",
        value :EvolutionTriggerList.pokemon_species.map((item)=>item.name)?.join(" ,")
    },

]
  return (
    <div className='section'>
        <h2>{Strings.encounterCondition}</h2>
      {data.map((item) => <DataContent value = {item.value} label = {item.label}/>)}
    </div>
  )
}

const DataContent:FC<any> = ({
 label,
 value
}) => {
    return <div>
        <label>{label}</label>
        <span>: {value}</span>
    </div>
}
export default EvolutionTrigger
