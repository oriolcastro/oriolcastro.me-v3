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
              value={{
                style: { verticalAlign: "text-top", marginRight: "8px" },
                size: "1.15em"
              }}
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
              value={{
                style: { verticalAlign: "text-top", marginLeft: "8px" },
                size: "1.15em"
              }}
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
