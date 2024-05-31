import { BorderBox7, DigitalFlop, Loading } from '@jiaminghi/data-view-react';
import React, { useEffect } from 'react';
import styles from './index.module.css';
import { useDispatch } from "react-redux"
import { useSelector } from "../../../redux/hooks"
import { fetchScreenData } from "../../../redux/screen/screenReducer"
import { API_GET_INDEX_DATA } from '../../../services/api.service'
interface IBottomProps {

}

/**
 * 底部组件
 * @param props 
 * @returns 
 */
export const Bottom: React.FC<IBottomProps> = (props) => {
    const dispatch = useDispatch<any>();
    const screenModel = useSelector(state => state.screen);
    useEffect(() => {
        dispatch(fetchScreenData({
            url: API_GET_INDEX_DATA
        }));
    }, [dispatch]);

    return (
        <div className={styles.container}>
            {
                !!screenModel.indexData ? <>
                    {
                        Object.entries(screenModel.indexData).map(([key, values], index) => {
                            const { name, value, unit } = values as any;
                            return (<div className={styles.indexBox} key={key}>
                                <BorderBox7 color={["#070C34"]}>
                                    <div className={styles.indexBoxCtx}>
                                        <div className={styles.indexBoxTitle}>{name}</div>
                                        <DigitalFlop config={{
                                            number: [value],
                                            style: {
                                                fill: index === 4 ? '#006400' : index === 6 ? '#ff0000' : index === 7 ? '#FFD700' : '#ffffff'
                                            },
                                            content: `{nt}${unit}`
                                        }} style={{ height: '50px' }} />
                                    </div>
                                </BorderBox7>
                            </div>)
                        })
                    }
                </> : <Loading>loading... </Loading>
            }
        </div>
    )
};
