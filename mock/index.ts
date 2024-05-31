import Mock from 'mockjs'

// 左-流量趋势
Mock.mock("/api/getTrafficTrendData", "get", {
  "data":
  {
    "xAxis": ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
    "yData1": [120, 132, 101, 134, 90, 230, 210],
    "yData2": [220, 182, 191, 234, 290, 330, 310]
  },
});


// 左-省份排行
Mock.mock("/api/getTopShippingProvinces", "get", {
  "data": [
    ['广东', '5200万', '8500万'],
    ['江苏', '4800万', '7800万'],
    ['浙江', '4500万', '7300万'],
    ['山东', '4200万', '6900万'],
    ['河南', '3800万', '6200万'],
    ['四川', '3500万', '5800万'],
    ['湖北', '3200万', '5400万'],
    ['福建', '3000万', '5000万'],
    ['重庆', '2800万', '4700万'],
    ['河北', '2600万', '4400万'],
    ['安徽', '2400万', '4100万'],
    ['湖南', '2200万', '3800万'],
    ['江西', '2000万', '3500万'],
    ['陕西', '1800万', '3200万'],
    ['辽宁', '1600万', '2900万'],
    ['黑龙江', '1400万', '2600万'],
    ['贵州', '1200万', '2300万'],
    ['山西', '1000万', '2000万'],
    ['广西', '800万', '1700万'],
    ['内蒙古', '600万', '1400万']
  ],
});


// 底部指标
Mock.mock("/api/getIndexData", "get", {
  "data":
  {
    "index1": {
      "name": "物流总运量",
      "value": 987,
      "unit": "万件"
    },
    "index2": {
      "name": "物流总收入",
      "value": 687,
      "unit": "亿元"
    },
    "index3": {
      "name": "平均运输时间",
      "value": 36,
      "unit": "小时"
    },
    "index4": {
      "name": "平均配送成本",
      "value": 2.5,
      "unit": "元"
    },
    "index5": {
      "name": "末端网络覆盖率",
      "value": 82,
      "unit": "%"
    },
    "index6": {
      "name": "从业人员数量",
      "value": 3000,
      "unit": "万人"
    },
    "index7": {
      "name": "行业平均薪资",
      "value": 5300,
      "unit": "元"
    },
    "index8": {
      "name": "客户满意度",
      "value": 5,
      "unit": "星"
    },
    "index9": {
      "name": "行业专利申请数量",
      "value": 691,
      "unit": "件"
    },
    "index10": {
      "name": "信息系统覆盖率",
      "value": 93,
      "unit": "%"
    }
  },
});

// 右承运商
Mock.mock("/api/getExpressCarrierData", "get", {
  "data": [
    {
      name: '顺丰速运',
      value: 167
    },
    {
      name: '圆通速递',
      value: 67
    },
    {
      name: '申通快递',
      value: 123
    },
    {
      name: '中通快递',
      value: 55
    },
    {
      name: '韵达快递',
      value: 98
    },
    {
      name: '邮政',
      value: 300
    },
    {
      name: '百世快递',
      value: 98
    },
    {
      name: '优速快递',
      value: 98
    },
    {
      name: '德邦快递',
      value: 98
    }
  ]
});


// 右用户群体
Mock.mock("/api/getExpressUserData", "get", {
  "data": [
    {
      name: '0-18岁',
      value: 10
    },
    {
      name: '18-30岁',
      value: 30
    },
    {
      name: '30-45岁',
      value: 30
    },
    {
      name: '45-60岁',
      value: 20
    },
    {
      name: '60岁以上',
      value: 10
    }
  ]
});


// 右运输方式
Mock.mock("/api/getExpressModeData", "get", {
  "data": [
    {
      name: '陆运',
      value: 50
    },
    {
      name: '铁路',
      value: 15
    },
    {
      name: '海运',
      value: 15
    },
    {
      name: '航空',
      value: 10
    },
    {
      name: '人力',
      value: 5
    },
    {
      name: '牛马',
      value: 3
    },
    {
      name: '星际',
      value: 2
    }
  ]
});