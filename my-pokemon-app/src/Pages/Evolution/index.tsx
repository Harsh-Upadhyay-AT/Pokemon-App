import { useSelector } from "react-redux";
import { Fragment, useEffect } from "react";
import { IRootState, useAppDispatch } from "redux/store";
import { setTotalPageCount } from "Service/ApiHepler";
import Pagination from "Components/Pagination";
import constant from "config/constant/constant";
import { Loader } from "Components/Loader";
import { getAllEvolutionDetailsAction } from "redux/EvolutionSlice/EvolutionAsyncThunk";
import { EncounterAction } from "redux/EncounterSlice/EncounterSlice";

const Evolution = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector(
    (state: IRootState) => state.evolutionStateData
  );
  const { list, id, offset, total, limit } = useSelector(
    (state: IRootState) => state.evolutionStateData
  );
  list.map((item, index) => {
    const dynamicId = item?.url?.split("/evolution-chain/");
    return dynamicId;
  });
  useEffect(() => {
    dispatch(
        getAllEvolutionDetailsAction({
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
        getAllEvolutionDetailsAction({
        id,
        offset,
        limit,
      })
    );
  };

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Fragment>
      {isLoading && list.length === 0 ? (
        <Loader />
      ) : (
        <>
          <div className="list">
            {list.map((item, index) => {
              const backgroundColor = getRandomColor();
              const fontColor = getRandomColor();
              const imageUrl = `https://placehold.co/600x400/${item.background}/${item.fontColor}?text=Pokemon`;
              const itemStyle = {
                background: backgroundColor,
                color: fontColor,
              };

              return (
                <div className="list-item" key={index} style={itemStyle}>
                  <img src={imageUrl} />
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
export default Evolution;
