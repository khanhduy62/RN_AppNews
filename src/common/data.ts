const categories = [
  {
    id: 'top-stories',
    name: 'Top Stories',
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 'cryptocurrency',
    name: 'Cryptocurrency',
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 'world',
    name: 'World',
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 'africa',
    name: 'Africa',
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 'americas',
    name: 'Americas',
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 'asia',
    name: 'Asia',
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 'europe',
    name: 'Europe',
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 'middle-east',
    name: 'Middle East',
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 'u-s',
    name: 'U.S.',
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 'technology',
    name: 'Technology',
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 'science-space',
    name: 'Science & Space',
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
  {
    id: 'world-sport',
    name: 'World Sport',
    image:
      'https://images.unsplash.com/photo-1568688032800-e973b4c925e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8d2hpdGVob3VzZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  },
];

export {categories};
