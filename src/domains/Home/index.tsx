import { useState } from "react";
import Input from "../../components/Input";
import { localTexts } from "../../locals/text";
import { HomeBox, HomeContainer, SearchWrapper } from "./StyledHome";
import Button from "../../components/Button";
import { useAppDispatch } from "../../hooks/useDispatch";
import { getIpThunk } from "../../store/general/thunks";

const Home = () => {
  const [searchData, setSearchData] = useState("");
  const dispatch = useAppDispatch();

  const searchIp = () => {
    dispatch(getIpThunk(searchData));
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
          <Button title="search" onClick={() => searchIp()} />
        </SearchWrapper>
      </HomeBox>
    </HomeContainer>
  );
};

export default Home;
