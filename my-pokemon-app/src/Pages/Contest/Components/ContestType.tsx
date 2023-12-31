import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getContestTypesAction } from 'redux/ContestSlice/ContestAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'

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
    },[id])

if(isLoading) {
    return <div>{Strings.loading}</div>
}

const data = [
    {
        label: Strings.name,
        value: contestsType.name
    },
    {
        label: Strings.berryFlavor,
        value :contestsType.berry_flavor.name
    },

]
  return (
    <div className='section'>
        <h2>{Strings.contestType}</h2>
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
