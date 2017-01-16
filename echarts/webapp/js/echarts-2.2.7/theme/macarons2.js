var theme = {
    // 全图默认背景
    // backgroundColor: 'rgba(0,0,0,0)',
    
    // 默认色板
    color: ['#EEC591','#D53A35','#334B5c','#6AB0B8','#00CD00',
            '#f16d7a','#f3d999','#d3758f','#dcc392','#2e4783',
            '#82b6e9','#ff6347','#a092f1','#0a915d','#eaf889',
            '#6699FF','#ff6666','#3cb371','#d5b158','#38b6b6'],
    
    // 值域
    dataRange: {
        color:['rgba(191,68,76,1)','rgba(246,239,166,1)'],//颜色 
        //text:['高','低'],         // 文本，默认为数值文本
        textStyle: {
            color: '#333'          // 值域文字颜色
        }
    },

    map: {
        mapType: 'china',   // 各省的mapType暂时都用中文
        mapLocation: {
            x : 'center',
            y : 'center'
            // width    // 自适应
            // height   // 自适应
        },
        /*showLegendSymbol : true,       // 显示图例颜色标识（系列标识的小圆点），存在legend时生效*/
        itemStyle: {
            normal: {
                // color: 各异,
                borderColor: 'rgba(138,138,138,1)',
                borderWidth: 1,
                areaStyle: {
                    color: 'rgba(238,238,238,1)'
                },
                label: {
                    show: true,
                    textStyle: {
                        color: 'rgba(139,69,19,1)'
                    }
                }
            },
            emphasis: {                 // 也是选中样式
                // color: 各异,
                borderColor: 'rgba(0,0,0,0)',
                borderWidth: 1,
                areaStyle: {
                    color: 'rgba(253,221,49,1)'
                },
                label: {
                    show: true,
                    textStyle: {
                        color: 'rgba(139,69,19,1)'
                    }
                }
            }
        }
    }
};
                
