export default {
  name: 'homepage',
  type: 'document',
  title: 'Homepage',
  fields: [
    {
      title: 'Description',
      name: 'description',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    }
  ]
}
