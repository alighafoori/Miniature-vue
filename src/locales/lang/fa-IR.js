import antdEnUS from 'ant-design-vue/es/locale-provider/fa_IR'
import momentEU from 'moment/locale/eu'

const components = {
  antLocale: antdEnUS,
  momentName: 'fa',
  momentLocale: momentEU,
  isRtl: true,
  name: 'fa-IR'
}

const locale = {
  'message': '-',
  'menu.home': 'خانه',
  'menu.dashboard': 'میزکار',
  'menu.dashboard.analysis': 'آمار',
  'menu.dashboard.monitor': 'نظارت',
  'menu.dashboard.workplace': 'محل کار',
  'menu.forms': 'فرم‌ها',
  'menu.forms.base': 'فرم معمولی',
  'menu.forms.stepform': 'فرم مرحله‌ای',
  'menu.forms.advanceform': 'فرم پیشرفته',
  'menu.lists': 'جدول لیستی',
  'menu.lists.tablelist': 'جدول',
  'menu.lists.basiclist': 'لیست پایه',
  'menu.lists.cardlist': 'لیست کارتی',
  'menu.lists.searchlist': 'لیست جستجو',
  'menu.lists.searchlist.articles': 'جستجوی مقاله',
  'menu.lists.searchlist.projects': 'جستجوی پروژه',
  'menu.lists.searchlist.application': 'جستجوی برنامه',
  'menu.profile': 'پروفایل',
  'menu.profile.basic': 'پروفایل معمولی',
  'menu.profile.advanced': 'پروفایل پیشرفته',
  'menu.result': 'پیام',
  'menu.result.success': 'پیام موفق',
  'menu.result.fail': 'پیام ناموفق',
  'menu.exceptions': 'خطاها',
  'menu.exceptions.403': '403',
  'menu.exceptions.404': '404',
  'menu.exceptions.500': '500',
  'menu.account': 'حساب کاربری',
  'menu.account.center': 'حساب کاربری وسط‌چین',
  'menu.account.settings': 'تنظیمات حساب کاربری',
  'menu.account.settings.base': 'تنظیمات پایه‌ای',
  'menu.account.settings.security': 'تنظیمات امنیتی',
  'menu.account.settings.custom': 'تنظیمات اختصاصی',
  'menu.account.settings.binding': 'تنظیمات انقیادی',
  'menu.account.settings.notification': 'تنظیمات اعلان‌ها',
  'menu.pages': 'صفحات',
  'menu.pages.iconselector': 'انتخاب آیکن',
  'menu.pages.lists': 'لیست‌ها',
  'menu.pages.treelist': 'لیست درختی',
  'menu.pages.edittable': 'لیست قابل ویرایش',
  'menu.pages.userlist': 'لیست کاربران',
  'menu.pages.rolelist': 'لیست نقش‌ها',
  'menu.pages.systemrole': 'نقش سیستمی',
  'menu.pages.permissionlist': 'لیست اختیارات',
  'basicform.title.label': 'عنوان',
  'basicform.header.content': 'از صفحات فرم برای جمع آوری یا تأیید اطلاعات از کاربران استفاده می شود. فرم های معمولی در سناریوهای فرم با تعداد کمی از داده ها رایج هستند.',
  'basicform.title.placeholder': 'لطفاً عنوان را وارد کنید',
  'basicform.title.error': 'لطفاً عنوان را وارد کنید',
  'basicform.startandend.label': 'تاریخ های شروع و پایان',
  'basicform.startandend.error': 'لطفا تاریخ های شروع و پایان را انتخاب کنید',
  'basicform.goaldesc.label': 'توضیحات هدف',
  'basicform.goaldesc.error': 'لطفاً توضیحات هدف را وارد کنید',
  'basicform.goaldesc.placeholder': 'لطفا اهداف کاری خود را وارد کنید',
  'basicform.metrics.label': 'متریک',
  'basicform.metrics.error': 'لطفاً یک متریک وارد کنید',
  'basicform.metrics.placeholder': 'لطفاً یک متریک وارد کنید',
  'basicform.client.label': 'مشتری',
  'basicform.client.error': 'لطفاً مشتریان را وارد نمایید',
  'basicform.client.placeholder': 'لطفاً مشتریان را وارد نمایید @نام / شناسه کار',
  'basicform.reviewers.label': 'داوران دعوت شده',
  'basicform.reviewers.placeholder': 'لطفاً به طور مستقیم @NAME ، حداکثر 5 نفر را می توان دعوت کرد',
  'basicform.weights.label': 'وزن',
  'basicform.target.label': 'هدف را انتخاب کنید',
  'basicform.target.help': 'مشتریان و داوران دعوت شده به طور پیش فرض مشترک هستند',
  'basicform.target.public': 'عمومی',
  'basicform.target.partlypublic': 'تا حدی عمومی',
  'basicform.target.private': 'خصوصی',
  'basicform.target.colleagueone': 'یک همکار',
  'basicform.target.colleaguetwo': 'همکار دوم',
  'basicform.target.colleague3': 'همکار سوم',
  'basicform.submit.label': 'ارسال',
  'basicform.save.label': 'ذخیره'
}

export default {
  ...components,
  ...locale
}
