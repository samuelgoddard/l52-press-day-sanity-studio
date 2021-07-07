export default {
  title: "Clients",
  name: 'client',
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Collections",
      description: "The collections for this client.",
      type: 'array',
      name: 'collections',
      of: [{ type: 'collection' }]
    },
    {
      title: "Teaser Image",
      description: "This is the image used when displayed in the home page carousel.",
      name: 'teaserImage',
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: "Teaser Subtitle",
      description: "This is the subtitle shown below the title when displayed in the home page carousel, eg 'Mens'.",
      name: "teaserSubtitle",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      description: 'This will generate the routes on the front-end and needs to be set',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 200,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}