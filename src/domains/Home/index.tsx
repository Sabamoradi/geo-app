import { useState } from "react";
import Input from "../../components/Input";
import { localTexts } from "../../locals/text";
import { HomeBox, HomeContainer, SearchWrapper } from "./StyledHome";
import Button from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatch";
import { getIpThunk } from "../../store/general/thunks";
import { isIPAddress } from "../../utils/validation";
import useThrottling from "../../hooks/useThrottling";
import { selectLoadingSearchIp, selectSearchIp } from "../../store/general/slice";
import HomeResult from "../../components/HomeResult";

const Home = () => {
  const [searchData, setSearchData] = useState("");
  const dispatch = useAppDispatch();
  const requestLimit = useThrottling(5, 60000);
  const loadingSearch = useAppSelector(selectLoadingSearchIp);
  const searchIps = useAppSelector(selectSearchIp);

  const searchIp = () => {
    if (requestLimit()) {
      if (isIPAddress(searchData)) {
        console.log("yes");
        dispatch(getIpThunk(searchData));
      } else {
        console.log("invalid ip");
      }
    } else {
      console.log("limit");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  return (
    <HomeContainer>
      <HomeBox>
        <SearchWrapper>
          <Input
            placeholder={localTexts.search}
            value={searchData}
            type={"string"}
            fullWidth={true}
            onChange={handleInputChange}
          />
          <Button
            title="search"
            loading={loadingSearch}
            onClick={() => searchIp()}
          />
        </SearchWrapper>

        <HomeResult item={searchIps}/>
      </HomeBox>
    </HomeContainer>
  );
};

export default Home;
