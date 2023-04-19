import "./styles.scss";
import camera from "../../assets/icons/camera.svg";
import locationIcon from "../../assets/icons/location.svg";
import { useNavigate } from "react-router-dom";

interface ICard {
  thumbnail: string;
  description: string;
  title: string;
  location: string;
  photographer: string;
  nasaID: string;
}

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
    <div className="card" onClick={handleClick}>
      <div className="overlay"></div>

      <img className="card__image" src={thumbnail} alt={description} />
      {photographer && (
        <div className="card__photographer">
          <img src={camera} alt="camera logo" />
          {photographer}
        </div>
      )}
      <div className="card__title">{title}</div>
      {location && (
        <div className="card__location">
          <img src={locationIcon} alt="location logo" />
          {location}
        </div>
      )}
    </div>
  );
};

export default Card;
