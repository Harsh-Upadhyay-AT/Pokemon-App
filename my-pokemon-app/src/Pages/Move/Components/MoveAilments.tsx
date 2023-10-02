// import { Strings } from 'Resource/Strings'
// import React, { FC, useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getContestEffectsAction, getContestTypesAction } from 'redux/ContestSlice/ContestAsyncThunk'
// import { getEncounterConditionAction, getEncounterMethodAction } from 'redux/EncounterSlice/EncounterAsyncThunk'
// import { getMoveAction } from 'redux/MoveSlice/MoveAsyncThunk'
// // import { getMoveAilment } from 'redux/MoveSlice/MoveAsyncThunk'
// import { IRootState, useAppDispatch } from 'redux/store'
// import { idText } from 'typescript'
// export interface Props {
//     id: number
// }
// const Move:React.FC<Props> = ({
//     id
// }) => {

//     const dispatch = useAppDispatch()
//     const { isLoading, list} = useSelector((state: IRootState) => {
//         return state.moveStateData
//     })

//     useEffect(() => {
// if(id) {
//     dispatch(getMoveAction({
//         id,
//     })
//     )
// }
// return () => {
//     console.log("components unmounted")
// }
//     },[id])

// if(isLoading) {
//     return <div>Loadig...</div>
// }

// const data = [
//     {
//         label: Strings.name,
//         value: list.
//     },
//     {
//         label: "values",
//         value : Ailments.moves.map((item)=>item.name)?.join(", ")
//     },
//     {
//         label: "names",
//         value :Ailments.names.map((item)=>item.name)?.join(" ,")
//     },

// ]
//   return (
//     <div className='section'>
//         <h2>{Strings.encounterCondition}</h2>
//       {data.map((item) => <DataContent value = {item.value} label = {item.label}/>)}
//     </div>
//   )
// }

// const DataContent:FC<any> = ({
//  label,
//  value
// }) => {
//     return <div>
//         <label>{label}</label>
//         <span>: {value}</span>
//     </div>
// }
// export default Move

<div>
    test
</div>