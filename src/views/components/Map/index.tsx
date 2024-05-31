import { PureComponent } from 'react';
import Echarts from '../../../utils/echarts';
import { mapOptions } from './options';


enum Renderer {
    'canvas' = 'canvas',
    'svg' = 'svg'
}

interface IMapProps {
    renderer?: Renderer;
    mapData:any
}

interface IMapState {
    renderer: Renderer;
    
}

/**
 * 地图组件
 */
export class Map extends PureComponent<IMapProps,IMapState> {
    constructor(props:IMapProps) {
        super(props);
        this.state = {
            renderer:'canvas' as Renderer,
        };
    }

    render() {
        const { renderer } = this.state;
        const { mapData } = this.props;
        return (
            <div
                style={{
                    width: '1032px',
                    height: '706px',
                    position:'absolute',
                    top:'124px',
                    left:'444px'
                }}>
                {
                    mapData ? <Echarts renderer={renderer} option={mapOptions(mapData)} /> : ''
                }
            </div>
        );
    }
}