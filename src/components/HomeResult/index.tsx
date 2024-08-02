import { localTexts } from "../../locals/text";
import { SearchIp } from "../../store/general/types";
import MapComponent from "../Map";
import { StyledHomeResult, StyledLeftSection } from "./StyledHomeResult";

//TODO
interface Props {
  item: SearchIp | null;
}

const HomeResult = (props: Props) => {
  const { item } = props;

  return (
    <StyledHomeResult
      className={`result_wrapper mt-32 ${item !== null && "result_height"}`}
    >
      {item !== null && (
        <>
          <StyledLeftSection>
            <ul>
              <li>
                <div className="item_wrapper">
                  <p className="title">{localTexts.ipAdress}</p>
                  <p className="text">{item.ip}</p>
                </div>
                <div className="item_wrapper">
                  <p className="title">{localTexts.latitude}</p>
                  <p className="text">{item.latitude}</p>
                </div>
              </li>
              <li>
                <div className="item_wrapper">
                  <p className="title">{localTexts.country}</p>
                  <p className="text">{item.country_name}</p>
                </div>
                <div className="item_wrapper">
                  <p className="title">{localTexts.longitude}</p>
                  <p className="text">{item.longitude}</p>
                </div>
              </li>
              <li>
                <div className="item_wrapper">
                  <p className="title">{localTexts.region}</p>
                  <p className="text">{item.state_prov}</p>
                </div>
              </li>
              <li>
                <div className="item_wrapper">
                  <p className="title">{localTexts.city}</p>
                  <p className="text">{item.state_prov}</p>
                </div>
              </li>
            </ul>
          </StyledLeftSection>
          <MapComponent
            lat={Number(item.latitude)}
            lng={Number(item.longitude)}
          />
        </>
      )}
    </StyledHomeResult>
  );
};

export default HomeResult;
