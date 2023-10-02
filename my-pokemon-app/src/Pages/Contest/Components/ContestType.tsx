import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBerryDetailsAction } from 'redux/BerrySlice/BerryAsyncThunk'
import { getContestTypesAction } from 'redux/ContestSlice/ContestAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'
import { idText } from 'typescript'
export interface Props {
    id: number
}
const ContestType:React.FC<Props> = ({
    id
}) => {

    const dispatch = useAppDispatch()
    const { isLoading, contestsType} = useSelector((state: IRootState) => {
        return state.contestStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getContestTypesAction({
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
        value: contestsType.name
    },
    {
        label: "berryFlavor",
        value :contestsType.berry_flavor.name
    },

]
  return (
    <div className='section'>
        <h2>{Strings.generalDetails}</h2>
      {data?.map((item) => <DataContent value = {item.value} label = {item.label}/>)}
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
export default ContestType
