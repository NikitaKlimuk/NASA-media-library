import "./styles.scss";

const Skeleton: React.FC = () => {
  return (
    <div className="skeleton">
      <div className="pulse skeleton__main"></div>
      <div className="pulse skeleton__mini"></div>
      <div className="pulse skeleton__block"></div>
    </div>
  );
};

export default Skeleton;
