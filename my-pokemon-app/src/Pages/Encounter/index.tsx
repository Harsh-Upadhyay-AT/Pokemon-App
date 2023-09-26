import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { IRootState, useAppDispatch } from "redux/store";
import { getAllDetailsAction } from "redux/PokemonSlice/PokemonAsyncThunk";
import { setTotalPageCount } from "Service/ApiHepler";
import Pagination from "Components/Pagination";
import constant from "config/constant/constant";
import { Loader } from "Components/Loader";
import { getAllBerryDetailsAction } from "redux/BerrySlice/BerryAsyncThunk";
import { BerryAction } from "redux/BerrySlice/BerrySlice";
import { getAllEncounterDetailsAction } from "redux/EncounterSlice/EncounterAsyncThunk";
import { EncounterAction } from "redux/EncounterSlice/EncounterSlice";

const EncounterList = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector(
    (state: IRootState) => state.encounterStateData
  );
  const { list, id, offset, total, limit } = useSelector(
    (state: IRootState) => state.encounterStateData
  );
  list.map((item, index) => {
    console.log(list,"testing")
    const dynamicId = item?.url?.split("/encounter-method/");
    return dynamicId;
  });
  useEffect(() => {
    dispatch(
        getAllEncounterDetailsAction({
        id: 0,
        offset,
        limit,
      })
    );
  }, [dispatch, id, limit, offset]);
  const totalPage = setTotalPageCount(total, limit);
  const pageChangeHandler = (currentPage: number) => {
    const page = Number(currentPage);
    dispatch(EncounterAction.setCurrentPage(page));
    dispatch(
        getAllEncounterDetailsAction({
        id,
        offset,
        limit,
      })
    );
  };
  return (
    <Fragment>
      {isLoading && list.length === 0 ? (
        <Loader />
      ) : (
        <>
          <div className="list">
            {list.map((item, index) => {
              const pokemonIndex = item?.url?.split("/encounter-method/");

              console.log("image",pokemonIndex)
              const imageUrl = `https://img.pokemondb.net/artwork/large/${item.name}.png`;
              return (
                <div className="list-item" key={index}>
                  <img src={imageUrl} />
                  <div>{item.name}</div>
                </div>
              );
            })}
          </div>
          <div>
            <Pagination
              page={offset}
              onPageChangeHandler={pageChangeHandler}
              totalPages={
                totalPage > 0
                  ? totalPage
                  : constant.offset.defaultCurrentPaginationNumber
              }
            />
          </div>
        </>
      )}
    </Fragment>
  );
};
export default EncounterList;
