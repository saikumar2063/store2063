import { Link } from "react-router-dom";

import { Ci, Cn, Li } from "./style";

import "./index.css";

const Item = (props) => {
  const { details } = props;
  const { id, title, image } = details;
  return (
    <Li>
      <Link to={`${id}`} className="link-el">
        <Ci src={image} alt={title} />
        <Cn>{title}</Cn>
      </Link>
    </Li>
  );
};

export default Item;
