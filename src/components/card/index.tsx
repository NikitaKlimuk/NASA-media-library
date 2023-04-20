import camera from "../../assets/icons/camera.svg";
import locationIcon from "../../assets/icons/location.svg";
import { useNavigate } from "react-router-dom";
import { ICard } from "../../interfases/card";
import "./styles.scss";

const Card: React.FC<ICard> = ({
  thumbnail,
  description,
  title,
  location,
  photographer,
  nasaID,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${nasaID}`);
  };

  return (
    <div className="card" onClick={handleClick} role="link">
      <div className="overlay"></div>

      <img className="card__image" src={thumbnail} alt={description} />
      {photographer && (
        <div className="card__photographer" role="listitem">
          <img src={camera} alt="camera logo" />
          {photographer}
        </div>
      )}
      <div className="card__title">{title}</div>
      {location && (
        <div className="card__location" role="listitem">
          <img src={locationIcon} alt={description} />
          {location}
        </div>
      )}
    </div>
  );
};

export default Card;
