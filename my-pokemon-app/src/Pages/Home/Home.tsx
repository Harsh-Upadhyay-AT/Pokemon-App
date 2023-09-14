import { useSelector } from "react-redux";
import { IRootState, useAppDispatch } from "../../redux/store"
import { getAllDetailsAction } from "../../redux/PokemonSlice/PokemonAsyncThunk";
import { useEffect } from "react";
import { setTotalPageCount } from "../../Service/ApiHepler";
import { pokemonAction } from "../../redux/PokemonSlice/PokemonSlice";
import { Link } from "react-router-dom";
import constant from "../../config/constant/constant";
import Pagination from "../../Components/Pagination/Pagination";

const Home = () => {
    const dispatch = useAppDispatch();
    const { list, id, page, total, limit } = useSelector(
      (state: IRootState) => state.pokemonStateData
    );
    list.map((item, index) => {
      const dynamicId = item?.url?.split("/pokemon/");
      return dynamicId;
    });
    useEffect(() => {
      dispatch(
        getAllDetailsAction({
          id: 0,
          page,
          limit,
        })
      );
    }, [dispatch, id, limit, page]);
    const totalPage = setTotalPageCount(total, limit);
    const pageChangeHandler = (currentPage: number) => {
      const page = Number(currentPage);
      dispatch(pokemonAction.setCurrentPage(page));
      dispatch(
        getAllDetailsAction({
          id,
          page,
          limit,
        })
      );
    };
    return (
      <>
        <div className="list">
          {list.map((item, index) => {
            const pokemonIndex = item?.url?.split("/pokemon/");
            const imageUrl = `https://img.pokemondb.net/artwork/large/${item.name}.jpg`;
            return (
                <div className="list-item" key={index}>
                <img style={{ width: "300px", height: "auto" }} src={imageUrl} />
                <div>{item.name}</div>
                <div>
                  <Link to={`/pokemon/${pokemonIndex?.[1]?.replace("/", "")}`}>
                    <button>View detail</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <Pagination
            page={page}
            onPageChangeHandler={pageChangeHandler}
            totalPages={
              totalPage > 0
                ? totalPage
                : constant.page.defaultCurrentPaginationNumber
            }
          />
        </div>
      </>
    );
  };

export default Home