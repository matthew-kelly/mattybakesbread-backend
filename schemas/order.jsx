import React from "react";

import PaymentInfo from "../components/PaymentInfo";
import PriceInput from "../components/PriceInput";
import { capitalize, formatDate } from "../helpers/helpers";

export default {
  name: "order",
  title: "Orders",
  type: "document",
  fields: [
    {
      name: "firstName",
      title: "First Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "lastName",
      title: "Last Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "address",
      title: "Address",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "address2",
      title: "Address 2",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "province",
      title: "Province",
      type: "string",
      initialValue: "BC",
      validation: (rule) => rule.required(),
    },
    {
      name: "country",
      title: "Country",
      type: "string",
      initialValue: "Canada",
      validation: (rule) => rule.required(),
    },
    {
      name: "postalCode",
      title: "Postal Code",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "contents",
      title: "Order Contents",
      type: "array",
      of: [
        {
          name: "orderItem",
          title: "Order Item",
          type: "object",
          fields: [
            {
              name: "product",
              title: "Product",
              type: "reference",
              to: [{ type: "product" }],
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
              image: "product.image",
            },
            prepare: ({ product, quantity, image }) => {
              return {
                title: `${product} x${quantity}`,
                media: image,
              };
            },
          },
        },
      ],
      validation: (rule) => rule.required(),
    },
    {
      name: "total",
      title: "Total",
      type: "number",
      components: {
        input: PriceInput,
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "paid",
      title: "Paid",
      type: "boolean",
      initialValue: false,
      validation: (rule) => rule.required(),
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "pending",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Received", value: "received" },
          { title: "Complete", value: "complete" },
        ],
      },
      validation: (rule) => rule.required(),
    },
    {
      name: "payment",
      title: "Payment",
      type: "text",
      components: {
        input: PaymentInfo,
      },
    },
  ],
  preview: {
    select: {
      firstName: "firstName",
      lastName: "lastName",
      date: "_createdAt",
      paid: "paid",
      status: "status",
    },
    prepare: ({ firstName, lastName, date, paid, status }) => {
      const paymentIcon = {
        pending: "🚫",
        received: "📬",
        complete: "✅",
      };
      return {
        title: `${firstName} ${lastName} - ${formatDate(date)}`,
        subtitle: `${paid ? "Paid" : "Not Paid"} - ${capitalize(status)}`,
        media: (
          <div
            style={{
              width: "35px",
              height: "35px",
              backgroundColor: paid ? "#7af76d" : "#ff8282",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "1.5rem",
              }}
            >
              {paymentIcon[status]}
            </span>
          </div>
        ),
      };
    },
  },
};
