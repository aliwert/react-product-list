import { categories } from "../../helper/data";
import "./Header.module.scss";

const Header = ({ clickChange }) => {
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>Product Lists</h1>
      </div>
      <div className="list">
        {categories.map((category, index) => (
          <button onClick={() => clickChange(category)} key={index}>
            {category}
          </button>
        ))}
      </div>
    </>
  );
};

export default Header;
