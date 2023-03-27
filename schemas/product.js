import PriceInput from "../components/PriceInput";

export default {
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Product Name",
      type: "string",
      description: "Name of the product",
      validation: (rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "subtitle",
      title: "Product Subtitle",
      type: "string",
      description: "Appears under the title.",
      validation: (rule) => rule.required(),
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
      description: "Description of the product. Appears under the image",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Price of the product in cents",
      components: {
        input: PriceInput,
      },

      validation: (rule) => rule.required(),
    },
    {
      name: "stock",
      title: "Stock",
      type: "number",
      description: "Quantity of product available",
      validation: (rule) => rule.required(),
    },
    // variants - eg. bagels -> x6 or x12
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt text",
        },
      ],
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
