import React, { useEffect } from 'react'
import styles from './index.module.css'
import { BorderBox13, CapsuleChart, ConicalColumnChart, ActiveRingChart, Loading } from '@jiaminghi/data-view-react'
import { TeamOutlined, NodeExpandOutlined, BarChartOutlined } from '@ant-design/icons'



import { expCarrierConfig, expUsersConfig, expModeConfig } from './options'


import { useDispatch } from "react-redux"
import { useSelector } from "../../../redux/hooks"
import { fetchScreenData } from "../../../redux/screen/screenReducer"

import { API_GET_EXPRESS_CARRIER_DATA, API_GET_EXPRESS_USER_DATA, API_GET_EXPRESS_MODE_DATA } from '../../../services/api.service'

interface IRightProps {

}

/**
 * 右侧组件
 * @param props 
 * @returns 
 */
export const Right: React.FC<IRightProps> = (props) => {
    const dispatch = useDispatch<any>();
    const screenModel = useSelector(state => state.screen);

    useEffect(() => {
        dispatch(fetchScreenData({
            url: API_GET_EXPRESS_CARRIER_DATA
        }));
        dispatch(fetchScreenData({
            url: API_GET_EXPRESS_USER_DATA
        }));
        dispatch(fetchScreenData({
            url: API_GET_EXPRESS_MODE_DATA
        }));
    }, [dispatch]);


    return (
        <div className={styles.container}>
            {/* 快递承运商分布 */}
            <div className={styles.expCarrier}>

                <BorderBox13 className={styles.expCarrierBox}>
                    <div className={styles.expCarrierBoxHead}>
                        <BarChartOutlined />
                        <span className={styles.expCarrierBoxHeadTitle}>快递承运商分布</span>
                    </div>
                    <div className={styles.expCarrierBoxCtx}>
                        {
                            !!screenModel.carrierData ? <CapsuleChart config={expCarrierConfig(screenModel.carrierData)} style={{ height: '280px' }} /> :
                                <Loading>loading... </Loading>
                        }
                    </div>
                </BorderBox13>

            </div>

            {/* 快递年龄分布 用户群体*/}
            <div className={styles.users}>

                <BorderBox13 className={styles.usersBox}>
                    <div className={styles.usersBoxHead}>
                        <TeamOutlined />
                        <span className={styles.usersBoxHeadTitle}>快递年龄分布</span>
                    </div>
                    <div className={styles.usersBoxCtx}>
                        {
                            !!screenModel.userData ? <ActiveRingChart config={expUsersConfig(screenModel.userData)} style={{ height: '160px' }} /> :
                                <Loading>loading... </Loading>
                        }
                    </div>
                </BorderBox13>

            </div>


            {/* 运输方式分类统计 */}
            <div className={styles.expMode}>
                <BorderBox13 className={styles.expModeBox}>
                    <div className={styles.expModeBoxHead}>
                        <NodeExpandOutlined />
                        <span className={styles.expModeBoxHeadTitle}>快递运输方式</span>
                    </div>
                    <div className={styles.expModeBoxCtx}>
                        {
                            !!screenModel.modeData ? <ConicalColumnChart config={expModeConfig(screenModel.modeData)} style={{ height: '200px' }} /> :
                                <Loading>loading... </Loading>
                        }
                    </div>
                </BorderBox13>
            </div>
        </div>
    )
};
