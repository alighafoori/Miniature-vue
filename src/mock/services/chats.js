import Mock from 'mockjs2'
const stories = [
  { id: 1, name: 'Anna', photo: 'https://randomuser.me/api/portraits/women/12.jpg', seen: false, online: false },
  { id: 2, name: 'Jeff', photo: 'https://randomuser.me/api/portraits/men/75.jpg', seen: true, online: true },
  { id: 3, name: 'Cathy', photo: 'https://randomuser.me/api/portraits/women/42.jpg', seen: false, online: false },
  { id: 4, name: 'Madona', photo: 'https://randomuser.me/api/portraits/women/87.jpg', seen: true, online: true },
  { id: 5, name: 'Emma', photo: 'https://randomuser.me/api/portraits/women/23.jpg', seen: true, online: true },
  { id: 6, name: 'Mark', photo: 'https://randomuser.me/api/portraits/men/65.jpg', seen: false, online: false },
  { id: 7, name: 'Eva', photo: 'https://randomuser.me/api/portraits/women/65.jpg', seen: false, online: false },
  { id: 8, name: 'Max', photo: 'https://randomuser.me/api/portraits/men/31.jpg', seen: true, online: true },
  { id: 9, name: 'Adam', photo: 'https://randomuser.me/api/portraits/men/81.jpg', seen: false, online: false }
]

const chats = [
  {
    id: 1,
    title: 'Angelina Jolie',
    lastMsg: 'Ok, see you at the subway in a bit.',
    unread: 0,
    lastModified: 'Just now',
    users: [
      {
        id: 1,
        name: 'Angelina Jolie',
        avatar: 'https://randomuser.me/api/portraits/women/61.jpg',
        online: false
      }
    ]
  },
  {
    id: 2,
    title: 'Tony Stark',
    lastMsg: 'Hey, Are you there?',
    unread: 1,
    lastModified: '10min',
    users: [
      {
        id: 2,
        name: 'Tony Stark',
        avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
        online: true
      }
    ]
  },
  {
    id: 3,
    title: 'Scarlett Johansson',
    lastMsg: 'You sent a photo.',
    unread: 0,
    lastModified: '1h',
    users: [
      {
        id: 3,
        name: 'Scarlett Johansson',
        avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
        online: false
      }
    ]
  },
  {
    id: 4,
    title: 'John Snow',
    lastMsg: 'You missed a call John.',
    unread: 0,
    lastModified: '4h',
    users: [
      {
        id: 4,
        name: 'John Snow',
        avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
        online: false
      }
    ]
  },
  {
    id: 5,
    title: 'Emma Watson',
    lastMsg: 'You sent a video.',
    unread: 0,
    lastModified: '11 Feb',
    users: [
      {
        id: 5,
        name: 'Emma Watson',
        avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
        online: false
      }
    ]
  },
  {
    id: 6,
    title: 'Sunny Leone',
    lastMsg: 'Ah, it was an awesome one night stand.',
    unread: 0,
    lastModified: '1 Feb',
    users: [
      {
        id: 6,
        name: 'Sunny Leone',
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
        online: true
      }
    ]
  },
  {
    id: 7,
    title: 'Bruce Lee',
    lastMsg: 'You are a great human being.',
    unread: 0,
    lastModified: '23 Jan',
    users: [
      {
        id: 7,
        name: 'Bruce Lee',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        online: false
      }
    ]
  },
  {
    id: 8,
    title: 'TailwindCSS Group',
    lastMsg: 'Adam: Hurray, Version 2 is out now!!.',
    unread: 0,
    lastModified: '23 Jan',
    users: [
      {
        id: 7,
        name: 'Bruce Lee',
        avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
        online: false
      },
      {
        id: 6,
        name: 'Sunny Leone',
        avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
        online: true
      }
    ]
  },
  {
    id: 9,
    title: 'Will Smith',
    lastMsg: 'WTF dude!! absofuckingloutely.',
    unread: 0,
    lastModified: '13 Dec',
    users: [
      {
        id: 8,
        name: 'Will Smith',
        avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
        online: false
      }
    ]
  },
  {
    id: 10,
    title: 'Brad Pitt',
    lastMsg: 'you called Brad.',
    unread: 0,
    lastModified: '31 Dec',
    users: [
      {
        id: 9,
        name: 'Brad Pitt',
        avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
        online: false
      }
    ]
  },
  {
    id: 11,
    title: 'Tom Hanks',
    lastMsg: 'Tom called you.',
    unread: 0,
    lastModified: '31 Dec',
    users: [
      {
        id: 10,
        name: 'Tom Hanks',
        avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
        online: true
      }
    ]
  },
  {
    id: 12,
    title: 'Dwayne Johnson',
    lastMsg: 'How can i forget about that man!.',
    unread: 0,
    lastModified: '12 Nov',
    users: [
      {
        id: 11,
        name: 'Dwayne Johnson',
        avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
        online: false
      }
    ]
  },
  {
    id: 13,
    title: 'Johnny Depp',
    lastMsg: 'Alright! let\'s catchup tomorrow!.',
    unread: 0,
    lastModified: '4 Nov',
    users: [
      {
        id: 12,
        name: 'Johnny Depp',
        avatar: 'https://randomuser.me/api/portraits/men/70.jpg',
        online: false
      }
    ]
  },
  {
    id: 14,
    title: 'Leonardo Dicaprio',
    lastMsg: 'How can you leave Rose dude. I hate you!',
    unread: 0,
    lastModified: '26 Oct',
    users: [
      {
        id: 13,
        name: 'Leonardo Dicaprio',
        avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
        online: true
      }
    ]
  },
  {
    id: 15,
    title: 'Tom Cruise',
    lastMsg: 'Happy birthday to you my friend!',
    unread: 0,
    lastModified: '2 Oct',
    users: [
      {
        id: 14,
        name: 'Tom Cruise',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        online: false
      }
    ]
  }
]

const chatMessages = [
  {
    id: 1,
    message: 'Hey! How are you?',
    messageType: 'text',
    sender: {
      id: 3,
      name: 'Scarlett Johansson',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      online: false
    }
  },
  {
    id: 2,
    message: 'Shall we go for Hiking this weekend?',
    messageType: 'text',
    sender: {
      id: 3,
      name: 'Scarlett Johansson',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      online: false
    }
  },
  {
    id: 3,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
    messageType: 'text',
    sender: {
      id: 3,
      name: 'Scarlett Johansson',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      online: false
    }
  },
  {
    id: 4,
    message: 'FRI 3:04 PM',
    messageType: 'datetime'
  },
  {
    id: 5,
    message: 'Hey! How are you?',
    messageType: 'text',
    sender: {
      id: 0
    }
  },
  {
    id: 6,
    message: 'hall we go for Hiking this weekend?',
    messageType: 'text',
    sender: {
      id: 0
    }
  },
  {
    id: 7,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
    messageType: 'text',
    sender: {
      id: 0
    }
  },
  {
    id: 8,
    message: 'SAT 2:10 PM',
    messageType: 'datetime'
  },
  {
    id: 9,
    message: 'Hey! How are you?',
    messageType: 'text',
    sender: {
      id: 3,
      name: 'Scarlett Johansson',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      online: false
    }
  },
  {
    id: 10,
    message: 'Shall we go for Hiking this weekend?',
    messageType: 'text',
    sender: {
      id: 3,
      name: 'Scarlett Johansson',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      online: false
    }
  },
  {
    id: 11,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
    messageType: 'text',
    sender: {
      id: 3,
      name: 'Scarlett Johansson',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      online: false
    }
  },
  {
    id: 12,
    message: '12:40 PM',
    messageType: 'datetime'
  },
  {
    id: 13,
    message: 'Hey! How are you?',
    messageType: 'text',
    sender: {
      id: 0
    }
  },
  {
    id: 14,
    message: 'hall we go for Hiking this weekend?',
    messageType: 'text',
    sender: {
      id: 0
    }
  },
  {
    id: 15,
    message: '',
    messageType: 'photo',
    photo: {
      url: 'https://unsplash.com/photos/8--kuxbxuKU/download?force=true&w=640'
    },
    sender: {
      id: 0
    }
  },
  {
    id: 16,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat lacus laoreet non curabitur gravida.',
    messageType: 'text',
    sender: {
      id: 0
    }
  }
]
Mock.mock(/\/zh\/chats\/stories/, 'get', stories)
Mock.mock(/\/fa\/chats\/stories/, 'get', stories)
Mock.mock(/\/en\/chats\/stories/, 'get', stories)
Mock.mock(/\/zh\/chats\/list/, 'get', chats)
Mock.mock(/\/fa\/chats\/list/, 'get', chats)
Mock.mock(/\/en\/chats\/list/, 'get', chats)
Mock.mock(/\/zh\/chats\/messages/, 'get', chatMessages)
Mock.mock(/\/fa\/chats\/messages/, 'get', chatMessages)
Mock.mock(/\/en\/chats\/messages/, 'get', chatMessages)
