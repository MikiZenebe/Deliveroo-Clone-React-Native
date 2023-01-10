import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featuerd',
  title: 'Featuerd',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featuerd Catagory name',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'short_desc',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    },

    {
      name: 'restaurants',
      type: 'array',
      title: 'Restaurants',
      validation: (Rule) => Rule.required(),
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    },
  ],
})
