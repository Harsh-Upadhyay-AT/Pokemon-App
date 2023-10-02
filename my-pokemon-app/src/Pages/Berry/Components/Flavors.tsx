import { Strings } from 'Resource/Strings'
import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getBerryFlavorsAction } from 'redux/BerrySlice/BerryAsyncThunk'
import { IRootState, useAppDispatch } from 'redux/store'
import { Props } from './Berries'
import Details from 'Components/Details/Details'
import { FlavorList } from 'redux/BerrySlice/BerryType'

const Flavors:React.FC<Props> = ({
    id
}) => {
    const dispatch = useAppDispatch()
    const { isFlalvorLoading, flavors} = useSelector((state: IRootState) => {
        return state.berryStateData
    })

    useEffect(() => {
if(id) {
    dispatch(getBerryFlavorsAction({
        id,
    })
    )
}
    },[id])

if(isFlalvorLoading) {
    return <div>Loadig...</div>
}




  
const data = [
    {
        label: Strings.name,
        value: flavors.name
    },
    {
      label: "Berries",
      value: flavors.berries.map((item) => item.berry.name)?.join(" ,")
    }
]
  return (
    <div className='section'>
        <h2>Flavors details</h2>
      {data.map((item) => <Details value = {item.value} label = {item.label}/>)}
    </div>
  )
}



export default Flavors
