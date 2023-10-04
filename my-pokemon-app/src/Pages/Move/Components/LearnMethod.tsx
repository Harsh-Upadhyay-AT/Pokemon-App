import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getMoveLearnMethodsAction } from 'redux/MoveSlice/MoveAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'

export interface Props {
    id: number
}
const LearnMethod:React.FC<Props> = ({
    id
}) => {

    const dispatch = useAppDispatch()
    const { isLoading, MoveLearnMethods} = useSelector((state: IRootState) => {
        return state.moveStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getMoveLearnMethodsAction({
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
        value: MoveLearnMethods.name
    },
    {
        label: Strings.names,
        value :MoveLearnMethods.names.map((item)=>item.name)?.join(" ,")
    },
    {
        label: Strings.versionGroups,
        value :MoveLearnMethods.version_groups.map((item)=>item.name)?.join(" ,")
    },
    {
        label: Strings.description,
        value :MoveLearnMethods.descriptions.map((item)=>item.description)?.join(" ,")
    },
    
]
return (
    <div className='section'>
  <h2>{Strings.learnMethod}</h2>
  {data.map((item, index) => (
    <DataContent key={index} value={item.value} label={item.label} />
  ))}
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
export default LearnMethod
