import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getMoveAilmentAction } from 'redux/MoveSlice/MoveAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'

export interface Props {
    id: number
}
const MoveAilments:React.FC<Props> = ({
    id
}) => {

    const dispatch = useAppDispatch()
    const { isLoading, AilmentsList} = useSelector((state: IRootState) => {
        return state.moveStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getMoveAilmentAction({
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
        value: AilmentsList.name
    },
    {
        label: Strings.moves,
        value: AilmentsList.moves.map((item)=>item.name)?.join(" ,")
    },
    {
        label: Strings.names,
        value :AilmentsList.names.map((item)=>item.name)?.join(" ,")
    },
    
]
return (
    <div className='section'>
  <h2>{Strings.moveAilments}</h2>
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
export default MoveAilments
