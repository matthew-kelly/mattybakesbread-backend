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
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Price of the product in cents",
      inputComponent: PriceInput,
    },
  ],
};
