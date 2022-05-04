export default {
  name: "cart",
  title: "Carts",
  type: "document",
  fields: [
    {
      name: "contents",
      title: "Cart Contents",
      type: "array",
      of: [
        {
          name: "cartItem",
          title: "Cart Item",
          type: "object",
          fields: [
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
              name: "quantity",
              title: "Quantity",
              type: "number",
            },
          ],
          preview: {
            select: {
              product: "product.name",
              quantity: "quantity",
            },
            prepare: ({ product, quantity }) => {
              return {
                title: `${product} x${quantity}`,
              };
            },
          },
        },
      ],
      options: {
        sortable: false,
      },
    },
  ],
  preview: {
    select: {
      id: "_id",
    },
    prepare: ({ id }) => {
      return {
        title: `Cart ${id}`,
      };
    },
  },
};
