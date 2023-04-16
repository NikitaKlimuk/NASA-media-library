// import { v4 as uuidv4 } from "uuid";
import { useForm, SubmitHandler } from "react-hook-form";
import filterIcon from "../../assets/icons/filters.svg";
import sortIcon from "../../assets/icons/sort.svg";
import "./styles.scss";
import SelectComponent from "../../components/select";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

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

  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();

  const options = [
    { value: "", label: "All Topics" },
    { value: "Mars", label: "Mars" },
    { value: "Solar System", label: "Solar System" },
    { value: "Earth", label: "Earth" },
    { value: "Stars and Galaxies", label: "Stars and Galaxies" },
    { value: "Robotics", label: "Robotics" },
    { value: "Technology", label: "Technology" },
    { value: "Asteroids and Comets", label: "Asteroids and Comets" },
    { value: "Climate Change", label: "Climate Change" },
  ];

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
        <div className="container">
          <section className="searchPage__filters">
            <div className="searchPage__filters-header">
              <button type="button" id="filters">
                <img src={filterIcon} alt="Filter icon" />
                Filtres
              </button>
              <button type="button" id="latest">
                Latest
                <img src={sortIcon} alt="Filter icon" />
              </button>
            </div>
            <div className="searchPage__filters-wrapper">
              <div className="searchPage__filters-wrapper__select">
                <SelectComponent
                  register={register}
                  name="topics"
                  options={options}
                  title="Topic"
                />
              </div>
              <div className="yearPicker">
                From the year
                <DatePicker
                  dateFormat="yyyy"
                  selected={startDate}
                  onChange={(date: Date | null) => date && setStartDate(date)}
                  selectsStart
                  showYearPicker
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="Click to select a year"
                  maxDate={new Date()}
                  yearItemNumber={12}
                />
              </div>
              <div className="yearPicker">
                Under a year
                <DatePicker
                  dateFormat="yyyy"
                  selected={endDate}
                  onChange={(date: Date | null) => date && setEndDate(date)}
                  selectsEnd
                  showYearPicker
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  placeholderText="Click to select a year"
                  maxDate={new Date()}
                  yearItemNumber={12}
                />
              </div>
              <div className="d-flex align-items-end">
                <button className="filters-submit-btn" type="button">
                  Search
                </button>
              </div>
            </div>
          </section>
          <section className="searchPage__results"></section>
        </div>
      </form>
    </div>
  );
};

export default SearchPage;
