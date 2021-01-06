export default {  
    name: 'bookmark',
    title: 'Bookmarks',
    type: 'document',
    fields: [
      {
        name: 'pageTitle',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'url',
        title: 'URL',
        type: 'string'
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text'
      },
      {
        title: 'Save Date',
        name: 'time',
        type: 'datetime',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH:mm',
          timeStep: '15',
          calendarTodayLabel: 'today',
        },
      },
      
    ]
  }