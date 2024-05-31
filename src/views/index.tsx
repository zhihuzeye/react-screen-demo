/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { mapData } from '../../mock/mapData'
import { IAutoScaleProps, IScaleContainerProps, withAutoScale, withScaleContainer } from '../components'
import { Bottom, Header, Left, Map, Right } from './components'
import styles from './index.module.css'

export interface ScreenProps extends IAutoScaleProps, IScaleContainerProps {

}

const ScreenComponent: React.FC<ScreenProps> = (props) => {
    return (
        <div className={styles.container}>
            <Header />
            <Right />
            <Bottom />
            <Left />
            <Map mapData={mapData} />
        </div>
    )
};

export default withAutoScale(withScaleContainer(ScreenComponent))
