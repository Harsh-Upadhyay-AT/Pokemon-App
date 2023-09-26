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

const BerriesList = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector(
    (state: IRootState) => state.berryStateData
  );
  const { list, id, offset, total, limit } = useSelector(
    (state: IRootState) => state.berryStateData
  );
  list.map((item, index) => {
    const dynamicId = item?.url?.split("/berry/");
    return dynamicId;
  });
  useEffect(() => {
    dispatch(
        getAllBerryDetailsAction({
        id: 0,
        offset,
        limit,
      })
    );
  }, [dispatch, id, limit, offset]);
  const totalPage = setTotalPageCount(total, limit);
  const pageChangeHandler = (currentPage: number) => {
    const page = Number(currentPage);
    dispatch(BerryAction.setCurrentPage(page));
    dispatch(
      getAllBerryDetailsAction({
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
              const pokemonIndex = item?.url?.split("/berry/");
              const imageUrl = `http://pokeapi.co/media/sprites/pokemon/${pokemonIndex}.png`;
              console.log("image",imageUrl)
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
export default BerriesList;
