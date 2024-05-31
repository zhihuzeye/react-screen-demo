import React, { useEffect } from 'react'
import styles from './index.module.css'
import { BorderBox13, ScrollBoard, Loading } from '@jiaminghi/data-view-react'
import { OrderedListOutlined, LineChartOutlined } from '@ant-design/icons';
import { mapOptions, scrollBoardConfig } from './options';
import Echarts from '../../../utils/echarts';

import { useDispatch } from "react-redux"
import { useSelector } from "../../../redux/hooks"
import { fetchScreenData } from "../../../redux/screen/screenReducer"

import { API_GET_TRAFFIC_TREND_DATA, API_GET_TOP_SHIPPING_PROVINCES } from '../../../services/api.service'

interface ILeftProps {

}

/**
 * 左侧组件
 * @param props 
 * @returns 
 */
export const Left: React.FC<ILeftProps> = (props) => {
    const dispatch = useDispatch<any>();
    const screenModel = useSelector(state => state.screen);

    useEffect(() => {
        dispatch(fetchScreenData({
            url: API_GET_TRAFFIC_TREND_DATA
        }));
        dispatch(fetchScreenData({
            url: API_GET_TOP_SHIPPING_PROVINCES
        }));
    }, [dispatch]);

    return (
        <div className={styles.container}>

            {/* 今日收发流量趋势 */}
            <div className={styles.trend}>
                <BorderBox13 className={styles.trendBox}>
                    <div className={styles.trendBoxHead}>
                        <LineChartOutlined />
                        <span className={styles.trendBoxHeadTitle}>今日收发流量趋势</span>
                    </div>
                    <div className={styles.trendBoxCtx}>
                        {
                            !!screenModel.trendData ? <Echarts renderer={`canvas`} option={mapOptions(screenModel.trendData)} /> : <Loading>Loading...</Loading>
                        }
                    </div>
                </BorderBox13>
            </div>


            {/* 快递发送省份排行榜 */}
            <div className={styles.ranking}>
                <BorderBox13 className={styles.rankingBox}>
                    <div className={styles.rankingBoxHead}>
                        <OrderedListOutlined />
                        <span className={styles.rankingBoxHeadTitle}>快递发送省份排行榜</span>
                    </div>
                    <div className={styles.rankingBoxCtx}>
                        {
                            !!screenModel.topData ? <ScrollBoard config={scrollBoardConfig(screenModel.topData)} style={{ height: 480 }} /> : <Loading>Loading...</Loading>
                        }
                    </div>
                </BorderBox13>
            </div>

        </div>
    )
};
