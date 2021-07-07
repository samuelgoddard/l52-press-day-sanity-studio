export default {
  title: "Collection",
  name: 'collection',
  type: "object",
  fields: [
    {
      title: 'Title',
      description: 'eg: "Mens AW21"',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Enquire Email Address',
      name: 'enquireEmailAddress',
      type: 'string',
    },
    {
      title: 'Images Google Drive URL',
      name: 'imagesGoogleDrive',
      type: 'string',
    },
    {
      title: 'Lookbook PDF',
      name: 'lookbookPdf',
      type: 'file',
    },
    {
      title: "Collection Images",
      description: 'The gallery of images for the this collection (min 5)',
      name: 'collectionImages',
      type: 'array',
      options: {
        layout: 'grid'
      },
      of: [{
        type: 'image'
      }],
      validation: Rule => Rule.min(5)
    }
  ]
}