import { useState } from "react";
import Input from "../../components/Input";
import { localTexts } from "../../locals/text";
import { HomeBox, HomeContainer, SearchWrapper } from "./StyledHome";
import Button from "../../components/Button";

const Home = () => {
  const [searchData, setSearchData] = useState("");

  const searchIp = () => {};

  return (
    <HomeContainer>
      <HomeBox>
        <SearchWrapper>
          <Input
            placeholder={localTexts.search}
            value={searchData}
            type={"string"}
            fullWidth={true}
          />
          <Button title="search" onClick={() => searchIp()} />
        </SearchWrapper>
      </HomeBox>
    </HomeContainer>
  );
};

export default Home;
