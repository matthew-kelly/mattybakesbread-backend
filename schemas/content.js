import { capitalize } from "../helpers/helpers";

export default {
  name: "content",
  title: "Content",
  type: "document",
  fields: [
    {
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Link", value: "link" },
          { title: "Image", value: "image" },
        ],
      },
      validation: (rule) => rule.required(),
    },
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
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
  ],
  preview: {
    select: {
      type: "type",
      title: "link",
      media: "image",
    },
    prepare: ({ type, title, media }) => {
      return {
        title: `${capitalize(type)} — ${title}`,
        media: media,
      };
    },
  },
};
