// contentlayer.config.js

import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

export const Categoria = defineDocumentType(() => ({
  name: "Categoria",
  filePathPattern: `categoria/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    image: {
      type: "string",
      required: false,
    },
    color: {
      type: "string",
      required: true,
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (categoria) => `/categoria/${categoria._raw.flattenedPath}`,
    },
  },
}));

export const Producto = defineDocumentType(() => ({
  name: 'Producto',
  filePathPattern: `{pantis,brasier,jeans}/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    price: { type: 'number', required: true },
    size: { type: 'string', required: false },
    image: { type: 'string', required: false },
    category: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc.category}/${doc._raw.flattenedPath}`,
    },
  },
}));


const rehypeoptions = {
  // Use one of Shiki's packaged themes
  theme: "one-dark-pro",
  // Set to true to keep the background color
  keepBackground: true,
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node: any, id: any) {
    node.properties.className = ["word"];
  },
};

export default makeSource({
  contentDirPath: ".",
  documentTypes: [Categoria, Producto],
  mdx: {
    // rehypePlugins: [[rehypePrettyCode, rehypeoptions]],
  },
});
// export default makeSource({
//   contentDirPath: "posts",
//   documentTypes: [Post],
//   mdx: {
//     // rehypePlugins: [[rehypePrettyCode, rehypeoptions]],
//   },
// });