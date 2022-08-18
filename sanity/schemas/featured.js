export default {
  name: 'featured',
  title: 'Featured Menu catagories',
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
      name: 'restaurants',
      title: 'Restaurants',
      type: 'array',
      of: [{ type: "reference", to:[{type: "restaurant"}] }]
    },
  ],

  
}
