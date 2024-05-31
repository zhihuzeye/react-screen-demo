import { Decoration5 } from '@jiaminghi/data-view-react';
import React from 'react';
import useFullscreen from '../../../hooks/useFullscreen';
import { getDateTime } from '../../../utils/utils';
import styles from './index.module.css';

import {
    FullscreenExitOutlined,
    FullscreenOutlined,
} from '@ant-design/icons';

interface IHeaderProps {

}

/**
 * 头部组件
 * @param props 
 * @returns 
 */
export const Header: React.FC<IHeaderProps> = (props) => {
    const [dateTime, setDateTime] = React.useState('');
    const [isFullscreen, toggleFullscreen] = useFullscreen();
    React.useEffect(() => {
        const interval = setInterval(() => {
            const newDate = getDateTime();
            const dateStr = `${newDate.year}年${newDate.month}月${newDate.day}日 ${newDate.hour}:${newDate.minutes}:${newDate.seconds} ${newDate.weekdayName}`;
            setDateTime(dateStr);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.slogan}>掌握物流脉搏 引领行业未来</div>
            <div className={styles.title}>全国物流态势监控</div>

            <Decoration5 style={{ width: '800px', height: '55px', marginTop: '55px' }} />

            <div className={styles.dateTime}>
                {dateTime && <span> {dateTime}</span>}
            </div>

            <div className={styles.fullScreen} onClick={toggleFullscreen}>
                {isFullscreen ? <FullscreenExitOutlined style={{ fontSize: 32 }} /> : <FullscreenOutlined style={{ fontSize: 32 }} />}
            </div>
        </div>
    )
};
