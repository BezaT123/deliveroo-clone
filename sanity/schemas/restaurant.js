export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [

    {
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
    },
    {
      name: 'lat',
      title: 'Latitude of Restaurant',
      type: 'number',
    },
    {
      name: 'long',
      title: 'Longitude of Restaurant',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image of Restaurant',
      type: 'image',
    },
    {
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
    },
    {
      name: 'rating',
      title: 'Enter a Rating from 1-5 stars!',
      type: 'number'
    },
    {
      name: 'type',
      title: 'Category',
      type: 'reference',
      to: [{type: "category"}]
    },
    {
      name: 'dishes',
      title: 'Dishes',
      type: 'array',
      of: [{ type: "reference", to:[{type: "dish"}] }]
    },
  ],

  
}
