import { useHttp } from "../hooks/http.hook";
// import { IInputs } from "../interfases/IInputs";

const Services = () => {
  const _apiBase = "https://images-api.nasa.gov";
  const { request, clearError, process, setProcess } = useHttp();

  const getAllResource = async () => {
    const res = await request(
      `${_apiBase}/search?&media_type=image&page_size=15&page=1`
    );
    const transformRes = res.collection.items.map(_transformItem);
    const pageCount = res.collection.metadata.total_hits;
    return { transformRes, pageCount };
  };

  const getSearchResource = async (formData: any, currentPage: number) => {
    const { q, keywords, year_start, year_end } = formData;
    const queryParams = [
      q ? `q=${encodeURI(q)}` : "",
      year_start ? `year_start=${year_start}` : "",
      year_end ? `year_end=${year_end}` : "",
      keywords ? `keywords=${encodeURI(keywords)}` : "",
      "media_type=image",
      "page_size=15",
      currentPage ? `page=${currentPage}` : "",
    ];
    const queryString = queryParams.filter(Boolean).join("&");
    const res = await request(`${_apiBase}/search?${queryString}`);
    const transformRes = res.collection.items.map(_transformItem);
    const pageCount = res.collection.metadata.total_hits;
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

  return { getAllResource, getSearchResource };
};

export default Services;
