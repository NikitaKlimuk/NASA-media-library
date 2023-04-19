import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm, SubmitHandler } from "react-hook-form";
import resetBtn from "../../assets/icons/trash.svg";
import searchBtn from "../../assets/icons/search-normal.svg";
import SelectComponent from "../../components/select";
import DatePicker from "react-datepicker";
import { selectOptions } from "../../config/selectOptions";
import Card from "../../components/card";
import { IInputs } from "../../interfases/submitInput/IInputs";
import Services from "../../services/services";
import Pagination from "../../components/paginate";
import EmptyData from "../../components/emptyData";
import Skeleton from "../../components/skeleton";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.scss";

const SearchPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    // formState: { errors },
  } = useForm<IInputs>();
  const { getSearchResource, process } = Services();

  const [NasaData, setNasaData] = useState([]);
  const [startDate, setStartDate] = useState<Date | null>();
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [totalPage, setTotalPage] = useState<number | undefined>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<string>("15");

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    setValue("year_start", date?.getFullYear()?.toString() ?? "");
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    setValue("year_end", date?.getFullYear()?.toString() ?? "");
  };

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    const validData = Object.fromEntries(
      Object.entries(data).filter(
        ([_, value]) => value !== "" && value !== undefined
      )
    );
    getSearchResource(validData, currentPage, pageSize).then(
      ({ transformRes, pageCount }) => {
        setNasaData(transformRes);
        setTotalPage(pageCount);
      }
    );
  };

  function handleButtonClick(event: React.MouseEvent<HTMLButtonElement>) {
    const buttonText = event.currentTarget.innerText;
    setValue("q", buttonText.toLowerCase());
    handleSubmit(onSubmit)();
  }

  const clearFilters = () => {
    reset();
    setStartDate(null);
    setEndDate(new Date());
    setCurrentPage(1);
    handleSubmit(onSubmit)();
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize]);

  useEffect(() => {
    handleSubmit(onSubmit)();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

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
            <button
              className="light-btn"
              type="button"
              onClick={handleButtonClick}
            >
              Earth
            </button>
            <button
              className="light-btn"
              type="button"
              onClick={handleButtonClick}
            >
              Moon
            </button>
            <button
              className="light-btn"
              type="button"
              onClick={handleButtonClick}
            >
              Sun
            </button>
            <button
              className="light-btn"
              type="button"
              onClick={handleButtonClick}
            >
              Mars
            </button>
          </div>
        </section>
        <div className="container">
          <section className="searchPage__filters">
            <div className="searchPage__filters-wrapper">
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
              <button
                className="filters-clear-button"
                type="button"
                onClick={clearFilters}
              >
                Reset filters
                <img src={resetBtn} alt="reset all filters" />
              </button>
              <button className="filters-submit-btn" type="submit">
                Search
                <img src={searchBtn} alt="search button" />
              </button>
            </div>
          </section>
          <section className="searchPage__content">
            {process === "finaly" && NasaData.length === 0 ? (
              <EmptyData />
            ) : (
              <>
                <div className="searchPage__content-pagination">
                  <Pagination
                    totalPage={totalPage ?? 0}
                    setCurentPage={setCurrentPage}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    isLargePagination
                  />
                </div>
                <div className="skeleton-wrapper">
                  {process === "loading" ? (
                    <div className="skeleton-wrapper">
                      {[...Array(+pageSize)].map((_, index) => (
                        <Skeleton key={index} />
                      ))}
                    </div>
                  ) : (
                    <div>
                      {process === "finaly" && NasaData.length > 0 ? (
                        <div className="searchPage__results">
                          {NasaData?.map((item: any) => {
                            return (
                              <Card
                                key={uuidv4()}
                                thumbnail={item.thumbnail}
                                description={item.description}
                                title={item.title}
                                location={item.location}
                                photographer={item.photographer}
                                nasaID={item.nasaID}
                              />
                            );
                          })}
                        </div>
                      ) : (
                        <EmptyData />
                      )}
                    </div>
                  )}
                </div>
                <div className="searchPage__content-pagination__end">
                  <Pagination
                    totalPage={totalPage ?? 0}
                    setCurentPage={setCurrentPage}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                  />
                </div>
              </>
            )}
          </section>
        </div>
      </form>
    </div>
  );
};

export default SearchPage;
