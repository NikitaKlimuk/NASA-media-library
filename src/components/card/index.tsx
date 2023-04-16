import "./styles.scss";

interface ICard {
  thumbnail: string;
  description: string;
  title: string;
  location: string;
  photographer: string;
}

const Card: React.FC<ICard> = ({
  thumbnail,
  description,
  title,
  location,
  photographer,
}) => {
  return (
    <div className="card">
      <img className="card__image" src={thumbnail} alt={description} />
      <div className="card__photographer">{photographer}</div>
      <div className="card__title">{title}</div>
      <div className="card__location">{location}</div>
    </div>
  );
};

export default Card;
