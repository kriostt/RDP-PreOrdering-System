import {defineType} from 'sanity'

export default defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'username',
      title: 'Username',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required(),
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      validation: (rule) => rule.required(),
    },
  ],
})          
