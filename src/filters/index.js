import util from '@js/util';
import i18n from '../lang';

const INITTIME = '1970-01-01T00:00:00Z';

export function parseTime(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
  if (date === '') {
    return '';
  } else if (date === '--') {
    return '--';
  } else if (date === INITTIME) {
    return '';
  } else if (util.isString(date)) {
    date = date.replace(/(\.\S*)|T|Z|-|((\+\S*))/g, function (s) {
      if (s === '-') {
        return '/';
      }
      if (s === 'T') {
        return ' ';
      }
      return '';
    });
    return util.formatDate(date, fmt);
  }
  return '';
}

export function formatUseStatus(use_status, type = 1) {
  let ret = {
    '1': ['禁用', '启用'],
    '2': ['失败', '成功'],
    '3': ['待审核', '通过', '不通过'],
    '4': ['否', '是'], // 是否隐藏 is_hidden
    '5': ['待提交', '通过', '审核中', '未通过', '黑名单'], // 审核状态
    '6': ['未支付', '已发送，等待支付结果', '已完成', '', '已取消', '支付错误', '支付中', '挂账', '审核', '撤回', '已关闭', '已全额退款', '已支付,未退款', '过期未支付，被动关闭', '已部分退款'],
    '7': ['微信', '支付宝', '银联'],
    '8': ['无', '管理员', '机构', '运营', '渠道', '商户', '子商户'],
    '9': ['D0', 'D1', 'T1', 'T0'],
    '10': ['', '清算完', '挂单', '已进钱包'],
    '11': ['', '进账', '出账', '冻结', '解冻扣款', '解冻退回'],
    '12': ['未读', '已读'],
    '13': ['', '模板', '自定义'],
    '14': ['未发起', '任务已发起', '定时调度中', '已完成'],
    '15': ['', '普通支付', '代付'],
    '16': ['', '未进钱包', '已进钱包'], // 清分状态
    '17': ['', '授权', '未授权'], // 支付api状态
    '18': ['', '可用', '已用'], // 邀请码状态
    '19': ['未到', '到账'], // 到账状态
    '20': ['未执行', '已完成', '挂起', '执行中'], // 任务执行状态
    '21': ['', '对私', '对公'], // 商户代发状态
    '22': ['初始化', '', '进行中', '成功', '失败'], // 自动代付日志状态
  };

  return i18n.t(ret[type][use_status]);
}

// 金钱格式
export function moneyFormat(n) {
  return util.moneyFormat(n);
}
