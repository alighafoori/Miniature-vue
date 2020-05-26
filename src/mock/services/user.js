import Mock from 'mockjs2'
import { builder } from '../util'

const enInfo = (options) => {
  console.log('options', options)
  const userInfo = {
    'id': '4291d7da9005377ec9aec4a71ea837f',
    'name': 'Amano Toko',
    'username': 'admin',
    'password': '',
    'avatar': '/avatar2.jpg',
    'status': 1,
    'telephone': '',
    'lastLoginIp': '27.154.74.117',
    'lastLoginTime': 1534837621348,
    'creatorId': 'admin',
    'createTime': 1497160610259,
    'merchantCode': 'TLif2btpzg079h15bk',
    'deleted': 0,
    'roleId': 'admin',
    'role': {}
  }
  // role
  const roleObj = {
    'id': 'admin',
    'name': 'administrator',
    'describe': 'Have all permissions',
    'status': 1,
    'creatorId': 'system',
    'createTime': 1497160610259,
    'deleted': 0,
    'permissions': [{
      'roleId': 'admin',
      'permissionId': 'dashboard',
      'permissionName': 'dash board',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"update","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'Inquire',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Details',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'delete',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'exception',
      'permissionName': 'Abnormal page permissions',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"update","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'Inquire',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Details',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'delete',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'result',
      'permissionName': 'Result authority',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"update","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'Inquire',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Details',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'delete',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'profile',
      'permissionName': 'Detailed page permissions',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"update","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'Inquire',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Details',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'delete',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'table',
      'permissionName': 'Form permissions',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"import","defaultCheck":false,"describe":"Import"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"update","defaultCheck":false,"describe":"modify"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'import',
        'describe': 'Import',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Details',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'modify',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'form',
      'permissionName': 'Form permissions',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"update","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Details',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'Inquire',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'delete',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'order',
      'permissionName': 'Order management',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"update","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'Inquire',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Details',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'delete',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'permission',
      'permissionName': 'authority management',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"update","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Details',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'delete',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'role',
      'permissionName': 'Role management',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"update","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Details',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'delete',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'table',
      'permissionName': 'Table management',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"query","defaultCheck":false,"describe":"Inquire"},{"action":"update","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Details',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'Inquire',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'delete',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'user',
      'permissionName': 'User Management',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"import","defaultCheck":false,"describe":"Import"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"update","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"},{"action":"export","defaultCheck":false,"describe":"Export"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'Add',
        'defaultCheck': false
      }, {
        'action': 'import',
        'describe': 'Import',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'Details',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'modify',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'delete',
        'defaultCheck': false
      }, {
        'action': 'export',
        'describe': 'Export',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }]
  }

  roleObj.permissions.push({
    'roleId': 'admin',
    'permissionId': 'support',
    'permissionName': 'Super module',
    'actions': '[{"action":"add","defaultCheck":false,"describe":"Add"},{"action":"import","defaultCheck":false,"describe":"Import"},{"action":"get","defaultCheck":false,"describe":"Details"},{"action":"update","defaultCheck":false,"describe":"modify"},{"action":"delete","defaultCheck":false,"describe":"delete"},{"action":"export","defaultCheck":false,"describe":"Export"}]',
    'actionEntitySet': [{
      'action': 'add',
      'describe': 'Add',
      'defaultCheck': false
    }, {
      'action': 'import',
      'describe': 'Import',
      'defaultCheck': false
    }, {
      'action': 'get',
      'describe': 'Details',
      'defaultCheck': false
    }, {
      'action': 'update',
      'describe': 'modify',
      'defaultCheck': false
    }, {
      'action': 'delete',
      'describe': 'delete',
      'defaultCheck': false
    }, {
      'action': 'export',
      'describe': 'Export',
      'defaultCheck': false
    }],
    'actionList': null,
    'dataAccess': null
  })

  userInfo.role = roleObj
  return builder(userInfo)
}

const faInfo = (options) => {
  console.log('options', options)
  const userInfo = {
    'id': '4291d7da9005377ec9aec4a71ea837f',
    'name': 'آمانو توکو',
    'username': 'admin',
    'password': '',
    'avatar': '/avatar2.jpg',
    'status': 1,
    'telephone': '',
    'lastLoginIp': '27.154.74.117',
    'lastLoginTime': 1534837621348,
    'creatorId': 'admin',
    'createTime': 1497160610259,
    'merchantCode': 'TLif2btpzg079h15bk',
    'deleted': 0,
    'roleId': 'admin',
    'role': {}
  }
  // role
  const roleObj = {
    'id': 'admin',
    'name': 'مدیر',
    'describe': 'همه مجوزها را داشته باشید',
    'status': 1,
    'creatorId': 'system',
    'createTime': 1497160610259,
    'deleted': 0,
    'permissions': [{
      'roleId': 'admin',
      'permissionId': 'dashboard',
      'permissionName': 'داشبورد',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"update","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'اضافه کردن',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'جویا شدن',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'جزئیات',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'تغییر',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'حذف',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'exception',
      'permissionName': 'مجوزهای صفحه غیر طبیعی',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"update","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'اضافه کردن',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'جویا شدن',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'جزئیات',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'تغییر',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'حذف',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'result',
      'permissionName': 'اقتدار نتیجه',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"update","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'اضافه کردن',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'جویا شدن',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'جزئیات',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'تغییر',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'حذف',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'profile',
      'permissionName': 'مجوزهای صفحه دقیق',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"update","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'اضافه کردن',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'جویا شدن',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'جزئیات',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'تغییر',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'حذف',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'table',
      'permissionName': 'مجوزهای فرم',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"import","defaultCheck":false,"describe":"وارد كردن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"update","defaultCheck":false,"describe":"تغییر"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'اضافه کردن',
        'defaultCheck': false
      }, {
        'action': 'import',
        'describe': 'وارد كردن',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'جزئیات',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'تغییر',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'form',
      'permissionName': 'مجوزهای فرم',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"update","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'اضافه کردن',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'جزئیات',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'جویا شدن',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'تغییر',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'حذف',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'order',
      'permissionName': 'مدیریت سفارش',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"update","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'اضافه کردن',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'جویا شدن',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'جزئیات',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'تغییر',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'حذف',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'permission',
      'permissionName': 'مدیریت اقتدار',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"update","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'اضافه کردن',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'جزئیات',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'تغییر',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'حذف',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'role',
      'permissionName': 'مدیریت نقش',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"update","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'اضافه کردن',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'جزئیات',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'تغییر',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'حذف',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'table',
      'permissionName': 'مدیریت جدول',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"query","defaultCheck":false,"describe":"جویا شدن"},{"action":"update","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'اضافه کردن',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'جزئیات',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': 'جویا شدن',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'تغییر',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'حذف',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'user',
      'permissionName': 'مدیریت کاربر',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"import","defaultCheck":false,"describe":"وارد كردن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"update","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"},{"action":"export","defaultCheck":false,"describe":"صادرات"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': 'اضافه کردن',
        'defaultCheck': false
      }, {
        'action': 'import',
        'describe': 'وارد كردن',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': 'جزئیات',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': 'تغییر',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': 'حذف',
        'defaultCheck': false
      }, {
        'action': 'export',
        'describe': 'صادرات',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }]
  }

  roleObj.permissions.push({
    'roleId': 'admin',
    'permissionId': 'support',
    'permissionName': 'ماژول فوق العاده',
    'actions': '[{"action":"add","defaultCheck":false,"describe":"اضافه کردن"},{"action":"import","defaultCheck":false,"describe":"وارد كردن"},{"action":"get","defaultCheck":false,"describe":"جزئیات"},{"action":"update","defaultCheck":false,"describe":"تغییر"},{"action":"delete","defaultCheck":false,"describe":"حذف"},{"action":"export","defaultCheck":false,"describe":"صادرات"}]',
    'actionEntitySet': [{
      'action': 'add',
      'describe': 'اضافه کردن',
      'defaultCheck': false
    }, {
      'action': 'import',
      'describe': 'وارد كردن',
      'defaultCheck': false
    }, {
      'action': 'get',
      'describe': 'جزئیات',
      'defaultCheck': false
    }, {
      'action': 'update',
      'describe': 'تغییر',
      'defaultCheck': false
    }, {
      'action': 'delete',
      'describe': 'حذف',
      'defaultCheck': false
    }, {
      'action': 'export',
      'describe': 'صادرات',
      'defaultCheck': false
    }],
    'actionList': null,
    'dataAccess': null
  })

  userInfo.role = roleObj
  return builder(userInfo)
}
const zhInfo = (options) => {
  console.log('options', options)
  const userInfo = {
    'id': '4291d7da9005377ec9aec4a71ea837f',
    'name': '天野远子',
    'username': 'admin',
    'password': '',
    'avatar': '/avatar2.jpg',
    'status': 1,
    'telephone': '',
    'lastLoginIp': '27.154.74.117',
    'lastLoginTime': 1534837621348,
    'creatorId': 'admin',
    'createTime': 1497160610259,
    'merchantCode': 'TLif2btpzg079h15bk',
    'deleted': 0,
    'roleId': 'admin',
    'role': {}
  }
  // role
  const roleObj = {
    'id': 'admin',
    'name': '管理员',
    'describe': '拥有所有权限',
    'status': 1,
    'creatorId': 'system',
    'createTime': 1497160610259,
    'deleted': 0,
    'permissions': [{
      'roleId': 'admin',
      'permissionId': 'dashboard',
      'permissionName': '仪表盘',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': '新增',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': '查询',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': '详情',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': '修改',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': '删除',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'exception',
      'permissionName': '异常页面权限',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': '新增',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': '查询',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': '详情',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': '修改',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': '删除',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'result',
      'permissionName': '结果权限',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': '新增',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': '查询',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': '详情',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': '修改',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': '删除',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'profile',
      'permissionName': '详细页权限',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': '新增',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': '查询',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': '详情',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': '修改',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': '删除',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'table',
      'permissionName': '表格权限',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': '新增',
        'defaultCheck': false
      }, {
        'action': 'import',
        'describe': '导入',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': '详情',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': '修改',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'form',
      'permissionName': '表单权限',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': '新增',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': '详情',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': '查询',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': '修改',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': '删除',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'order',
      'permissionName': '订单管理',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': '新增',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': '查询',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': '详情',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': '修改',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': '删除',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'permission',
      'permissionName': '权限管理',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': '新增',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': '详情',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': '修改',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': '删除',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'role',
      'permissionName': '角色管理',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': '新增',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': '详情',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': '修改',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': '删除',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'table',
      'permissionName': '桌子管理',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"query","defaultCheck":false,"describe":"查询"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': '新增',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': '详情',
        'defaultCheck': false
      }, {
        'action': 'query',
        'describe': '查询',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': '修改',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': '删除',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }, {
      'roleId': 'admin',
      'permissionId': 'user',
      'permissionName': '用户管理',
      'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
      'actionEntitySet': [{
        'action': 'add',
        'describe': '新增',
        'defaultCheck': false
      }, {
        'action': 'import',
        'describe': '导入',
        'defaultCheck': false
      }, {
        'action': 'get',
        'describe': '详情',
        'defaultCheck': false
      }, {
        'action': 'update',
        'describe': '修改',
        'defaultCheck': false
      }, {
        'action': 'delete',
        'describe': '删除',
        'defaultCheck': false
      }, {
        'action': 'export',
        'describe': '导出',
        'defaultCheck': false
      }],
      'actionList': null,
      'dataAccess': null
    }]
  }

  roleObj.permissions.push({
    'roleId': 'admin',
    'permissionId': 'support',
    'permissionName': '超级模块',
    'actions': '[{"action":"add","defaultCheck":false,"describe":"新增"},{"action":"import","defaultCheck":false,"describe":"导入"},{"action":"get","defaultCheck":false,"describe":"详情"},{"action":"update","defaultCheck":false,"describe":"修改"},{"action":"delete","defaultCheck":false,"describe":"删除"},{"action":"export","defaultCheck":false,"describe":"导出"}]',
    'actionEntitySet': [{
      'action': 'add',
      'describe': '新增',
      'defaultCheck': false
    }, {
      'action': 'import',
      'describe': '导入',
      'defaultCheck': false
    }, {
      'action': 'get',
      'describe': '详情',
      'defaultCheck': false
    }, {
      'action': 'update',
      'describe': '修改',
      'defaultCheck': false
    }, {
      'action': 'delete',
      'describe': '删除',
      'defaultCheck': false
    }, {
      'action': 'export',
      'describe': '导出',
      'defaultCheck': false
    }],
    'actionList': null,
    'dataAccess': null
  })

  userInfo.role = roleObj
  return builder(userInfo)
}

const faUserNav = (options) => {
  const nav = [
    // dashboard
    {
      'name': 'dashboard',
      'parentId': 0,
      'id': 1,
      'meta': {
        'icon': 'dashboard',
        'title': 'داشبورد',
        'show': true
      },
      'component': 'RouteView',
      'redirect': '/dashboard/workplace'
    },
    {
      'name': 'workplace',
      'parentId': 1,
      'id': 7,
      'meta': {
        'title': 'میز کار',
        'show': true
      },
      'component': 'Workplace'
    },
    {
      'name': 'monitor',
      'path': 'https://www.baidu.com/',
      'parentId': 1,
      'id': 3,
      'meta': {
        'title': 'صفحه نظارت (خارجی)',
        'target': '_blank',
        'show': true
      }
    },
    {
      'name': 'Analysis',
      'parentId': 1,
      'id': 2,
      'meta': {
        'title': 'صفحه تجزیه و تحلیل',
        'show': true
      },
      'component': 'Analysis',
      'path': '/dashboard/analysis'
    },
    {
      'name': 'tests',
      'parentId': 1,
      'id': 8,
      'meta': {
        'title': 'عملکرد تست',
        'show': true
      },
      'component': 'TestWork'
    },

    // form
    {
      'name': 'form',
      'parentId': 0,
      'id': 10,
      'meta': {
        'icon': 'form',
        'title': 'صفحه فرم'
      },
      'redirect': '/form/base-form',
      'component': 'PageView'
    },
    {
      'name': 'basic-form',
      'parentId': 10,
      'id': 6,
      'meta': {
        'title': 'فرم اساسی'
      },
      'component': 'BasicForm'
    },
    {
      'name': 'step-form',
      'parentId': 10,
      'id': 5,
      'meta': {
        'title': 'فرم مرحله به مرحله'
      },
      'component': 'StepForm'
    },
    {
      'name': 'advanced-form',
      'parentId': 10,
      'id': 4,
      'meta': {
        'title': 'فرم های پیشرفته'
      },
      'component': 'AdvanceForm'
    },

    // list
    {
      'name': 'list',
      'parentId': 0,
      'id': 10010,
      'meta': {
        'icon': 'table',
        'title': 'لیست',
        'show': true
      },
      'redirect': '/list/table-list',
      'component': 'PageView'
    },
    {
      'name': 'table-list',
      'parentId': 10010,
      'id': 10011,
      'path': '/list/table-list/:pageNo([1-9]\\d*)?',
      'meta': {
        'title': 'پرسشنامه',
        'show': true
      },
      'component': 'TableList'
    },
    {
      'name': 'basic-list',
      'parentId': 10010,
      'id': 10012,
      'meta': {
        'title': 'لیست استاندارد',
        'show': true
      },
      'component': 'StandardList'
    },
    {
      'name': 'card',
      'parentId': 10010,
      'id': 10013,
      'meta': {
        'title': 'لیست کارت',
        'show': true
      },
      'component': 'CardList'
    },
    {
      'name': 'search',
      'parentId': 10010,
      'id': 10014,
      'meta': {
        'title': 'لیست جستجو',
        'show': true
      },
      'redirect': '/list/search/article',
      'component': 'SearchLayout'
    },
    {
      'name': 'article',
      'parentId': 10014,
      'id': 10015,
      'meta': {
        'title': 'لیست جستجو（文章）',
        'show': true
      },
      'component': 'SearchArticles'
    },
    {
      'name': 'project',
      'parentId': 10014,
      'id': 10016,
      'meta': {
        'title': 'لیست جستجو（项目）',
        'show': true
      },
      'component': 'SearchProjects'
    },
    {
      'name': 'application',
      'parentId': 10014,
      'id': 10017,
      'meta': {
        'title': 'لیست جستجو（应用）',
        'show': true
      },
      'component': 'SearchApplications'
    },

    // profile
    {
      'name': 'profile',
      'parentId': 0,
      'id': 10018,
      'meta': {
        'title': 'صفحه جزئیات',
        'icon': 'profile',
        'show': true
      },
      'redirect': '/profile/basic',
      'component': 'RouteView'
    },
    {
      'name': 'basic',
      'parentId': 10018,
      'id': 10019,
      'meta': {
        'title': '基础صفحه جزئیات',
        'show': true
      },
      'component': 'ProfileBasic'
    },
    {
      'name': 'advanced',
      'parentId': 10018,
      'id': 10020,
      'meta': {
        'title': '高级صفحه جزئیات',
        'show': true
      },
      'component': 'ProfileAdvanced'
    },
    {
      'name': 'result',
      'parentId': 0,
      'id': 10021,
      'meta': {
        'title': 'صفحه نتایج',
        'icon': 'check-circle-o',
        'show': true
      },
      'redirect': '/result/success',
      'component': 'PageView'
    },
    {
      'name': 'success',
      'parentId': 10021,
      'id': 10022,
      'meta': {
        'title': 'موفقیت',
        'hiddenHeaderContent': true,
        'show': true
      },
      'component': 'ResultSuccess'
    },
    {
      'name': 'fail',
      'parentId': 10021,
      'id': 10023,
      'meta': {
        'title': 'شکست',
        'hiddenHeaderContent': true,
        'show': true
      },
      'component': 'ResultFail'
    },

    // Exception
    {
      'name': 'exception',
      'parentId': 0,
      'id': 10024,
      'meta': {
        'title': 'صفحه استثناء',
        'icon': 'warning',
        'show': true
      },
      'redirect': '/exception/403',
      'component': 'RouteView'
    },
    {
      'name': '403',
      'parentId': 10024,
      'id': 10025,
      'meta': {
        'title': '403',
        'show': true
      },
      'component': 'Exception403'
    },
    {
      'name': '404',
      'parentId': 10024,
      'id': 10026,
      'meta': {
        'title': '404',
        'show': true
      },
      'component': 'Exception404'
    },
    {
      'name': '500',
      'parentId': 10024,
      'id': 10027,
      'meta': {
        'title': '500',
        'show': true
      },
      'component': 'Exception500'
    },

    // account
    {
      'name': 'account',
      'parentId': 0,
      'id': 10028,
      'meta': {
        'title': 'صفحه شخصی',
        'icon': 'user',
        'show': true
      },
      'redirect': '/account/center',
      'component': 'RouteView'
    },
    {
      'name': 'center',
      'parentId': 10028,
      'id': 10029,
      'meta': {
        'title': 'مرکز شخصی',
        'show': true
      },
      'component': 'AccountCenter'
    },
    {
      'name': 'settings',
      'parentId': 10028,
      'id': 10030,
      'meta': {
        'title': 'تنظیمات شخصی',
        'hideHeader': true,
        'hideChildren': true,
        'show': true
      },
      'redirect': '/account/settings/base',
      'component': 'AccountSettings'
    },
    {
      'name': 'BaseSettings',
      'path': '/account/settings/base',
      'parentId': 10030,
      'id': 10031,
      'meta': {
        'title': 'تنظیمات پایه',
        'show': false
      },
      'component': 'BaseSettings'
    },
    {
      'name': 'SecuritySettings',
      'path': '/account/settings/security',
      'parentId': 10030,
      'id': 10032,
      'meta': {
        'title': 'تنظیمات امنیتی',
        'show': false
      },
      'component': 'SecuritySettings'
    },
    {
      'name': 'CustomSettings',
      'path': '/account/settings/custom',
      'parentId': 10030,
      'id': 10033,
      'meta': {
        'title': 'تنظیمات شخصی شده',
        'show': false
      },
      'component': 'CustomSettings'
    },
    {
      'name': 'BindingSettings',
      'path': '/account/settings/binding',
      'parentId': 10030,
      'id': 10034,
      'meta': {
        'title': 'الزام آور بودن حساب',
        'show': false
      },
      'component': 'BindingSettings'
    },
    {
      'name': 'NotificationSettings',
      'path': '/account/settings/notification',
      'parentId': 10030,
      'id': 10034,
      'meta': {
        'title': 'اطلاع رسانی پیام جدید',
        'show': false
      },
      'component': 'NotificationSettings'
    }
  ]
  const json = builder(nav)
  console.log('json', json)
  return json
}
const enUserNav = (options) => {
  const nav = [
    // dashboard
    {
      'name': 'dashboard',
      'parentId': 0,
      'id': 1,
      'meta': {
        'icon': 'dashboard',
        'title': 'dash board',
        'show': true
      },
      'component': 'RouteView',
      'redirect': '/dashboard/workplace'
    },
    {
      'name': 'workplace',
      'parentId': 1,
      'id': 7,
      'meta': {
        'title': 'Workbench',
        'show': true
      },
      'component': 'Workplace'
    },
    {
      'name': 'monitor',
      'path': 'https://www.baidu.com/',
      'parentId': 1,
      'id': 3,
      'meta': {
        'title': 'Monitoring page (external)',
        'target': '_blank',
        'show': true
      }
    },
    {
      'name': 'Analysis',
      'parentId': 1,
      'id': 2,
      'meta': {
        'title': 'Analysis page',
        'show': true
      },
      'component': 'Analysis',
      'path': '/dashboard/analysis'
    },
    {
      'name': 'tests',
      'parentId': 1,
      'id': 8,
      'meta': {
        'title': 'Test function',
        'show': true
      },
      'component': 'TestWork'
    },

    // form
    {
      'name': 'form',
      'parentId': 0,
      'id': 10,
      'meta': {
        'icon': 'form',
        'title': 'Form page'
      },
      'redirect': '/form/base-form',
      'component': 'PageView'
    },
    {
      'name': 'basic-form',
      'parentId': 10,
      'id': 6,
      'meta': {
        'title': 'Basic form'
      },
      'component': 'BasicForm'
    },
    {
      'name': 'step-form',
      'parentId': 10,
      'id': 5,
      'meta': {
        'title': 'Step-by-step form'
      },
      'component': 'StepForm'
    },
    {
      'name': 'advanced-form',
      'parentId': 10,
      'id': 4,
      'meta': {
        'title': 'Advanced forms'
      },
      'component': 'AdvanceForm'
    },

    // list
    {
      'name': 'list',
      'parentId': 0,
      'id': 10010,
      'meta': {
        'icon': 'table',
        'title': 'List',
        'show': true
      },
      'redirect': '/list/table-list',
      'component': 'PageView'
    },
    {
      'name': 'table-list',
      'parentId': 10010,
      'id': 10011,
      'path': '/list/table-list/:pageNo([1-9]\\d*)?',
      'meta': {
        'title': 'Inquiry form',
        'show': true
      },
      'component': 'TableList'
    },
    {
      'name': 'basic-list',
      'parentId': 10010,
      'id': 10012,
      'meta': {
        'title': 'Standard list',
        'show': true
      },
      'component': 'StandardList'
    },
    {
      'name': 'card',
      'parentId': 10010,
      'id': 10013,
      'meta': {
        'title': 'Card list',
        'show': true
      },
      'component': 'CardList'
    },
    {
      'name': 'search',
      'parentId': 10010,
      'id': 10014,
      'meta': {
        'title': 'Search list',
        'show': true
      },
      'redirect': '/list/search/article',
      'component': 'SearchLayout'
    },
    {
      'name': 'article',
      'parentId': 10014,
      'id': 10015,
      'meta': {
        'title': 'Search list（文章）',
        'show': true
      },
      'component': 'SearchArticles'
    },
    {
      'name': 'project',
      'parentId': 10014,
      'id': 10016,
      'meta': {
        'title': 'Search list（项目）',
        'show': true
      },
      'component': 'SearchProjects'
    },
    {
      'name': 'application',
      'parentId': 10014,
      'id': 10017,
      'meta': {
        'title': 'Search list（应用）',
        'show': true
      },
      'component': 'SearchApplications'
    },

    // profile
    {
      'name': 'profile',
      'parentId': 0,
      'id': 10018,
      'meta': {
        'title': 'Details page',
        'icon': 'profile',
        'show': true
      },
      'redirect': '/profile/basic',
      'component': 'RouteView'
    },
    {
      'name': 'basic',
      'parentId': 10018,
      'id': 10019,
      'meta': {
        'title': '基础Details page',
        'show': true
      },
      'component': 'ProfileBasic'
    },
    {
      'name': 'advanced',
      'parentId': 10018,
      'id': 10020,
      'meta': {
        'title': '高级Details page',
        'show': true
      },
      'component': 'ProfileAdvanced'
    },
    {
      'name': 'result',
      'parentId': 0,
      'id': 10021,
      'meta': {
        'title': 'Results page',
        'icon': 'check-circle-o',
        'show': true
      },
      'redirect': '/result/success',
      'component': 'PageView'
    },
    {
      'name': 'success',
      'parentId': 10021,
      'id': 10022,
      'meta': {
        'title': 'success',
        'hiddenHeaderContent': true,
        'show': true
      },
      'component': 'ResultSuccess'
    },
    {
      'name': 'fail',
      'parentId': 10021,
      'id': 10023,
      'meta': {
        'title': 'failure',
        'hiddenHeaderContent': true,
        'show': true
      },
      'component': 'ResultFail'
    },

    // Exception
    {
      'name': 'exception',
      'parentId': 0,
      'id': 10024,
      'meta': {
        'title': 'Exception page',
        'icon': 'warning',
        'show': true
      },
      'redirect': '/exception/403',
      'component': 'RouteView'
    },
    {
      'name': '403',
      'parentId': 10024,
      'id': 10025,
      'meta': {
        'title': '403',
        'show': true
      },
      'component': 'Exception403'
    },
    {
      'name': '404',
      'parentId': 10024,
      'id': 10026,
      'meta': {
        'title': '404',
        'show': true
      },
      'component': 'Exception404'
    },
    {
      'name': '500',
      'parentId': 10024,
      'id': 10027,
      'meta': {
        'title': '500',
        'show': true
      },
      'component': 'Exception500'
    },

    // account
    {
      'name': 'account',
      'parentId': 0,
      'id': 10028,
      'meta': {
        'title': 'Personal page',
        'icon': 'user',
        'show': true
      },
      'redirect': '/account/center',
      'component': 'RouteView'
    },
    {
      'name': 'center',
      'parentId': 10028,
      'id': 10029,
      'meta': {
        'title': 'Personal center',
        'show': true
      },
      'component': 'AccountCenter'
    },
    {
      'name': 'settings',
      'parentId': 10028,
      'id': 10030,
      'meta': {
        'title': 'Personal settings',
        'hideHeader': true,
        'hideChildren': true,
        'show': true
      },
      'redirect': '/account/settings/base',
      'component': 'AccountSettings'
    },
    {
      'name': 'BaseSettings',
      'path': '/account/settings/base',
      'parentId': 10030,
      'id': 10031,
      'meta': {
        'title': 'basic settings',
        'show': false
      },
      'component': 'BaseSettings'
    },
    {
      'name': 'SecuritySettings',
      'path': '/account/settings/security',
      'parentId': 10030,
      'id': 10032,
      'meta': {
        'title': 'Security Settings',
        'show': false
      },
      'component': 'SecuritySettings'
    },
    {
      'name': 'CustomSettings',
      'path': '/account/settings/custom',
      'parentId': 10030,
      'id': 10033,
      'meta': {
        'title': 'Personalized settings',
        'show': false
      },
      'component': 'CustomSettings'
    },
    {
      'name': 'BindingSettings',
      'path': '/account/settings/binding',
      'parentId': 10030,
      'id': 10034,
      'meta': {
        'title': 'Account binding',
        'show': false
      },
      'component': 'BindingSettings'
    },
    {
      'name': 'NotificationSettings',
      'path': '/account/settings/notification',
      'parentId': 10030,
      'id': 10034,
      'meta': {
        'title': 'New message notification',
        'show': false
      },
      'component': 'NotificationSettings'
    }
  ]
  const json = builder(nav)
  console.log('json', json)
  return json
}
const zhUserNav = (options) => {
  const nav = [
    // dashboard
    {
      'name': 'dashboard',
      'parentId': 0,
      'id': 1,
      'meta': {
        'icon': 'dashboard',
        'title': '仪表盘',
        'show': true
      },
      'component': 'RouteView',
      'redirect': '/dashboard/workplace'
    },
    {
      'name': 'workplace',
      'parentId': 1,
      'id': 7,
      'meta': {
        'title': '工作台',
        'show': true
      },
      'component': 'Workplace'
    },
    {
      'name': 'monitor',
      'path': 'https://www.baidu.com/',
      'parentId': 1,
      'id': 3,
      'meta': {
        'title': '监控页（外部）',
        'target': '_blank',
        'show': true
      }
    },
    {
      'name': 'Analysis',
      'parentId': 1,
      'id': 2,
      'meta': {
        'title': '分析页',
        'show': true
      },
      'component': 'Analysis',
      'path': '/dashboard/analysis'
    },
    {
      'name': 'tests',
      'parentId': 1,
      'id': 8,
      'meta': {
        'title': '测试功能',
        'show': true
      },
      'component': 'TestWork'
    },

    // form
    {
      'name': 'form',
      'parentId': 0,
      'id': 10,
      'meta': {
        'icon': 'form',
        'title': '表单页'
      },
      'redirect': '/form/base-form',
      'component': 'PageView'
    },
    {
      'name': 'basic-form',
      'parentId': 10,
      'id': 6,
      'meta': {
        'title': '基础表单'
      },
      'component': 'BasicForm'
    },
    {
      'name': 'step-form',
      'parentId': 10,
      'id': 5,
      'meta': {
        'title': '分步表单'
      },
      'component': 'StepForm'
    },
    {
      'name': 'advanced-form',
      'parentId': 10,
      'id': 4,
      'meta': {
        'title': '高级表单'
      },
      'component': 'AdvanceForm'
    },

    // list
    {
      'name': 'list',
      'parentId': 0,
      'id': 10010,
      'meta': {
        'icon': 'table',
        'title': '列表页',
        'show': true
      },
      'redirect': '/list/table-list',
      'component': 'PageView'
    },
    {
      'name': 'table-list',
      'parentId': 10010,
      'id': 10011,
      'path': '/list/table-list/:pageNo([1-9]\\d*)?',
      'meta': {
        'title': '查询表格',
        'show': true
      },
      'component': 'TableList'
    },
    {
      'name': 'basic-list',
      'parentId': 10010,
      'id': 10012,
      'meta': {
        'title': '标准列表',
        'show': true
      },
      'component': 'StandardList'
    },
    {
      'name': 'card',
      'parentId': 10010,
      'id': 10013,
      'meta': {
        'title': '卡片列表',
        'show': true
      },
      'component': 'CardList'
    },
    {
      'name': 'search',
      'parentId': 10010,
      'id': 10014,
      'meta': {
        'title': '搜索列表',
        'show': true
      },
      'redirect': '/list/search/article',
      'component': 'SearchLayout'
    },
    {
      'name': 'article',
      'parentId': 10014,
      'id': 10015,
      'meta': {
        'title': '搜索列表（文章）',
        'show': true
      },
      'component': 'SearchArticles'
    },
    {
      'name': 'project',
      'parentId': 10014,
      'id': 10016,
      'meta': {
        'title': '搜索列表（项目）',
        'show': true
      },
      'component': 'SearchProjects'
    },
    {
      'name': 'application',
      'parentId': 10014,
      'id': 10017,
      'meta': {
        'title': '搜索列表（应用）',
        'show': true
      },
      'component': 'SearchApplications'
    },

    // profile
    {
      'name': 'profile',
      'parentId': 0,
      'id': 10018,
      'meta': {
        'title': '详情页',
        'icon': 'profile',
        'show': true
      },
      'redirect': '/profile/basic',
      'component': 'RouteView'
    },
    {
      'name': 'basic',
      'parentId': 10018,
      'id': 10019,
      'meta': {
        'title': '基础详情页',
        'show': true
      },
      'component': 'ProfileBasic'
    },
    {
      'name': 'advanced',
      'parentId': 10018,
      'id': 10020,
      'meta': {
        'title': '高级详情页',
        'show': true
      },
      'component': 'ProfileAdvanced'
    },
    {
      'name': 'result',
      'parentId': 0,
      'id': 10021,
      'meta': {
        'title': '结果页',
        'icon': 'check-circle-o',
        'show': true
      },
      'redirect': '/result/success',
      'component': 'PageView'
    },
    {
      'name': 'success',
      'parentId': 10021,
      'id': 10022,
      'meta': {
        'title': '成功',
        'hiddenHeaderContent': true,
        'show': true
      },
      'component': 'ResultSuccess'
    },
    {
      'name': 'fail',
      'parentId': 10021,
      'id': 10023,
      'meta': {
        'title': '失败',
        'hiddenHeaderContent': true,
        'show': true
      },
      'component': 'ResultFail'
    },

    // Exception
    {
      'name': 'exception',
      'parentId': 0,
      'id': 10024,
      'meta': {
        'title': '异常页',
        'icon': 'warning',
        'show': true
      },
      'redirect': '/exception/403',
      'component': 'RouteView'
    },
    {
      'name': '403',
      'parentId': 10024,
      'id': 10025,
      'meta': {
        'title': '403',
        'show': true
      },
      'component': 'Exception403'
    },
    {
      'name': '404',
      'parentId': 10024,
      'id': 10026,
      'meta': {
        'title': '404',
        'show': true
      },
      'component': 'Exception404'
    },
    {
      'name': '500',
      'parentId': 10024,
      'id': 10027,
      'meta': {
        'title': '500',
        'show': true
      },
      'component': 'Exception500'
    },

    // account
    {
      'name': 'account',
      'parentId': 0,
      'id': 10028,
      'meta': {
        'title': '个人页',
        'icon': 'user',
        'show': true
      },
      'redirect': '/account/center',
      'component': 'RouteView'
    },
    {
      'name': 'center',
      'parentId': 10028,
      'id': 10029,
      'meta': {
        'title': '个人中心',
        'show': true
      },
      'component': 'AccountCenter'
    },
    {
      'name': 'settings',
      'parentId': 10028,
      'id': 10030,
      'meta': {
        'title': '个人设置',
        'hideHeader': true,
        'hideChildren': true,
        'show': true
      },
      'redirect': '/account/settings/base',
      'component': 'AccountSettings'
    },
    {
      'name': 'BaseSettings',
      'path': '/account/settings/base',
      'parentId': 10030,
      'id': 10031,
      'meta': {
        'title': '基本设置',
        'show': false
      },
      'component': 'BaseSettings'
    },
    {
      'name': 'SecuritySettings',
      'path': '/account/settings/security',
      'parentId': 10030,
      'id': 10032,
      'meta': {
        'title': '安全设置',
        'show': false
      },
      'component': 'SecuritySettings'
    },
    {
      'name': 'CustomSettings',
      'path': '/account/settings/custom',
      'parentId': 10030,
      'id': 10033,
      'meta': {
        'title': '个性化设置',
        'show': false
      },
      'component': 'CustomSettings'
    },
    {
      'name': 'BindingSettings',
      'path': '/account/settings/binding',
      'parentId': 10030,
      'id': 10034,
      'meta': {
        'title': '账户绑定',
        'show': false
      },
      'component': 'BindingSettings'
    },
    {
      'name': 'NotificationSettings',
      'path': '/account/settings/notification',
      'parentId': 10030,
      'id': 10034,
      'meta': {
        'title': '新消息通知',
        'show': false
      },
      'component': 'NotificationSettings'
    }
  ]
  const json = builder(nav)
  console.log('json', json)
  return json
}

Mock.mock(/\/zh\/api\/user\/info/, 'get', zhInfo)
Mock.mock(/\/fa\/api\/user\/info/, 'get', faInfo)
Mock.mock(/\/api\/\/fa\/user\/info/, 'get', faInfo)
Mock.mock(/\/en\/api\/user\/info/, 'get', enInfo)
Mock.mock(/\/zh\/api\/user\/nav/, 'get', zhUserNav)
Mock.mock(/\/fa\/api\/user\/nav/, 'get', faUserNav)
Mock.mock(/\/en\/api\/user\/nav/, 'get', enUserNav)
