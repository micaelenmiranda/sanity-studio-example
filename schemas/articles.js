export default {
  name: 'articles',
  type: 'document',
  title: 'Articles',
  fields: [
    {
      name: 'featuredImage',
      type: 'image',
      title: 'Featured Image'
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      options: {
        source: 'title'
      },
    },
    {
      name: 'slug',
      type: 'string',
      title: 'Slug'
    },
    {
      name: 'excerpt',
      type: 'string',
      title: 'Excerpt'
    },
    {
      name: 'author',
      type: 'string',
      title: 'Author'
    },
    {
      title: 'Publish Date',
      name: 'publishDate',
      type: 'date',
      options: {
        dateFormat: 'MMM DD YYYY',
        calendarTodayLabel: 'Today'
      }
    },
    {
      title: 'Content', 
      name: 'content',
      type: 'array', 
      of: [
        {
          type: 'block'
        },
        {
          type: 'image'
        }
      ],
    }
  ]
}
