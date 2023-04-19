import "./styles.scss";
import notFound from "../../assets/images/notFound.png";

const NotFoundPage = () => {
  return (
    <section className="notFound">
      <div className="notFound__title">
        Unfortunately, there is nothing at this address
      </div>
      <a className="notFound__link" href="/">
        Back to home page
      </a>
      <img className="notFound__img" src={notFound} alt="not found images" />
    </section>
  );
};

export default NotFoundPage;
