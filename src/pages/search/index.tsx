// import { v4 as uuidv4 } from "uuid";
import { useForm, SubmitHandler } from "react-hook-form";
import "./styles.scss";

const SearchPage = () => {
  type Inputs = {
    NASAsearch: string;
    exampleRequired: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="searchPage">
      <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
        <section className="searchPage__search">
          <h1 className="searchPage__search-title">
            View images from all parts of the solar system
          </h1>
          <h2 className="searchPage__search-descr">
            You can find photos of planets, satellites, asteroids, comets, and
            other space objects, as well as illustrations and renderings based
            on scientific data.
          </h2>
          <div className="searchPage__search-input">
            <input
              type="text"
              id="validationCustom01"
              {...register("NASAsearch", { required: true })}
              placeholder="Search among all photos"
              required
            />
            <button type="submit">Search</button>
          </div>
          <div className="searchPage__search-topics">
            <h5>Trending topics</h5>
            <button type="button">Earth</button>
            <button type="button">Moon</button>
            <button type="button">Sun</button>
            <button type="button">Mars</button>
          </div>
        </section>
        <section className="searchPage__filters"></section>
        <section className="searchPage__results"></section>
      </form>
    </div>
  );
};

export default SearchPage;
