import CategoryItem from "../category-item";
import "./directory.styles.scss";
const Directory = (props) => {
  console.log("direct", props.categories);
  return (
    <div className="directory-container">
      {props.categories.map((category) => {
        return <CategoryItem category={category} />;
      })}
      h11
    </div>
  );
};

export default Directory;
