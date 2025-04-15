// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    description: {
      type: "string",
      description: "The description of the post",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/posts/${post._raw.flattenedPath}`
    }
  }
}));
var Categoria = defineDocumentType(() => ({
  name: "Categoria",
  filePathPattern: `categoria/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    date: {
      type: "date",
      required: true
    },
    image: {
      type: "string",
      required: false
    },
    color: {
      type: "string",
      required: true
    }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (categoria) => `/categoria/${categoria._raw.flattenedPath}`
    }
  }
}));
var Producto = defineDocumentType(() => ({
  name: "Producto",
  filePathPattern: `{pantis,brasier,jeans}/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    price: { type: "number", required: true },
    size: { type: "string", required: false },
    image: { type: "string", required: false },
    category: { type: "string", required: true }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc.category}/${doc._raw.flattenedPath}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: ".",
  documentTypes: [Categoria, Producto, Post],
  mdx: {
    // rehypePlugins: [[rehypePrettyCode, rehypeoptions]],
  }
});
export {
  Categoria,
  Post,
  Producto,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-YZZVPASI.mjs.map
