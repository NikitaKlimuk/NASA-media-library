import { useHttp } from "../hooks/http.hook";
// import { IInputs } from "../interfases/IInputs";

const Services = () => {
  const _apiBase = "https://images-api.nasa.gov";
  const { request, clearError, process, setProcess } = useHttp();

  const getAllResource = async () => {
    const res = await request(
      `${_apiBase}/search?q=space&media_type=image&page_size=30&page=2`
    );
    console.log(res);
    return res.collection.items.map(_transformItem);
  };

  const getSearchResource = async (formData: any) => {
    const { q, keywords, year_start, year_end } = formData;
    const res = await request(
      `${_apiBase}/search?${q ? `&q=${q}` : ""}${
        year_start ? `&year_start=${year_start}` : ""
      }${year_end ? `&year_end=${year_end}` : ""}${
        keywords ? `&keywords=${keywords}` : ""
      }&media_type=image&page_size=30&page=1`
    );
    return res.collection.items.map(_transformItem);
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
