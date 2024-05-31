import React, { PureComponent, RefObject } from 'react';
import * as echarts from 'echarts';
import chinaJson from "../../mock/china1.json";
import _ from 'lodash';

type EChartsOption = any

interface IChartProps {
  option: EChartsOption;
  renderer?: 'canvas' | 'svg';
  notMerge?: boolean;
  lazyUpdate?: boolean;
}

interface IChartState {
  width: string;
  height: string;
}

export default class Echarts extends PureComponent<IChartProps, IChartState> {
  private chart: echarts.ECharts | null = null;
  private el: RefObject<HTMLDivElement> = React.createRef();

  constructor(props: IChartProps) {
    super(props);
    this.state = {
      width: '100%',
      height: '100%',
    };
  }

  async componentDidMount() {
    // 引用并注册 Map
    echarts.registerMap('china', chinaJson as any);
    console.log("this.el",this.el)
    await this.initChart(this.el.current);
    this.setOption(this.props.option);
    window.addEventListener('resize', _.debounce(this.resize, 100));
  }

  componentDidUpdate() {
    this.setOption(this.props.option);
  }

  componentWillUnmount() {
    this.dispose();
  }

  render() {
    const { width, height } = this.state;
    return (
      <div
        className="default-chart"
        ref={this.el}
        style={{ width, height }}
      />
    );
  }

  // 初始化图表
  private initChart = (el: HTMLDivElement | null) => {
    const renderer = this.props.renderer || 'canvas';

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        if (el) {
          this.chart = echarts.init(el, null, {
            renderer,
            width: 'auto',
            height: 'auto',
          });
        }
        resolve();
      }, 0);
    });
  };

  private setOption = (option: EChartsOption) => {
    if (!this.chart) {
      return;
    }

    const notMerge = this.props.notMerge;
    const lazyUpdate = this.props.lazyUpdate;

    this.chart.setOption(option, notMerge, lazyUpdate);
  };
   
  private dispose = () => {
    if (!this.chart) {
      return;
    }

    this.chart.dispose();
    this.chart = null;
  };

  private resize = () => {
    this.chart?.resize();
  };

  getInstance = (): echarts.ECharts | null => {
    return this.chart;
  };
}
