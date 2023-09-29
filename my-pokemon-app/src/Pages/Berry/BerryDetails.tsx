import { useSelector } from "react-redux";
import { useEffect } from "react";
import { IRootState, useAppDispatch } from "redux/store";
import { getBerryDetailsAction } from "redux/BerrySlice/BerryAsyncThunk";
import { useParams } from "react-router-dom";
import { BerryAction } from "redux/BerrySlice/BerrySlice";
import { Strings } from "Resource/Strings";


const BerriesDetailsList = () => {
  const dispatch = useAppDispatch();
  const { listId } = useParams()
  const { offset, limit } = useSelector(
    (state: IRootState) => state.berryStateData
  );
  const { imagePokemonList } = useSelector((state:IRootState)=> state.berryStateData)

  useEffect(() => {
    const id = Number(listId)
    dispatch(getBerryDetailsAction({
        id,
    })
    )
    return () => {
      dispatch(BerryAction.resetSpecificPerson())
    }
  }, [dispatch, listId, limit, offset]);

  return (
    <>
    <div>
      <li>
        <span>{imagePokemonList.name}</span>
      </li>
      <li style={{ marginBottom: "10px" }}>
              <span className="title-text">name:</span> {imagePokemonList?.name}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">max:</span> {imagePokemonList?.firmness}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">damage:</span> {imagePokemonList?.max_harvest}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">test:</span> {imagePokemonList?.natural_gift_power}
            </li>
            <li style={{ marginBottom: "10px" }}>
                <span className="title-text">item:</span> {imagePokemonList?.smoothness}
            </li>
            <li style={{ marginBottom: "10px" }}>
              <span className="title-text">testOne:</span> {imagePokemonList?.soil_dryness}
            </li>

    </div>
    </>
  );
};

export default BerriesDetailsList;
