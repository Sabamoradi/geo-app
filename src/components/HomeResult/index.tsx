import MapComponent from "../Map";
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
      className={`result_wrapper mt-32 ${item !== null && "result_height"}`}
    >
      {item !== null && (
        <MapComponent lat={item.latitude} lng={item.longitude} />
      )}
    </StyledHomeResult>
  );
};

export default HomeResult;
