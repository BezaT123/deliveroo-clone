export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of dish',
      type: 'string',
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image of the Dish',
      type: 'image',
    },
    {
      name: 'price',
      title: 'Price of the Dish',
      type: 'number',
    },
  ],
}
