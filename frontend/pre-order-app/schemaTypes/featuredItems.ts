import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featuredItems',
  title: 'Featured Items',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Featured Item Name',
      validation: (rule) => rule.required(),
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
})
