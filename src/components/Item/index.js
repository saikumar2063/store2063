import { Link } from "react-router-dom";

import { Ci, Cn, Li } from "./style";

import "./index.css";

const Item = (props) => {
  const { details } = props;
  const { id, title, logoUrl } = details;
  return (
    <Li>
      <Link to={`${id}`} className="link-el">
        <Ci src={logoUrl} alt={title} />
        <Cn>{title}</Cn>
      </Link>
    </Li>
  );
};

export default Item;
