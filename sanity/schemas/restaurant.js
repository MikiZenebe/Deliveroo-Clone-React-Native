import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurnt name',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'short_desc',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    },

    {
      name: 'image',
      type: 'image',
      title: 'image of the restaurant',
    },

    {
      name: 'lat',
      type: 'number',
      title: 'Latitude of the Restaurant',
    },

    {
      name: 'long',
      type: 'number',
      title: 'Longitude of the Restaurant',
    },

    {
      name: 'address',
      type: 'string',
      title: 'Restaurnt address',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'rating',
      type: 'number',
      title: 'Enter rating from (1 to 5)',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please enter the number between 1 to 5'),
    },

    {
      name: 'type',
      type: 'reference',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      to: [{type: 'category'}],
    },

    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      validation: (Rule) => Rule.required(),
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
})
