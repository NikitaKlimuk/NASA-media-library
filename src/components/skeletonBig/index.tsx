import "./styles.scss";

const SkeletonBig: React.FC = () => {
  return (
    <div className="skeletonBig" role="banner">
      <div className="pulse skeletonBig__title"></div>
      <div className="pulse skeletonBig__img"></div>
      <div className="pulse skeletonBig__container">
        <div className="pulse skeletonBig__container-description"></div>
        <div className="pulse skeletonBig__container-keywords"></div>
      </div>
    </div>
  );
};

export default SkeletonBig;
