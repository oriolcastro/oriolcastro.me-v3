import slugify from 'react-slugify';

import { RemarkCreatorPlugin } from 'gatsby-tinacms-remark';

const formatDate = date => date.toISOString().split('T')[0];

const defaultFrontmatter = form => {
  const parsedTags = form.tags.split(',');

  return {
    title: form.title,
    date: formatDate(form.date),
    // Default values
    tags: parsedTags,
    description: '',
    coverImg: '',
    templateKey: 'blog-post',
  };
};

const CreatePostPlugin = new RemarkCreatorPlugin({
  label: 'New Blog Post',
  filename: form => {
    const slug = slugify(form.title.toLowerCase());
    const slugedDate = formatDate(form.date);
    return `content/blog/${slugedDate}-${slug}/index.md`;
  },
  frontmatter: defaultFrontmatter,
  body: () => '',
  fields: [
    {
      label: 'Title',
      name: 'title',
      description: 'The title of this post',
      component: 'text',
    },
    {
      label: `Date Published`,
      name: `date`,
      description: `The date the post was published.`,
      component: `date`,
      dateFormat: `YYYY-MM-DD`,
      timeFormat: false,
    },
    {
      label: 'Description',
      name: 'description',
      description: 'Short abstract for the post',
      component: 'textarea',
    },
    {
      label: 'Tags',
      name: 'tags',
      description: 'Coma-separated tags for the post',
      component: 'text',
    },
  ],
});

export default CreatePostPlugin;
