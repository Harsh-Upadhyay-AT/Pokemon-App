import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getContestEffectsAction } from 'redux/ContestSlice/ContestAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'

export interface Props {
    id: number
}
const ContestEffects:React.FC<Props> = ({
    id
}) => {

    const dispatch = useAppDispatch()
    const { isLoading, ContestEffectList} = useSelector((state: IRootState) => {
        return state.contestStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getContestEffectsAction({
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
        label: Strings.appeal,
        value: ContestEffectList.appeal
    },
    {
        label: Strings.jam,
        value :ContestEffectList.jam
    },
    {
        label: Strings.effectEntries,
        value :ContestEffectList.effect_entries.map((item)=>item.effect)?.join(" , ")
    },
    {
        label: Strings.flavorTextEntries,
        value :ContestEffectList.flavor_text_entries.map((item)=>item.flavor_text)?.join(" , ")
    },

]
  return (
    <div className='section'>
        <h2>{Strings.contestEffects}</h2>
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
export default ContestEffects
