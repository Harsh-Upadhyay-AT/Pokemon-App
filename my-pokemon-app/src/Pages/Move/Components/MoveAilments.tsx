import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBerryDetailsAction } from 'redux/BerrySlice/BerryAsyncThunk'
import { getContestEffectsAction, getContestTypesAction } from 'redux/ContestSlice/ContestAsyncThunk'
import { getEncounterConditionValueAction, getEncounterMethodAction } from 'redux/EncounterSlice/EncounterAsyncThunk'
import { getMoveAilment } from 'redux/MoveSlice/MoveAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'
import { idText } from 'typescript'
export interface Props {
    id: number
}
const MoveAilments:React.FC<Props> = ({
    id
}) => {

    const dispatch = useAppDispatch()
    const { isLoading, ListAilments} = useSelector((state: IRootState) => {
        return state.moveStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getMoveAilment({
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
        value: ListAilments.name
    },
    {
        label: "order",
        value: ListAilments.moves.map((item)=>item.name)?.join(" ,")
    },
    {
        label: "names",
        value :ListAilments.names.map((item)=>item.name)?.join(" ,")
    },
    
]
  return (
    <div className='section'>
        <h2>{Strings.encounterConditionValue}</h2>
      {data.map((item) => <DataContent
      value = {item.value} 
      label = {item.label}/>)}
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
export default MoveAilments
