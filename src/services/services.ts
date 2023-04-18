import { useHttp } from "../hooks/http.hook";

const Services = () => {
  const _apiBase = "https://images-api.nasa.gov";
  const { request, process, setProcess } = useHttp();

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
    const transformRes = res.collection.items.map(_transformItems);
    const pageCount = res.collection.metadata.total_hits;
    setProcess("finaly");
    return { transformRes, pageCount };
  };

  const getDetailsResult = async (nasaId?: string) => {
    const res = await request(`${_apiBase}/metadata/${nasaId}`);
    const detailsRes = await request(res.location);
    const transformRes = _transformItem(detailsRes);
    setProcess("finaly");
    return { transformRes };
  };

  const getImages = async (nasaId?: string) => {
    const res = await request(`${_apiBase}/asset/${nasaId}`);
    const image = res.collection.items.filter((item: any) => {
      const href = item.href;
      return href.endsWith(".jpg");
    });
    const sortedImage = image[0].href;

    setProcess("finaly");
    return { sortedImage };
  };

  const _transformItems = (card: any) => {
    return {
      thumbnail: card.links[0].href,
      description: card.data[0].description,
      title: card.data[0].title,
      location: card.data[0].location,
      photographer: card.data[0].photographer,
      nasaID: card.data[0].nasa_id,
    };
  };

  const _transformItem = (card: any) => {
    return {
      title: card["AVAIL:Title"],
      description: card["AVAIL:Description508"],
      date: card["AVAIL:DateCreated"],
      location: card["AVAIL:Location"],
      photographer: card["AVAIL:Photographer"],
      keywords: card["AVAIL:Keywords"],
    };
  };

  return {
    getSearchResource,
    process,
    setProcess,
    getDetailsResult,
    getImages,
  };
};

export default Services;
