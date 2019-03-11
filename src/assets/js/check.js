// element-ui   校验
import i18n from '@lang';
// import apiObj from '@/impl';
import util from '@js/util';

// 移动电话正则
const PHONE = /^1[0-9]{10}$/;
// 固定电话正则
const FIXPHONE = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
// 邮箱正则
const EMAIL = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;

// 校验字符串是否包含中文
export function validateHasChinese(rule, value, callback) {
  if (util.hasChinese(value)) {
    callback(new Error(i18n.t('不能包含中文')));
  } else {
    callback();
  }
}

// 校验邮箱是否存在
export function validateEmail(rule, value, callback) {
  if (value === '' || EMAIL.test(value)) {
    callback();
  } else {
    callback(new Error(i18n.t('请输入正确的邮箱')));
  }
}

// 校验字符串是否包含空格
export function validateHasSpace(rule, value, callback) {
  if (util.hasSpace(value)) {
    callback(new Error(i18n.t('不能包含空格')));
  } else {
    callback();
  }
}

// 校验金额
export function validateMoney(rule, value, callback) {
  if (util.countDecimals(value) > 2) {
    callback(new Error(i18n.t('小数位最多两位')));
  } else {
    callback();
  }
}

// 校验账号是否存在
// export function validateAccount(rule, value, callback) {
//   if (value === '') {
//     callback(new Error(i18n.t('请输入账号')));
//   } else {
//     apiObj.account_checkAccount({ account: value })
//       .then((data) => {
//         if (data.data.count === '0') {
//           callback();
//         } else {
//           callback(new Error(i18n.t('账号已存在')));
//         }
//       })
//       .catch(() => {
//         callback(new Error(i18n.t('账号校验失败')));
//       });
//   }
// }

// 校验电话号码
export function validatePhone(rule, value, callback) {
  // 空校验 移动电话校验 固定电话校验
  if (value === '' || PHONE.test(value) || FIXPHONE.test(value)) {
    callback();
  } else {
    callback(new Error(i18n.t('请输入正确的电话')));
  }
}

// 校验数字
export function validateNum(rule, value, callback) {
  if (value === '') {
    callback(new Error(i18n.t('不能为空')));
  } else if (!isNaN(value) && !isNaN(parseFloat(value))) {
    callback();
  } else {
    callback(new Error(i18n.t('请填写正确的数字')));
  }
}

// 校验数字和空字符串
export function validateNumAndEmpty(rule, value, callback) {
  if (value === '') {
    callback();
  } else if (!isNaN(value) && !isNaN(parseFloat(value))) {
    callback();
  } else {
    callback(new Error(i18n.t('请填写正确的数字')));
  }
}

// 校验正整数
export function validateNormalInteger(rule, value, callback) {
  if (value === '') {
    callback(new Error(i18n.t('不能为空')));
  } else if (util.isNormalInteger(value)) {
    callback();
  } else {
    callback(new Error(i18n.t('请填写正整数')));
  }
}

// 校验身份证号
export function validateIdentityCard(rule, value, callback) {
  value = '' + value;
  if (value === '') {
    callback();
  }
  let ret = testId(value);
  if (ret.status === 0) {
    callback(new Error(ret.msg));
  } else {
    callback();
  }
}

function testId(id) {
  // 1 "验证通过!", 0 //校验不通过
  let format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
  // 号码规则校验
  if (!format.test(id)) {
    return {
      status: 0,
      msg: '身份证号码不合规',
    };
  }

  // 区位码校验
  // 出生年月日校验   前正则限制起始年份为1900;
  let year = id.substr(6, 4); // 身份证年
  let month = id.substr(10, 2); // 身份证月
  let date = id.substr(12, 2); // 身份证日
  let time = Date.parse(month + '-' + date + '-' + year); // 身份证日期时间戳date
  let nowTime = Date.parse(new Date()); // 当前时间戳
  let dates = (new Date(year, month, 0)).getDate(); // 身份证当月天数
  if (time > nowTime || date > dates) {
    return {
      status: 0,
      msg: '出生日期不合规',
    };
  }

  // 校验码判断
  let c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 系数
  let b = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']; // 校验码对照表
  let idArray = id.split('');
  let sum = 0;

  for (let k = 0; k < 17; k++) {
    sum += parseInt(idArray[k], 10) * parseInt(c[k], 10);
  }

  if (idArray[17].toUpperCase() !== b[sum % 11].toUpperCase()) {
    return {
      status: 0,
      msg: '身份证校验码不合规',
    };
  }
  return {
    status: 1,
    msg: '校验通过',
  };
}
