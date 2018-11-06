import React from "react";
import { Link } from "gatsby";
import { Button } from "semantic-ui-react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { IconContext } from "react-icons";

const PostLinks = props => {
  return (
    <div
      style={{
        marginBottom: "48px",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      {props.previous && (
        <Link to={props.previous.fields.slug}>
          <Button primary size="small">
            <IconContext.Provider
              value={{ style: { verticalAlign: "middle", marginRight: "8px" } }}
            >
              <FaArrowLeft />
            </IconContext.Provider>
            Publicació anterior
          </Button>
        </Link>
      )}
      {props.next && (
        <Link to={props.next.fields.slug}>
          <Button primary size="small">
            Pròxima publicació
            <IconContext.Provider
              value={{ style: { verticalAlign: "middle", marginLeft: "8px" } }}
            >
              <FaArrowRight />
            </IconContext.Provider>
          </Button>
        </Link>
      )}
    </div>
  );
};

export default PostLinks;
