import { StyledHomeResult } from "./StyledHomeResult";

//TODO
interface Props {
  item: any;
}

const HomeResult = (props: Props) => {
  const { item } = props;
  console.log(item);

  return (
    <StyledHomeResult
      className={`result_wrapper ${item !== null && "result_height"}`}
    >
      hello
    </StyledHomeResult>
  );
};

export default HomeResult;
