import { useState } from "react";
import Input from "../../components/Input";
import { localTexts } from "../../locals/text";
import {
  ErrorTitle,
  HomeBox,
  HomeContainer,
  SearchWrapper,
  TitleWrapper,
} from "./StyledHome";
import Button from "../../components/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatch";
import { getIpThunk } from "../../store/general/thunks";
import { isIPAddress } from "../../utils/validation";
import useThrottling from "../../hooks/useThrottling";
import {
  selectLoadingSearchIp,
  selectSearchIp,
} from "../../store/general/slice";
import HomeResult from "../../components/HomeResult";
const searchIcon = require("../../assets/icons/search.svg").default;

const Home = () => {
  const [searchData, setSearchData] = useState("");
  const [stopSearch, setSearchStop] = useState({
    title: "",
    showError: false,
  });
  const dispatch = useAppDispatch();
  const requestLimit = useThrottling(5, 60000);
  const loadingSearch = useAppSelector(selectLoadingSearchIp);
  const searchIps = useAppSelector(selectSearchIp);

  const searchIp = () => {
    let errorData = {
      title: "",
      showError: false,
    };
    if (requestLimit()) {
      if (isIPAddress(searchData)) {
        dispatch(getIpThunk(searchData));
      } else {
        errorData = {
          title: "لطفا آی پی مورد نظر را جستجو کنید",
          showError: true,
        };
        setSearchStop(errorData);
      }
    } else {
      errorData = {
        title: "سرچ بیش از حد مجاز است",
        showError: true,
      };
      setSearchStop(errorData);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  return (
    <HomeContainer>
      <HomeBox>
        <TitleWrapper>
          <h2>{localTexts.findIpTitle}</h2>
          <p>{localTexts.findTpDesc}</p>
        </TitleWrapper>
        <SearchWrapper>
          <Input
            placeholder={localTexts.search}
            value={searchData}
            type={"string"}
            fullWidth={true}
            onChange={handleInputChange}
            customClass="border-left"
          />
          <Button
            loading={loadingSearch}
            onClick={() => searchIp()}
            icon={searchIcon}
            contentClassName={"border-right"}
          />
        </SearchWrapper>
        {stopSearch.showError && <ErrorTitle>{stopSearch.title}</ErrorTitle>}
        <HomeResult item={searchIps} />
      </HomeBox>
    </HomeContainer>
  );
};

export default Home;
