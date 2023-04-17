import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm, SubmitHandler } from "react-hook-form";
import filterIcon from "../../assets/icons/filters.svg";
import sortIcon from "../../assets/icons/sort.svg";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";
import SelectComponent from "../../components/select";
import DatePicker from "react-datepicker";
import { selectOptions } from "../../config/selectOptions";
import Card from "../../components/card";
import { IInputs } from "../../interfases/IInputs";
import Services from "../../services/services";
import Skeleton from "../../components/skeleton";
import Pagination from "../../components/paginate";

const SearchPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<IInputs>();
  const { getAllResource, getSearchResource } = Services();

  const [NasaData, setNasaData] = useState([]);
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [isFiltersHiden, setIsFiltersHiden] = useState<boolean>(true);
  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>();
  const [totalPage, setTotalPage] = useState<number | undefined>();
  const [currentPage, setCurrentPage] = useState<number>(0);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    setValue("year_start", date?.getFullYear()?.toString() ?? "");
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    setValue("year_end", date?.getFullYear()?.toString() ?? "");
  };

  const handleFiltersView = () => {
    setIsFiltersHiden(!isFiltersHiden);
  };

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    const validData = Object.fromEntries(
      Object.entries(data).filter(
        ([_, value]) => value !== "" && value !== undefined
      )
    );
    setisLoading(true);
    getSearchResource(validData, currentPage).then(
      ({ transformRes, pageCount }) => {
        setisLoading(false);
        setNasaData(transformRes);
        setTotalPage(pageCount);
      }
    );
  };

  const clearFilters = () => {
    reset();
    setStartDate(null);
    setEndDate(null);
  };

  useEffect(() => {
    handleSubmit(onSubmit)();
  }, [currentPage]);

  useEffect(() => {
    getAllResource().then(({ transformRes, pageCount }) => {
      setisLoading(false);
      setNasaData(transformRes);
      setTotalPage(pageCount);
    });
  }, []);

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
              {...register("q")}
              placeholder="Search among all photos"
              autoComplete="off"
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
              <button type="button" id="filters" onClick={handleFiltersView}>
                <img src={filterIcon} alt="Filter icon" />
                Filtres
              </button>
              <button type="button" id="latest">
                Latest
                <img src={sortIcon} alt="Filter icon" />
              </button>
            </div>
            <div
              className={`searchPage__filters-wrapper filters-active ${
                !isFiltersHiden ? "show" : ""
              }`}
            >
              <div className="searchPage__filters-wrapper__select">
                <SelectComponent
                  register={register}
                  name="keywords"
                  options={selectOptions}
                  title="Topic"
                />
              </div>
              <div className="yearPicker">
                Search Year From
                <DatePicker
                  {...register("year_start")}
                  dateFormat="yyyy"
                  selected={startDate}
                  onChange={handleStartDateChange}
                  selectsStart
                  showYearPicker
                  startDate={startDate}
                  endDate={endDate}
                  placeholderText="Click to select a year"
                  maxDate={new Date() && endDate}
                  yearItemNumber={12}
                  autoComplete="off"
                />
              </div>
              <div className="yearPicker">
                Search Year To
                <DatePicker
                  {...register("year_end")}
                  dateFormat="yyyy"
                  selected={endDate}
                  onChange={handleEndDateChange}
                  selectsEnd
                  showYearPicker
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  placeholderText="Click to select a year"
                  maxDate={new Date()}
                  yearItemNumber={12}
                  autoComplete="off"
                />
              </div>
              <div className="filters-clear-button">
                <button
                  className="filters-submit-btn"
                  type="button"
                  onClick={clearFilters}
                >
                  Clear filters
                </button>
                <button className="filters-submit-btn" type="submit">
                  Search
                </button>
              </div>
            </div>
          </section>
          <Pagination
            totalPage={totalPage ?? 0}
            setCurentPage={setCurrentPage}
          />
          <section className="searchPage__results">
            {isLoading ? (
              <div className="skeleton-wrapper">
                {[...Array(6)].map((_, index) => (
                  <Skeleton key={index} />
                ))}
              </div>
            ) : (
              NasaData?.map((item: any) => {
                return (
                  <Card
                    key={uuidv4()}
                    thumbnail={item.thumbnail}
                    description={item.description}
                    title={item.title}
                    location={item.location}
                    photographer={item.photographer}
                  />
                );
              })
            )}
          </section>
        </div>
      </form>
    </div>
  );
};

export default SearchPage;
