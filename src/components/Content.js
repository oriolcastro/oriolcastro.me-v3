/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { Wysiwyg } from '@tinacms/fields';
import { TinaField } from '@tinacms/form-builder';
import PropTypes from 'prop-types';

export const HTMLContent = ({ content, className }) => (
  <TinaField name="rawMarkdownBody" Component={Wysiwyg}>
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  </TinaField>
);

const Content = ({ content, className }) => <div className={className}>{content}</div>;

Content.propTypes = {
  content: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

HTMLContent.propTypes = Content.propTypes;

export default Content;
