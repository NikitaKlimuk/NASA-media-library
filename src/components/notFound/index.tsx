import notFound from "../../assets/images/notFound.png";
import "./styles.scss";

const NotFoundPage: React.FC = () => {
  return (
    <div className="notFound">
      <div className="notFound__title">
        Unfortunately, there is nothing at this address
      </div>
      <a className="notFound__link" href="/">
        Back to home page
      </a>
      <img className="notFound__img" src={notFound} alt="not found images" />
    </div>
  );
};

export default NotFoundPage;
