export const mapOptions = (data) => ({
    tooltip: {
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
    title: {
        show: false
    },
    toolbox: {
        show: false
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: data.xAxis,
            axisLabel: {
                color: '#ffffff' // 设置 x 轴标签字体颜色为白色
            }
        }
    ],
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            lineStyle: {
                color: 'rgba(255, 255, 255, 0.2)', // 将网格线颜色变浅
                type: 'dashed' // 设置为虚线
            }
        },
        axisLabel: {
            color: '#ffffff' // 设置 y 轴标签字体颜色为白色
        }
    },
    grid: {
        top: '8%',
        left: '8%',
        right: '5%',
        bottom: '10%',
    },
    series: [
        {
            name: '快递接收量',
            type: 'line',
            smooth: true,
            symbol: 'none',
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0, color: 'rgba(255, 99, 132, 0.2)' // 渐变开始颜色
                        },
                        {
                            offset: 1, color: 'rgba(255, 99, 132, 0.2)' // 渐变结束颜色
                        }
                    ],
                    global: false // 是否全局
                }
            },
            data: data.yData1
        }, {
            name: '快递发送量',
            type: 'line',
            smooth: true,
            symbol: 'none',
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0, color: 'rgba(54, 162, 235, 0.2)' // 渐变开始颜色
                        },
                        {
                            offset: 1, color: 'rgba(54, 162, 235, 0.2)' // 渐变结束颜色
                        }
                    ],
                    global: false // 是否全局
                }
            },
            data: data.yData2
        }
    ]
});



export const scrollBoardConfig = (data) => ({
    // 表头背景色
    headerBGC: '#443dc5',
    // 奇数行背景色
    oddRowBGC: '#09184F',
    // 偶数行背景色
    evenRowBGC: '#070C34',
    // 行号
    index: true,
    // 行号表头
    indexHeader: '序号',
    // 宽度
    columnWidth: [50],
    // 对其方式
    align: ['center'],
    // 表行数
    rowNum: 12,
    header: ['省份', '发货量', '收货量'],
    data: data,
})