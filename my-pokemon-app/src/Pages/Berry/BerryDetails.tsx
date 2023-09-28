import { useSelector } from "react-redux";
import { Fragment, useEffect, useState } from "react";
import { IRootState, useAppDispatch } from "redux/store";
import { Loader } from "Components/Loader";
import { getBerryDetailsAction } from "redux/BerrySlice/BerryAsyncThunk";

import { Link } from "react-router-dom";
import { Strings } from "Resource/Strings";

const BerriesDetailsList = () => {
  const dispatch = useAppDispatch();
  const [berryDetails, setBerryDetails] = useState<string>("");
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
    dispatch(getBerryDetailsAction({
        id,
    }))

  }, [dispatch, id, limit, offset]);

  return (
    <Fragment>
      {isLoading && list.length === 0 ? (
        <Loader />
      ) : (
        <>
          <div className="list">
            {list.map((item, index) => {
              const capitalizedText = item?.name?.toUpperCase();
              const berryIndex = item?.url?.split("/berry/");
              return (
                <div className="list-item" key={index} >
                  <div>
                <Link to={`/berry/${berryIndex?.[1]?.replace("/", "")}`}>
                <button>{Strings.viewDetail}</button>
            
                </Link>
              </div>
                </div>
              );
            })}
          </div>
          <div>
          </div>
        </>
      )}
    </Fragment>
  );
};

export default BerriesDetailsList;
