import React, { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';

export type IAutoScaleProps = {
    scale?: number;
    windowInnerHeight?: number;
    windowInnerWidth?: number;
    [key: string]: any;
}

export const withAutoScale = <T extends IAutoScaleProps>(Com: React.ComponentType<T>) => {
    const AutoScale: React.FC<T> = (props) => {
        const [scale, setScale] = useState<number>(1);
        const [windowInnerHeight, setWindowInnerHeight] = useState<number>(window.innerHeight);
        const [windowInnerWidth, setWindowInnerWidth] = useState<number>(window.innerWidth);

        const resize = useCallback(() => {
            const _scale: any = _.min([window.innerWidth / 1920, window.innerHeight / 1080]);
            setScale(_scale);
            setWindowInnerHeight(window.innerHeight);
            setWindowInnerWidth(window.innerWidth);
            sessionStorage.setItem('scale', _scale.toString());
        }, []);

        useEffect(() => {
            resize();
            window.addEventListener('resize', resize);
            return () => {
                window.removeEventListener('resize', resize);
            };
        }, [resize]);

        return (
            <Com
                {...props}
                scale={scale}
                windowInnerHeight={windowInnerHeight}
                windowInnerWidth={windowInnerWidth}
            />
        );
    };

    return AutoScale;
};