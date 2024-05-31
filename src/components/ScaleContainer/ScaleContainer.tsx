import React, { memo } from "react";
import styles from "./ScaleContainer.module.css";

import { IAutoScaleProps } from '../AutoScale/AutoScale'

export interface IScaleContainerProps extends IAutoScaleProps  {
}

export const withScaleContainer = <T extends IScaleContainerProps>(Com: React.ComponentType<T>) => {
    const ScaleContainer: React.FC<T> = memo((props) => {
        return (
            <div className={styles.scaleContainer}>
                <div style={{
                    transform: `scale(${props.scale})`
                }}>
                    <Com {...props} />
                </div>
            </div>
        );
    });
    
    return ScaleContainer
};