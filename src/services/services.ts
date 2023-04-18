import { useHttp } from "../hooks/http.hook";
// import { IInputs } from "../interfases/IInputs";

const Services = () => {
  const _apiBase = "https://images-api.nasa.gov";
  const { request, clearError, process, setProcess } = useHttp();

  // const getAllResource = async (currentPage: number, pageSize: string) => {
  //   const res = await request(
  //     `${_apiBase}/search?q=space&media_type=image&page_size=${pageSize}&page=${currentPage}`
  //   );
  //   const transformRes = res.collection.items.map(_transformItem);
  //   const pageCount = res.collection.metadata.total_hits;
  //   return { transformRes, pageCount };
  // };

  const getSearchResource = async (
    formData: any,
    currentPage: number,
    pageSize: string
  ) => {
    const { q, keywords, year_start, year_end } = formData;
    const queryParams = [
      q ? `q=${encodeURI(q)}` : "q=space",
      year_start ? `year_start=${year_start}` : "",
      year_end ? `year_end=${year_end}` : "",
      keywords ? `keywords=${encodeURI(keywords)}` : "",
      "media_type=image",
      pageSize ? `page_size=${pageSize}` : "",
      currentPage ? `page=${currentPage}` : "",
    ];
    const queryString = queryParams.filter(Boolean).join("&");
    const res = await request(`${_apiBase}/search?${queryString}`);
    const transformRes = res.collection.items.map(_transformItem);
    const pageCount = res.collection.metadata.total_hits;
    setProcess("finaly");
    return { transformRes, pageCount };
  };

  const _transformItem = (card: any) => {
    return {
      thumbnail: card.links[0].href,
      description: card.data[0].description,
      title: card.data[0].title,
      location: card.data[0].location,
      photographer: card.data[0].photographer,
    };
  };

  return { getSearchResource, process, setProcess };
};

export default Services;
