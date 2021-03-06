const DOWNLINEREG = /_([a-zA-Z])/g;
const MINSCREENPX = 1152;
const CHINESE = /.*[\u4e00-\u9fa5]+.*$/;
const SPACE = /\s/;
const NUMS = '0123456789';
const NUMSANDLETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const util = {
  // 深复制
  deepCopy(obj) {
    if (obj === null || !this.isObject(obj)) {
      return obj;
    }

    let tmp = obj.constructor();
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        tmp[key] = this.deepCopy(obj[key]);
      }
    }

    return tmp;
  },

  // 格式化日期
  formatDate(date, fmt) {
    if (!(date instanceof Date)) {
      date = new Date(date);
    }

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'H+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
      }
    }
    return fmt;
  },

  // 字符串左边添加零
  padLeftZero(str) {
    return ('00' + str).substr(str.length);
  },

  // 获取类型
  getType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },

  // 判断类型
  isType(obj, type) {
    if (this.getType(type) !== 'string') {
      throw new Error('type param must be string in util.js');
    }

    return this.getType(obj) === type;
  },

  // 判断是不是正整数
  isNormalInteger(str) {
    let n = str;
    if (this.isString(str)) {
      n = Math.floor(Number(str));
    }
    return n !== Infinity && String(n) === str && n >= 0;
  },

  // 是否是对象
  isObject(val) {
    if (val === null) {
      return false;
    }
    return (typeof val === 'function') || (typeof val === 'object');
  },

  // 是否是数组
  isArray(arr) {
    return this.isType(arr, 'array');
  },

  // 是否是字符串
  isString(str) {
    return this.isType(str, 'string');
  },

  // 是否是Error
  isError(err) {
    return this.isType(err, 'error');
  },

  // 是否是undefined
  isUndefined(val) {
    return this.isType(val, 'undefined');
  },

  // 是否是number
  isNumber(val) {
    return this.isType(val, 'number');
  },

  // 对象属性转为驼峰
  transformKeyHump(obj) {
    let newObj = {};

    Object.keys(obj).forEach(key => {
      let newKey = key.replace(DOWNLINEREG, ($0, $1) => $1.toUpperCase());
      newObj[newKey] = obj[key];
    });

    return newObj;
  },

  // 从旧对象获取相应的属性值，组成新对象
  getNewObj(keyArr, obj) {
    if (!this.isArray(keyArr)) {
      throw new Error('keyArr param must be Object in util.js');
    }

    if (!this.isObject(obj) || obj === null) {
      throw new Error('obj param must be Object in util.js');
    }

    let objOfHump = this.transformKeyHump(obj);
    let newObj = {};

    keyArr.forEach((key) => {
      if (objOfHump.hasOwnProperty(key)) {
        newObj[key] = objOfHump[key];
      }
    });

    return newObj;
  },

  // 快速清空数组
  emptyArr(arr) {
    while (arr.length) {
      arr.pop();
    }
  },

  // 判断是否是整数
  isInteger(num) {
    return num % 1 === 0;
  },

  // 判断是不是数字
  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  },

  // 判断小数是几位
  countDecimals(n) {
    if (!this.isNumber(n)) {
      n = parseFloat(n);
    }
    if (Math.floor(n) === n.valueOf()) {
      return 0;
    }
    return n.toString().split('.')[1].length;
  },

  // 修复toFixed
  toFixed(n, s) {
    s = Number(s) || 0;
    // eslint-disable-next-line no-restricted-properties
    let changenum = (parseInt(n * Math.pow(10, s) + 0.5, 10) / Math.pow(10, s)).toString();
    let index = changenum.indexOf('.');
    if (index < 0 && s > 0) {
      changenum += '.';
      for (let i = 0; i < s; i++) {
        changenum += '0';
      }
    } else {
      index = changenum.length - index;
      for (let i = 0; i < (s - index) + 1; i++) {
        changenum += '0';
      }
    }
    return changenum;
  },

  // 是否相等
  isEqual(a, b) {
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);

    if (aProps.length !== bProps.length) {
      return false;
    }

    for (let i = 0, len = aProps.length; i < len; i++) {
      let propName = aProps[i];
      if (a[propName] !== b[propName]) {
        return false;
      }
    }

    return true;
  },
  checkRangeOverlap(ranges, minKey = 'min', maxKey = 'max') {
    let n = ranges.length;
    for (let i = 0; i < n; i++) {
      for (let u = 0; u < n; u++) {
        if (i === u) {
          continue;
        }
        let rangeA = ranges[i];
        let rangeB = ranges[u];
        if (rangeA[minKey] < rangeB[maxKey] && rangeA[maxKey] > rangeB[minKey]) {
          return false;
        }
      }
    }
    return true;
  },
  // 是否包含中文
  hasChinese(str) {
    return CHINESE.test(str);
  },
  hasSpace(str) {
    return SPACE.test(str);
  },
  moneyFormat(n) {
    if (n === undefined || n === null || n === '') {
      return '0';
    }
    let isStr = this.isString(n);
    let isNum = this.isNumeric(n);
    if (!isStr && !isNum) {
      return '';
    }
    if (this.isString(n)) {
      n = parseFloat(n);
    }
    if (Number.prototype.hasOwnProperty('toLocaleString')) {
      return n.toLocaleString();
    }
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },
  getDate(str) {
    let ret = /(\d+)-(\d+)-(\d+)/.exec(str);
    return new Date(ret[1], ret[2] - 1, ret[3]);
  },
  getYMD(str) {
    let ret = /(\d+)-(\d+)-(\d+)/.exec(str);
    return ret[0];
  },
  // 允许两个时间相同
  // 求两个时间范围内的所有时间字符串的集合
  timeRangeAllDate(start, end) {
    if (!(start instanceof Date) && this.isInteger(start)) { // start 为整数，就是表示start天前到今天的时间范围
      let diffDay = start;
      let currentTime = new Date();
      let y = currentTime.getFullYear();
      let m = currentTime.getMonth();
      let d = currentTime.getDate();
      if (diffDay < 0) {
        end = new Date(y, m, d);
        start = new Date(end.getTime() + (diffDay * 24 * 60 * 60 * 1000));
      } else {
        start = new Date(y, m, d);
        end = new Date(start.getTime() + (diffDay * 24 * 60 * 60 * 1000));
      }
    } else {
      if (!(start instanceof Date)) {
        start = this.getDate(start);
      } else {
        start = this.timeFormat({
          time: start,
          type: 'YMD',
          beforeSeparator: '-',
        });
        start = this.getDate(start);
      }
      if (!(end instanceof Date)) {
        end = this.getDate(end);
      } else {
        end = this.timeFormat({
          time: end,
          type: 'YMD',
          beforeSeparator: '-',
        });
        end = this.getDate(end);
      }
    }

    let year = start.getFullYear();
    let month = start.getMonth();
    let day = start.getDate();
    let dates = [start];
    let dateMap = {}; // key 对应日期, value 对应日期在dataRet的索引
    let dateStrs = [];

    while (dates[dates.length - 1] < end) {
      dates.push(new Date(year, month, ++day));
    }
    dates.forEach((item, index) => {
      let dateStr = this.timeFormat({
        time: item,
        type: 'YMD',
        beforeSeparator: '-',
      });
      dateStrs.push(dateStr);
      dateMap[dateStr] = index;
    });
    dates.forEach((item) => { // eslint-disable-line
      item = null;
    });
    dates = null;
    console.log('dateStrs: ', dateStrs);
    console.log('dateMap: ', dateMap);
    return {
      dateMap,
      dateStrs,
    };
  },
  timeFormat(params) {
    let defaultParams = {
      time: new Date(),
      type: 'all',
      beforeSeparator: '-',
      afterSeparator: '-',
      betweenSeparator: ' ',
    };

    if (this.isObject(params)) {
      Object.assign(defaultParams, params);
    }

    let hour = defaultParams.time.getHours();
    hour = hour < 10 ? '0' + hour : hour;
    let minute = defaultParams.time.getMinutes();
    minute = minute < 10 ? '0' + minute : minute;
    let second = defaultParams.time.getSeconds();
    second = second < 10 ? '0' + second : second;

    if (defaultParams.type === 'HMS') {
      return `${hour}${defaultParams.afterSeparator}${minute}${defaultParams.afterSeparator}${second}`;
    }

    let year = defaultParams.time.getFullYear();
    let month = defaultParams.time.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = defaultParams.time.getDate();
    day = day < 10 ? '0' + day : day;
    if (defaultParams.type === 'YMD') {
      return `${year}${defaultParams.beforeSeparator}${month}${defaultParams.beforeSeparator}${day}`;
    }
    return `${year}${defaultParams.beforeSeparator}${month}${defaultParams.beforeSeparator}${day}${defaultParams.betweenSeparator}${hour}${defaultParams.afterSeparator}${minute}${defaultParams.afterSeparator}${second}`;
  },
  // 字符串转对象
  strToObj(str) {
    if (this.isNumber(str)) {
      str = `${str}`;
    }
    if (this.isString(str) && isNaN(str)) {
      return JSON.parse(str.replace(/\\/g, '').replace(/\"\[/g, '[').replace(/\]\"/g, ']'));
    }
    return str;
  },
  // 获取时间段
  getPeriod(startTime, days = 0, type = 'YMD') {
    let start;
    if (startTime instanceof Date) {
      start = startTime;
    } else {
      start = new Date();
      days = startTime;
    }
    let end = new Date(start.getTime());
    end.setTime(start.getTime() + days * 24 * 60 * 60 * 1000);
    if (start > end) {
      [start, end] = [end, start];
    }
    return [this.timeFormat({
      time: start,
      type: type,
      beforeSeparator: '-',
    }), this.timeFormat({
      time: end,
      type: type,
      beforeSeparator: '-',
    })];
  },
  // add(arg1, arg2) {
  //   let r1;
  //   let r2;
  //   let m;
  //   try {
  //     r1 = arg1.toString().split('.')[1].length;
  //   } catch (e) {
  //     r1 = 0;
  //   }
  //   try {
  //     r2 = arg2.toString().split('.')[1].length;
  //   } catch (e) {
  //     r2 = 0;
  //   }
  //   m = Math.pow(10, Math.max(r1, r2));
  //   return (Math.round(arg1 * m) + Math.round(arg2 * m)) / m;
  // },
  // mul(arg1, arg2) { // 乘
  //   let m = 0;
  //   let s1 = arg1.toString();
  //   let s2 = arg2.toString();
  //   try {
  //     m += s1.split('.')[1].length;
  //   } catch (e) {
  //     //
  //   }
  //   try {
  //     m += s2.split('.')[1].length;
  //   } catch (e) {
  //     //
  //   }
  //   return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m);
  // },
  // sub(arg1, arg2) { // 减
  //   let r1;
  //   let r2;
  //   let m;
  //   let n;
  //   try {
  //     r1 = arg1.toString().split('.')[1].length;
  //   } catch (e) {
  //     r1 = 0;
  //   }
  //   try {
  //     r2 = arg2.toString().split('.')[1].length;
  //   } catch (e) {
  //     r2 = 0;
  //   }
  //   m = Math.pow(10, Math.max(r1, r2));
  //   n = (r1 >= r2) ? r1 : r2;
  //   return this.toFixed(((arg1 * m - arg2 * m) / m), n);
  // },
};

export default util;

export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result;

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp;

    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };

  return function (...args) {
    context = this;
    timestamp = +new Date();
    const callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
}
// 示例：then(dowloadFile(filename))
// 下载文件通用函数
export function downloadFile(filename, content) {
  const blob = new Blob([content]);
  const file = filename;
  if ('download' in document.createElement('a')) { // 非IE下载
    const elink = document.createElement('a');
    elink.download = filename;
    elink.style.display = 'none';
    elink.href = URL.createObjectURL(blob);
    document.body.appendChild(elink);
    elink.click();
    URL.revokeObjectURL(elink.href); // 释放URL 对象
    document.body.removeChild(elink);
  } else { // IE10+下载
    navigator.msSaveBlob(blob, file);
  }
}

function getScreenW() {
  let screenW = window.screen.availWidth;
  if (util.isString(screenW)) {
    screenW = screenW.replace(/[^\d|\.]+/, '');
    screenW = parseFloat(screenW);
  }
  return screenW;
}

// 获取屏幕分辨率
export const screenW = getScreenW();

// 是否是小屏幕
export const isMinScreen = screenW <= MINSCREENPX;

// 随机生成
export function randomStr(n, isPureNum = false) {
  let possible = isPureNum ? NUMS : NUMSANDLETTERS;
  let ret = '';
  for (let i = 0; i < n; i++) {
    ret += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return ret;
}

// 获取path
export function getUrlPath() {
  let href = location.href;
  let start = href.indexOf('/#') + 2;
  let end = href.indexOf('?');
  if (end === -1) {
    end = href.length;
  }
  return href.slice(start, end);
}
