import Mock from 'mockjs2'
import { builder } from '../util'

const enOrgTree = () => {
  return builder([{
    'key': 'key-01',
    'title': 'R & D Center',
    'icon': 'mail',
    'children': [{
      'key': 'key-01-01',
      'title': 'Backend group',
      'icon': null,
      'group': true,
      children: [{
        'key': 'key-01-01-01',
        'title': 'JAVA',
        'icon': null
      },
      {
        'key': 'key-01-01-02',
        'title': 'PHP',
        'icon': null
      },
      {
        'key': 'key-01-01-03',
        'title': 'Golang',
        'icon': null
      }
      ]
    }, {
      'key': 'key-01-02',
      'title': 'Front end group',
      'icon': null,
      'group': true,
      children: [{
        'key': 'key-01-02-01',
        'title': 'React',
        'icon': null
      },
      {
        'key': 'key-01-02-02',
        'title': 'Vue',
        'icon': null
      },
      {
        'key': 'key-01-02-03',
        'title': 'Angular',
        'icon': null
      }
      ]
    }]
  }, {
    'key': 'key-02',
    'title': 'Finance Department',
    'icon': 'dollar',
    'children': [{
      'key': 'key-02-01',
      'title': 'Accounting',
      'icon': null
    }, {
      'key': 'key-02-02',
      'title': 'Cost Control',
      'icon': null
    }, {
      'key': 'key-02-03',
      'title': 'Internal Control',
      'icon': null,
      'children': [{
        'key': 'key-02-03-01',
        'title': 'Financial system construction',
        'icon': null
      },
      {
        'key': 'key-02-03-02',
        'title': 'Accounting',
        'icon': null
      }
      ]
    }]
  }])
}
const faOrgTree = () => {
  return builder([{
    'key': 'key-01',
    'title': 'مرکز تحقیق و توسعه',
    'icon': 'mail',
    'children': [{
      'key': 'key-01-01',
      'title': 'گروه باطن',
      'icon': null,
      'group': true,
      children: [{
        'key': 'key-01-01-01',
        'title': 'جاوا',
        'icon': null
      },
      {
        'key': 'key-01-01-02',
        'title': 'پی‌اچ‌پی',
        'icon': null
      },
      {
        'key': 'key-01-01-03',
        'title': 'گو',
        'icon': null
      }
      ]
    }, {
      'key': 'key-01-02',
      'title': 'گروه انتهای جلو',
      'icon': null,
      'group': true,
      children: [{
        'key': 'key-01-02-01',
        'title': 'ری‌اکت',
        'icon': null
      },
      {
        'key': 'key-01-02-02',
        'title': 'ویو',
        'icon': null
      },
      {
        'key': 'key-01-02-03',
        'title': 'انگولار',
        'icon': null
      }
      ]
    }]
  }, {
    'key': 'key-02',
    'title': 'وزارت دارایی',
    'icon': 'dollar',
    'children': [{
      'key': 'key-02-01',
      'title': 'حسابداری',
      'icon': null
    }, {
      'key': 'key-02-02',
      'title': 'کنترل هزینه',
      'icon': null
    }, {
      'key': 'key-02-03',
      'title': 'کنترل داخلی',
      'icon': null,
      'children': [{
        'key': 'key-02-03-01',
        'title': 'ساخت سیستم مالی',
        'icon': null
      },
      {
        'key': 'key-02-03-02',
        'title': 'حسابداری',
        'icon': null
      }
      ]
    }]
  }])
}

const zhOrgTree = () => {
  return builder([{
    'key': 'key-01',
    'title': '研发中心',
    'icon': 'mail',
    'children': [{
      'key': 'key-01-01',
      'title': '后端组',
      'icon': null,
      'group': true,
      children: [{
        'key': 'key-01-01-01',
        'title': 'JAVA',
        'icon': null
      },
      {
        'key': 'key-01-01-02',
        'title': 'PHP',
        'icon': null
      },
      {
        'key': 'key-01-01-03',
        'title': 'Golang',
        'icon': null
      }
      ]
    }, {
      'key': 'key-01-02',
      'title': '前端组',
      'icon': null,
      'group': true,
      children: [{
        'key': 'key-01-02-01',
        'title': 'React',
        'icon': null
      },
      {
        'key': 'key-01-02-02',
        'title': 'Vue',
        'icon': null
      },
      {
        'key': 'key-01-02-03',
        'title': 'Angular',
        'icon': null
      }
      ]
    }]
  }, {
    'key': 'key-02',
    'title': '财务部',
    'icon': 'dollar',
    'children': [{
      'key': 'key-02-01',
      'title': '会计核算',
      'icon': null
    }, {
      'key': 'key-02-02',
      'title': '成本控制',
      'icon': null
    }, {
      'key': 'key-02-03',
      'title': '内部控制',
      'icon': null,
      'children': [{
        'key': 'key-02-03-01',
        'title': '财务制度建设',
        'icon': null
      },
      {
        'key': 'key-02-03-02',
        'title': '会计核算',
        'icon': null
      }
      ]
    }]
  }])
}

const enRole = () => {
  return builder({
    'data': [{
      'id': 'admin',
      'name': 'administrator',
      'describe': 'Have all permissions',
      'status': 1,
      'creatorId': 'system',
      'createTime': 1497160610259,
      'deleted': 0,
      'permissions': [{
        'roleId': 'admin',
        'permissionId': 'comment',
        'permissionName': 'Comment Management',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'Add',
          'defaultCheck': false
        },
        {
          'action': 'query',
          'describe': 'Inquire',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'Details',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'modify',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': 'delete',
          'defaultCheck': false
        }],
        'actionList': ['delete', 'edit'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'member',
        'permissionName': 'Member Management',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'Add',
          'defaultCheck': false
        },
        {
          'action': 'query',
          'describe': 'Inquire',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'Details',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'modify',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': 'delete',
          'defaultCheck': false
        }
        ],
        'actionList': ['query', 'get', 'edit', 'delete'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'menu',
        'permissionName': 'Menu management',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"import","defaultCheck":false,"describe":"Import"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"edit","defaultCheck":false,"describe":"modify"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'Add',
          'defaultCheck': false
        },
        {
          'action': 'import',
          'describe': 'Import',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'Details',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'modify',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'import'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'order',
        'permissionName': 'Order management',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'Add',
          'defaultCheck': false
        },
        {
          'action': 'query',
          'describe': 'Inquire',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'Details',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'modify',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': 'delete',
          'defaultCheck': false
        }
        ],
        'actionList': ['query', 'add', 'get'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'permission',
        'permissionName': 'authority management',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'Add',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'Details',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'modify',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': 'delete',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'get', 'edit', 'delete'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'role',
        'permissionName': 'Role management',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'Add',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'Details',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'modify',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': 'delete',
          'defaultCheck': false
        }
        ],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'test',
        'permissionName': 'Test permissions',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'user',
        'permissionName': 'User Management',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"import","defaultCheck":false,"describe":"Import"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"},{"action":"export","defaultCheck":false,"describe":"Export"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'Add',
          'defaultCheck': false
        },
        {
          'action': 'import',
          'describe': 'Import',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'Details',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'modify',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': 'delete',
          'defaultCheck': false
        },
        {
          'action': 'export',
          'describe': 'Export',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'get'],
        'dataAccess': null
      }
      ]
    },
    {
      'id': 'svip',
      'name': 'SVIP',
      'describe': 'Super member',
      'status': 1,
      'creatorId': 'system',
      'createTime': 1532417744846,
      'deleted': 0,
      'permissions': [{
        'roleId': 'admin',
        'permissionId': 'comment',
        'permissionName': 'Comment Management',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'Add',
          'defaultCheck': false
        },
        {
          'action': 'query',
          'describe': 'Inquire',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'Details',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'modify',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': 'delete',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'get', 'delete'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'member',
        'permissionName': 'Member Management',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'Add',
          'defaultCheck': false
        },
        {
          'action': 'query',
          'describe': 'Inquire',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'Details',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'query', 'get'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'menu',
        'permissionName': 'Menu management',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"import","defaultCheck":false,"describe":"Import"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"edit","defaultCheck":false,"describe":"modify"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'Add',
          'defaultCheck': false
        },
        {
          'action': 'import',
          'describe': 'Import',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'Details',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'get'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'order',
        'permissionName': 'Order management',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'Add',
          'defaultCheck': false
        },
        {
          'action': 'query',
          'describe': 'Inquire',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'Details',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'modify',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'query'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'permission',
        'permissionName': 'authority management',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'Add',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'Details',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'modify',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'get', 'edit'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'role',
        'permissionName': 'Role management',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'Add',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'modify',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': 'delete',
          'defaultCheck': false
        }
        ],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'test',
        'permissionName': 'Test permissions',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': ['add', 'edit'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'user',
        'permissionName': 'User Management',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"import","defaultCheck":false,"describe":"Import"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"},{"action":"export","defaultCheck":false,"describe":"Export"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'Add',
          'defaultCheck': false
        },
        {
          'action': 'import',
          'describe': 'Import',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'Details',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'modify',
          'defaultCheck': false
        }
        ],
        'actionList': ['add'],
        'dataAccess': null
      }
      ]
    },
    {
      'id': 'user',
      'name': 'Ordinary member',
      'describe': '普通用户，只能Inquire',
      'status': 1,
      'creatorId': 'system',
      'createTime': 1497160610259,
      'deleted': 0,
      'permissions': [{
        'roleId': 'user',
        'permissionId': 'comment',
        'permissionName': 'Comment Management',
        'actions': '[{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"}]',
        'actionEntitySet': [{
          'action': 'query',
          'describe': 'Inquire',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'Details',
          'defaultCheck': false
        }
        ],
        'actionList': ['query'],
        'dataAccess': null
      },

      {
        'roleId': 'user',
        'permissionId': 'marketing',
        'permissionName': 'Marketing management',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'user',
        'permissionId': 'member',
        'permissionName': 'Member Management',
        'actions': '[{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"}]',
        'actionEntitySet': [{
          'action': 'query',
          'describe': 'Inquire',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'Details',
          'defaultCheck': false
        }
        ],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'user',
        'permissionId': 'menu',
        'permissionName': 'Menu management',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      },

      {
        'roleId': 'user',
        'permissionId': 'order',
        'permissionName': 'Order management',
        'actions': '[{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"}]',
        'actionEntitySet': [{
          'action': 'query',
          'describe': 'Inquire',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'Details',
          'defaultCheck': false
        }
        ],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'user',
        'permissionId': 'permission',
        'permissionName': 'authority management',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'user',
        'permissionId': 'role',
        'permissionName': 'Role management',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      },

      {
        'roleId': 'user',
        'permissionId': 'test',
        'permissionName': 'Test permissions',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'user',
        'permissionId': 'user',
        'permissionName': 'User Management',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      }
      ]
    }
    ],
    'pageSize': 10,
    'pageNo': 0,
    'totalPage': 1,
    'totalCount': 5
  })
}

const faRole = () => {
  return builder({
    'data': [{
      'id': 'admin',
      'name': 'مدیر',
      'describe': 'همه مجوزها را داشته باشید',
      'status': 1,
      'creatorId': 'system',
      'createTime': 1497160610259,
      'deleted': 0,
      'permissions': [{
        'roleId': 'admin',
        'permissionId': 'comment',
        'permissionName': 'مدیریت نظر',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'اضافه کردن',
          'defaultCheck': false
        },
        {
          'action': 'query',
          'describe': 'جویا شدن',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'جزئیات',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'تغییر',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': 'حذف',
          'defaultCheck': false
        }],
        'actionList': ['delete', 'edit'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'member',
        'permissionName': 'مدیریت اعضا',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'اضافه کردن',
          'defaultCheck': false
        },
        {
          'action': 'query',
          'describe': 'جویا شدن',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'جزئیات',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'تغییر',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': 'حذف',
          'defaultCheck': false
        }
        ],
        'actionList': ['query', 'get', 'edit', 'delete'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'menu',
        'permissionName': 'مدیریت منو',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"import","defaultCheck":false,"describe":"وارد كردن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"edit","defaultCheck":false,"describe":"تغییر"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'اضافه کردن',
          'defaultCheck': false
        },
        {
          'action': 'import',
          'describe': 'وارد كردن',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'جزئیات',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'تغییر',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'import'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'order',
        'permissionName': 'مدیریت سفارش',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'اضافه کردن',
          'defaultCheck': false
        },
        {
          'action': 'query',
          'describe': 'جویا شدن',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'جزئیات',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'تغییر',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': 'حذف',
          'defaultCheck': false
        }
        ],
        'actionList': ['query', 'add', 'get'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'permission',
        'permissionName': 'مدیریت اقتدار',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'اضافه کردن',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'جزئیات',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'تغییر',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': 'حذف',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'get', 'edit', 'delete'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'role',
        'permissionName': 'مدیریت نقش',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'اضافه کردن',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'جزئیات',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'تغییر',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': 'حذف',
          'defaultCheck': false
        }
        ],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'test',
        'permissionName': 'مجوزهای آزمایش',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'user',
        'permissionName': 'مدیریت کاربر',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"import","defaultCheck":false,"describe":"وارد كردن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"},{"action":"export","defaultCheck":false,"describe":"صادرات"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'اضافه کردن',
          'defaultCheck': false
        },
        {
          'action': 'import',
          'describe': 'وارد كردن',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'جزئیات',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'تغییر',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': 'حذف',
          'defaultCheck': false
        },
        {
          'action': 'export',
          'describe': 'صادرات',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'get'],
        'dataAccess': null
      }
      ]
    },
    {
      'id': 'svip',
      'name': 'SVIP',
      'describe': 'عضو فوق العاده',
      'status': 1,
      'creatorId': 'system',
      'createTime': 1532417744846,
      'deleted': 0,
      'permissions': [{
        'roleId': 'admin',
        'permissionId': 'comment',
        'permissionName': 'مدیریت نظر',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'اضافه کردن',
          'defaultCheck': false
        },
        {
          'action': 'query',
          'describe': 'جویا شدن',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'جزئیات',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'تغییر',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': 'حذف',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'get', 'delete'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'member',
        'permissionName': 'مدیریت اعضا',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'اضافه کردن',
          'defaultCheck': false
        },
        {
          'action': 'query',
          'describe': 'جویا شدن',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'جزئیات',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'query', 'get'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'menu',
        'permissionName': 'مدیریت منو',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"import","defaultCheck":false,"describe":"وارد كردن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"edit","defaultCheck":false,"describe":"تغییر"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'اضافه کردن',
          'defaultCheck': false
        },
        {
          'action': 'import',
          'describe': 'وارد كردن',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'جزئیات',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'get'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'order',
        'permissionName': 'مدیریت سفارش',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'اضافه کردن',
          'defaultCheck': false
        },
        {
          'action': 'query',
          'describe': 'جویا شدن',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'جزئیات',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'تغییر',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'query'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'permission',
        'permissionName': 'مدیریت اقتدار',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'اضافه کردن',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'جزئیات',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'تغییر',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'get', 'edit'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'role',
        'permissionName': 'مدیریت نقش',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'اضافه کردن',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'تغییر',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': 'حذف',
          'defaultCheck': false
        }
        ],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'test',
        'permissionName': 'مجوزهای آزمایش',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': ['add', 'edit'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'user',
        'permissionName': 'مدیریت کاربر',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"import","defaultCheck":false,"describe":"وارد كردن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"},{"action":"export","defaultCheck":false,"describe":"صادرات"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': 'اضافه کردن',
          'defaultCheck': false
        },
        {
          'action': 'import',
          'describe': 'وارد كردن',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'جزئیات',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': 'تغییر',
          'defaultCheck': false
        }
        ],
        'actionList': ['add'],
        'dataAccess': null
      }
      ]
    },
    {
      'id': 'user',
      'name': 'عضو معمولی',
      'describe': '普通用户，只能جویا شدن',
      'status': 1,
      'creatorId': 'system',
      'createTime': 1497160610259,
      'deleted': 0,
      'permissions': [{
        'roleId': 'user',
        'permissionId': 'comment',
        'permissionName': 'مدیریت نظر',
        'actions': '[{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"}]',
        'actionEntitySet': [{
          'action': 'query',
          'describe': 'جویا شدن',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'جزئیات',
          'defaultCheck': false
        }
        ],
        'actionList': ['query'],
        'dataAccess': null
      },

      {
        'roleId': 'user',
        'permissionId': 'marketing',
        'permissionName': 'مدیریت بازاریابی',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'user',
        'permissionId': 'member',
        'permissionName': 'مدیریت اعضا',
        'actions': '[{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"}]',
        'actionEntitySet': [{
          'action': 'query',
          'describe': 'جویا شدن',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'جزئیات',
          'defaultCheck': false
        }
        ],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'user',
        'permissionId': 'menu',
        'permissionName': 'مدیریت منو',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      },

      {
        'roleId': 'user',
        'permissionId': 'order',
        'permissionName': 'مدیریت سفارش',
        'actions': '[{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"}]',
        'actionEntitySet': [{
          'action': 'query',
          'describe': 'جویا شدن',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': 'جزئیات',
          'defaultCheck': false
        }
        ],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'user',
        'permissionId': 'permission',
        'permissionName': 'مدیریت اقتدار',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'user',
        'permissionId': 'role',
        'permissionName': 'مدیریت نقش',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      },

      {
        'roleId': 'user',
        'permissionId': 'test',
        'permissionName': 'مجوزهای آزمایش',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'user',
        'permissionId': 'user',
        'permissionName': 'مدیریت کاربر',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      }
      ]
    }
    ],
    'pageSize': 10,
    'pageNo': 0,
    'totalPage': 1,
    'totalCount': 5
  })
}

const zhRole = () => {
  return builder({
    'data': [{
      'id': 'admin',
      'name': '管理员',
      'describe': '拥有所有权限',
      'status': 1,
      'creatorId': 'system',
      'createTime': 1497160610259,
      'deleted': 0,
      'permissions': [{
        'roleId': 'admin',
        'permissionId': 'comment',
        'permissionName': '评论管理',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        },
        {
          'action': 'query',
          'describe': '查询',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': '修改',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': '删除',
          'defaultCheck': false
        }],
        'actionList': ['delete', 'edit'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'member',
        'permissionName': '会员管理',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        },
        {
          'action': 'query',
          'describe': '查询',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': '修改',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': '删除',
          'defaultCheck': false
        }
        ],
        'actionList': ['query', 'get', 'edit', 'delete'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'menu',
        'permissionName': '菜单管理',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        },
        {
          'action': 'import',
          'describe': '导入',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': '修改',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'import'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'order',
        'permissionName': '订单管理',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        },
        {
          'action': 'query',
          'describe': '查询',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': '修改',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': '删除',
          'defaultCheck': false
        }
        ],
        'actionList': ['query', 'add', 'get'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'permission',
        'permissionName': '权限管理',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': '修改',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': '删除',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'get', 'edit', 'delete'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'role',
        'permissionName': '角色管理',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': '修改',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': '删除',
          'defaultCheck': false
        }
        ],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'test',
        'permissionName': '测试权限',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'user',
        'permissionName': '用户管理',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        },
        {
          'action': 'import',
          'describe': '导入',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': '修改',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': '删除',
          'defaultCheck': false
        },
        {
          'action': 'export',
          'describe': '导出',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'get'],
        'dataAccess': null
      }
      ]
    },
    {
      'id': 'svip',
      'name': 'SVIP',
      'describe': '超级会员',
      'status': 1,
      'creatorId': 'system',
      'createTime': 1532417744846,
      'deleted': 0,
      'permissions': [{
        'roleId': 'admin',
        'permissionId': 'comment',
        'permissionName': '评论管理',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        },
        {
          'action': 'query',
          'describe': '查询',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': '修改',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': '删除',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'get', 'delete'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'member',
        'permissionName': '会员管理',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        },
        {
          'action': 'query',
          'describe': '查询',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'query', 'get'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'menu',
        'permissionName': '菜单管理',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        },
        {
          'action': 'import',
          'describe': '导入',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'get'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'order',
        'permissionName': '订单管理',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        },
        {
          'action': 'query',
          'describe': '查询',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': '修改',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'query'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'permission',
        'permissionName': '权限管理',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': '修改',
          'defaultCheck': false
        }
        ],
        'actionList': ['add', 'get', 'edit'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'role',
        'permissionName': '角色管理',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': '修改',
          'defaultCheck': false
        },
        {
          'action': 'delete',
          'describe': '删除',
          'defaultCheck': false
        }
        ],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'test',
        'permissionName': '测试权限',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': ['add', 'edit'],
        'dataAccess': null
      },
      {
        'roleId': 'admin',
        'permissionId': 'user',
        'permissionName': '用户管理',
        'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
        'actionEntitySet': [{
          'action': 'add',
          'describe': '新增',
          'defaultCheck': false
        },
        {
          'action': 'import',
          'describe': '导入',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        },
        {
          'action': 'edit',
          'describe': '修改',
          'defaultCheck': false
        }
        ],
        'actionList': ['add'],
        'dataAccess': null
      }
      ]
    },
    {
      'id': 'user',
      'name': '普通会员',
      'describe': '普通用户，只能查询',
      'status': 1,
      'creatorId': 'system',
      'createTime': 1497160610259,
      'deleted': 0,
      'permissions': [{
        'roleId': 'user',
        'permissionId': 'comment',
        'permissionName': '评论管理',
        'actions': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
        'actionEntitySet': [{
          'action': 'query',
          'describe': '查询',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        }
        ],
        'actionList': ['query'],
        'dataAccess': null
      },

      {
        'roleId': 'user',
        'permissionId': 'marketing',
        'permissionName': '营销管理',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'user',
        'permissionId': 'member',
        'permissionName': '会员管理',
        'actions': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
        'actionEntitySet': [{
          'action': 'query',
          'describe': '查询',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        }
        ],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'user',
        'permissionId': 'menu',
        'permissionName': '菜单管理',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      },

      {
        'roleId': 'user',
        'permissionId': 'order',
        'permissionName': '订单管理',
        'actions': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
        'actionEntitySet': [{
          'action': 'query',
          'describe': '查询',
          'defaultCheck': false
        },
        {
          'action': 'get',
          'describe': '详情',
          'defaultCheck': false
        }
        ],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'user',
        'permissionId': 'permission',
        'permissionName': '权限管理',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'user',
        'permissionId': 'role',
        'permissionName': '角色管理',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      },

      {
        'roleId': 'user',
        'permissionId': 'test',
        'permissionName': '测试权限',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      },
      {
        'roleId': 'user',
        'permissionId': 'user',
        'permissionName': '用户管理',
        'actions': '[]',
        'actionEntitySet': [],
        'actionList': null,
        'dataAccess': null
      }
      ]
    }
    ],
    'pageSize': 10,
    'pageNo': 0,
    'totalPage': 1,
    'totalCount': 5
  })
}

const faPermissionNoPager = () => {
  return builder([{
    'id': 'marketing',
    'name': 'مدیریت بازاریابی',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
    'sptDaTypes': null,
    'optionalFields': null,
    'parents': null,
    'type': null,
    'deleted': 0,
    'actions': [
      'add',
      'query',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'member',
    'name': 'مدیریت اعضا',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'query',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'menu',
    'name': 'مدیریت منو',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"import","defaultCheck":false,"describe":"وارد كردن"},{"action":"get","defaultCheck":false,"describe":"جویا شدن"},{"action":"edit","defaultCheck":false,"describe":"تغییر"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'import',
      'get',
      'edit'
    ]
  },
  {
    'id': 'order',
    'name': 'مدیریت سفارش',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'query',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'permission',
    'name': 'مدیریت اقتدار',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"get","defaultCheck":false,"describe":"جویا شدن"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'role',
    'name': 'مدیریت نقش',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"get","defaultCheck":false,"describe":"جویا شدن"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'test',
    'name': 'مجوزهای آزمایش',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'get'
    ]
  },
  {
    'id': 'user',
    'name': 'مدیریت کاربر',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"},{"action":"import","defaultCheck":false,"describe":"وارد كردن"},{"action":"export","defaultCheck":false,"describe":"صادرات"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'get'
    ]
  }
  ])
}
const enPermissionNoPager = () => {
  return builder([{
    'id': 'marketing',
    'name': 'Marketing management',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
    'sptDaTypes': null,
    'optionalFields': null,
    'parents': null,
    'type': null,
    'deleted': 0,
    'actions': [
      'add',
      'query',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'member',
    'name': 'Member Management',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'query',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'menu',
    'name': 'Menu management',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"import","defaultCheck":false,"describe":"Import"},{"action":"get","defaultCheck":false,"describe":"Inquire"},{"action":"edit","defaultCheck":false,"describe":"modify"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'import',
      'get',
      'edit'
    ]
  },
  {
    'id': 'order',
    'name': 'Order management',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'query',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'permission',
    'name': 'authority management',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"get","defaultCheck":false,"describe":"Inquire"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'role',
    'name': 'Role management',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"get","defaultCheck":false,"describe":"Inquire"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'test',
    'name': 'Test permissions',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"get","defaultCheck":false,"describe":"Details"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'get'
    ]
  },
  {
    'id': 'user',
    'name': 'User Management',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"},{"action":"import","defaultCheck":false,"describe":"Import"},{"action":"export","defaultCheck":false,"describe":"Export"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'get'
    ]
  }
  ])
}

const zhPermissionNoPager = () => {
  return builder([{
    'id': 'marketing',
    'name': '营销管理',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
    'sptDaTypes': null,
    'optionalFields': null,
    'parents': null,
    'type': null,
    'deleted': 0,
    'actions': [
      'add',
      'query',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'member',
    'name': '会员管理',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'query',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'menu',
    'name': '菜单管理',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"edit","defaultCheck":false,"describe":"修改"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'import',
      'get',
      'edit'
    ]
  },
  {
    'id': 'order',
    'name': '订单管理',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'query',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'permission',
    'name': '权限管理',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'role',
    'name': '角色管理',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'get',
      'edit',
      'delete'
    ]
  },
  {
    'id': 'test',
    'name': '测试权限',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'get'
    ]
  },
  {
    'id': 'user',
    'name': '用户管理',
    'describe': null,
    'status': 1,
    'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
    'sptDaTypes': null,
    'optionalFields': '[]',
    'parents': null,
    'type': 'default',
    'deleted': 0,
    'actions': [
      'add',
      'get'
    ]
  }
  ])
}

const enPermissions = () => {
  return builder({
    'data': [{
      'id': 'marketing',
      'name': 'Marketing management',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
      'sptDaTypes': null,
      'optionalFields': null,
      'parents': null,
      'type': null,
      'deleted': 0,
      'actions': [
        'add',
        'query',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'member',
      'name': 'Member Management',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'query',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'menu',
      'name': 'Menu management',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"import","defaultCheck":false,"describe":"Import"},{"action":"get","defaultCheck":false,"describe":"Inquire"},{"action":"edit","defaultCheck":false,"describe":"modify"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'import',
        'get',
        'edit'
      ]
    },
    {
      'id': 'order',
      'name': 'Order management',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'query',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'permission',
      'name': 'authority management',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"get","defaultCheck":false,"describe":"Inquire"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'role',
      'name': 'Role management',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"get","defaultCheck":false,"describe":"Inquire"},{"action":"edit","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'test',
      'name': 'Test permissions',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"get","defaultCheck":false,"describe":"Details"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get'
      ]
    },
    {
      'id': 'user',
      'name': 'User Management',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","describe":"Add","defaultCheck":false},{"action":"get","describe":"Inquire","defaultCheck":false}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get'
      ]
    }
    ],
    'pageSize': 10,
    'pageNo': 0,
    'totalPage': 1,
    'totalCount': 5
  })
}

const faPermissions = () => {
  return builder({
    'data': [{
      'id': 'marketing',
      'name': 'مدیریت بازاریابی',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
      'sptDaTypes': null,
      'optionalFields': null,
      'parents': null,
      'type': null,
      'deleted': 0,
      'actions': [
        'add',
        'query',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'member',
      'name': 'مدیریت اعضا',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'query',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'menu',
      'name': 'مدیریت منو',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"import","defaultCheck":false,"describe":"وارد كردن"},{"action":"get","defaultCheck":false,"describe":"جویا شدن"},{"action":"edit","defaultCheck":false,"describe":"تغییر"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'import',
        'get',
        'edit'
      ]
    },
    {
      'id': 'order',
      'name': 'مدیریت سفارش',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'query',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'permission',
      'name': 'مدیریت اقتدار',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"get","defaultCheck":false,"describe":"جویا شدن"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'role',
      'name': 'مدیریت نقش',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"get","defaultCheck":false,"describe":"جویا شدن"},{"action":"edit","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'test',
      'name': 'مجوزهای آزمایش',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get'
      ]
    },
    {
      'id': 'user',
      'name': 'مدیریت کاربر',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","describe":"اضافه کردن","defaultCheck":false},{"action":"get","describe":"جویا شدن","defaultCheck":false}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get'
      ]
    }
    ],
    'pageSize': 10,
    'pageNo': 0,
    'totalPage': 1,
    'totalCount': 5
  })
}

const zhPermissions = () => {
  return builder({
    'data': [{
      'id': 'marketing',
      'name': '营销管理',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      'sptDaTypes': null,
      'optionalFields': null,
      'parents': null,
      'type': null,
      'deleted': 0,
      'actions': [
        'add',
        'query',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'member',
      'name': '会员管理',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'query',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'menu',
      'name': '菜单管理',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"edit","defaultCheck":false,"describe":"修改"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'import',
        'get',
        'edit'
      ]
    },
    {
      'id': 'order',
      'name': '订单管理',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'query',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'permission',
      'name': '权限管理',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'role',
      'name': '角色管理',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"查询"},{"action":"edit","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get',
        'edit',
        'delete'
      ]
    },
    {
      'id': 'test',
      'name': '测试权限',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get'
      ]
    },
    {
      'id': 'user',
      'name': '用户管理',
      'describe': null,
      'status': 1,
      'actionData': '[{"action":"add","describe":"新增","defaultCheck":false},{"action":"get","describe":"查询","defaultCheck":false}]',
      'sptDaTypes': null,
      'optionalFields': '[]',
      'parents': null,
      'type': 'default',
      'deleted': 0,
      'actions': [
        'add',
        'get'
      ]
    }
    ],
    'pageSize': 10,
    'pageNo': 0,
    'totalPage': 1,
    'totalCount': 5
  })
}

Mock.mock(/\/zh\/org\/tree/, 'get', zhOrgTree)
Mock.mock(/\/fa\/org\/tree/, 'get', faOrgTree)
Mock.mock(/\/en\/org\/tree/, 'get', enOrgTree)
Mock.mock(/\/zh\/role/, 'get', zhRole)
Mock.mock(/\/fa\/role/, 'get', faRole)
Mock.mock(/\/en\/role/, 'get', enRole)
Mock.mock(/\/zh\/permission\/no-pager/, 'get', zhPermissionNoPager)
Mock.mock(/\/fa\/permission\/no-pager/, 'get', faPermissionNoPager)
Mock.mock(/\/en\/permission\/no-pager/, 'get', enPermissionNoPager)
Mock.mock(/\/zh\/permission/, 'get', zhPermissions)
Mock.mock(/\/fa\/permission/, 'get', faPermissions)
Mock.mock(/\/en\/permission/, 'get', enPermissions)
