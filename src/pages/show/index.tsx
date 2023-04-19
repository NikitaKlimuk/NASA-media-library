import { useNavigate, useParams } from "react-router-dom";
import Services from "../../services/services";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import leftIcon from "../../assets/icons/left.svg";
import "./styles.scss";
import { transformDate } from "../../utils/transformDate";
import SkeletonBig from "../../components/skeletonBig";
import NotFoundPage from "../../components/notFound";

const ShowPage = () => {
  const { getDetailsResult, getImages, process } = Services();
  const { nasaId } = useParams();
  const navigate = useNavigate();
  const [imageLink, setImageLink] = useState("");
  const [data, setData] = useState({
    title: "",
    description: "",
    date: new Date(),
    location: "",
    photographer: "",
    keywords: [],
  });

  useEffect(() => {
    getDetailsResult(nasaId).then(({ transformRes }) => {
      setData(transformRes);
    });
    getImages(nasaId).then(({ sortedImage }) => {
      setImageLink(sortedImage);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {process === "error" ? (
        <NotFoundPage />
      ) : (
        <>
          {data.title && imageLink ? (
            <div className="showPage">
              <button className="showPage__button" onClick={() => navigate(-1)}>
                <img src={leftIcon} alt="back to main page button" />
                Back
              </button>
              <h2 className="showPage__title">{data.title}</h2>
              <div className="showPage__image">
                <img src={imageLink} alt={imageLink} />
              </div>
              <div className="showPage__wrapper">
                <div className="showPage__wrapper-description">
                  {data.description}
                  <div className="showPage__wrapper-description__date">
                    {transformDate(data.date)}
                  </div>
                </div>
                <div className="showPage__wrapper-keywords">
                  {data.location && (
                    <>
                      <div className="showPage__wrapper-keywords__title">
                        Location
                      </div>
                      <div className="showPage__wrapper-keywords__answer">
                        {data.location}
                      </div>
                    </>
                  )}
                  {data.photographer && (
                    <>
                      <div className="showPage__wrapper-keywords__title">
                        Photographer
                      </div>
                      <div className="showPage__wrapper-keywords__answer">
                        {data.photographer}
                      </div>
                    </>
                  )}
                  {data.keywords.length > 0 && (
                    <>
                      <div className="showPage__wrapper-keywords__title">
                        Keywords
                      </div>
                      <div className="showPage__wrapper-keywords__wrapper">
                        {data.keywords.map((item) => {
                          return (
                            <div
                              className="showPage__wrapper-keywords__answer"
                              key={uuidv4()}
                            >
                              {item}
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <SkeletonBig />
          )}
        </>
      )}
    </>
  );
};

export default ShowPage;
