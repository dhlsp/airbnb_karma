// 视频判断
export const VIDEOREG = /视频/;

// 取消请求提示
export const CANCELREQUEST = '取消之前请求';

// 是否有nginx标识
// export const HASNGINXSIGN = true;

// nginx 标识
export const NGINXSIGN = 'smartscanAdminApi';

// 密码 尾部标识
// export const PASSWORDSIGN = 'orikjd9xalei2if7';
export const PASSWORDSIGN = 'smartscan_123SDFUTYU';

// 打包
// 正式请求域名
export const FORMALDOMAIN = 'http://web.3035pay.com/';
// 测试请求域名
export const TESTDOMAIN = 'http://test.smartscan.ltd:8124/';

// 特殊错误URL标识 special error url signs, 直接抛出错误到页面请求catch
export const SPECIALERRORURLSIGNS = ['/payorder/download_payorder_file'];

export const FILE = {
  compressPackage: {
    data: ['zip', 'rar', '7-zip', 'jar', 'z'],
    errMsg: '请上传zip或rar或7-zip或jar或z文件!',
  },
  csv: {
    data: ['csv'],
    errMsg: '请上传csv文件',
  },
  xlsx: {
    data: ['xlsx'],
    errMsg: '请上传xlsx文件',
  },
  html: {
    data: ['html'],
    errMsg: '请上传html文件',
  },
};

// 页面授权使用
export const NOSELECTSIGN = '00000000-0000-0000-0000-000000000000';

// 中英切换需要刷新的页面
export const REFRESHURL = [
  'merc_pay_analysis', // 商户支付统计
  'transaction_analysis', // 总交易分析
  'merchants_pool', // 商户池
  'channel_transaction_statistics', //  通道交易统计
  'transaction_month', // 近一月交易分析
  'transaction_week', //  近七天交易分析
  'transaction', // 交易分析
];
