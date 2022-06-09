import { capitalize } from "../helpers/helpers";

export default {
  name: "featured",
  title: "Featured Products",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Product", value: "product" },
          { title: "Text", value: "text" },
        ],
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "product",
      title: "Product",
      type: "reference",
      to: [{ type: "product" }],
      options: {
        disableNew: true,
      },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
    {
      name: "linkText",
      title: "Link Text",
      type: "string",
    },
    {
      name: "blurb",
      title: "Blurb",
      type: "text",
    },
  ],
  preview: {
    select: {
      type: "type",
      productName: "product.name",
      productImage: "product.image",
      title: "title",
    },
    prepare: ({ type, productName, productImage, title }) => {
      if (type === "product") {
        return {
          title: productName,
          subtitle: capitalize(type),
          media: productImage,
        };
      } else {
        return {
          title: title,
          subtitle: capitalize(type),
        };
      }
    },
  },
};
