import React from "react";
import PropTypes from "prop-types";
import { Wysiwyg } from "@tinacms/fields";
import { TinaField } from "@tinacms/form-builder";

export const HTMLContent = ({ content, className }) => (
  <TinaField name="rawMarkdownBody" Component={Wysiwyg}>
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  </TinaField>
);

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
);

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
