import "./styles.scss";
import blackHole from "../../assets/images/blackHole.png";

const EmptyData: React.FC = () => {
  return (
    <div className="emptyData">
      <div className="emptyData__title">Nothing was found for your query </div>
      <div className="emptyData__descr">
        There are no results matching the currently selected filter combination.
        You can <a href="/">reset the filters</a> and try again.
      </div>
      <img
        className="emptyData__images"
        src={blackHole}
        alt="black hole images"
      />
    </div>
  );
};

export default EmptyData;
