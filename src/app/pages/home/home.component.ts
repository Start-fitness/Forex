import {Component, OnInit} from '@angular/core';
import {createChart, CrosshairMode} from 'lightweight-charts';
import {HttpClient} from '@angular/common/http';
import Binance, {CandleChartInterval} from 'binance-api-node'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  color: string;
  public http: HttpClient;
  results: any;
  coinPrice = [];
  coins =[];
  client = Binance({
    apiKey: 'V0wCyIqb6mZqGzo1zZmGHcU43aB3EcdC8Y5kuFpzb5w7lCusgBNv0Mxa1Mfbsod3',
    apiSecret: 'cdkdKyfxOMgx7bi5zmqX2AkFvCycFASsyy4lMxGBV3WKibBtl4VfA1unuejORAv',
    getTime: () => Date.now()
  });
  private candlestickProperties = {
    upColor: '#02c076',
    downColor: '#f84960',
    borderVisible: false,
    wickVisible: true,
    // borderColor: '#000000',
    // wickColor: '#000000',
    borderUpColor: '#02c076',
    borderDownColor: '#f84960',
    wickUpColor: '#02c076',
    wickDownColor: '#f84960'
  };

  constructor() {
  }

  ngOnInit(): void {
    this.createCoinPrice();
    this.getCandleBinanceApi('ETHBTC', CandleChartInterval.ONE_HOUR, 1000);
    this.getCandleBinanceApi('BTCUSDT', CandleChartInterval.ONE_HOUR, 1000);
    this.getCandleBinanceApi('ETHUSDT', CandleChartInterval.ONE_HOUR, 1000);
    this.getCandleBinanceApi('BTCEUR', CandleChartInterval.ONE_HOUR, 1000);
    this.getCandleBinanceApi('AXSBTC', CandleChartInterval.ONE_HOUR, 1000);
    this.getCandleBinanceApi('BNBBTC', CandleChartInterval.ONE_HOUR, 1000);
    this.getCandleBinanceApi('ADABTC', CandleChartInterval.ONE_HOUR, 1000);
    this.getCandleBinanceApi('TLMBTC', CandleChartInterval.ONE_HOUR, 1000);
    this.getCandleBinanceApi('DOGEBTC', CandleChartInterval.ONE_HOUR, 1000);
    this.getCandleBinanceApi('XRPBTC', CandleChartInterval.ONE_HOUR, 1000);
  }

  private getCandleBinanceApi(symbol: string, interval: CandleChartInterval, limit: number) {
    this.client.candles({symbol, interval, limit})
      .then(data => {
        const cdata = data.map(d => {
          return {
            time: d.openTime / 1000,
            open: parseFloat(d.open),
            high: parseFloat(d.high),
            low: parseFloat(d.low),
            close: parseFloat(d.close)
          }
        });
        this.createChart(cdata, symbol, symbol, interval);
      })
      .catch(err => console.error('Error binance dataset:', err));

  }

  private createChart(datа, elementId: string, symbol: string, interval: CandleChartInterval): void {
    // const body = window.getComputedStyle(document.querySelector('body')).backgroundColor;
    // if (body === 'rgb(30, 30, 47)') {
    //   this.color='#FFFFFF';
    // }
    // else  {
    //   this.color='#000000';
    // }
    const chartOptions = {
      height: 230,
      layout: {
        backgroundColor: 'transparent'
        // textColor: this.color
      }
    };
    const chart = createChart(document.getElementById(elementId), chartOptions);
    const candleSeries = chart.addCandlestickSeries(this.candlestickProperties);
    candleSeries.setData(datа);

    this.client.ws.candles(symbol, interval, candle => {
      const dataConv = {
        time: '2018-10-19',
        open: 54.63,
        high: 55.50,
        low: 54.52,
        close: 54.90
      };
      // @ts-ignore
      dataConv.time = Math.floor(candle.startTime / 1000);
      // dataConv.time = new Date(candle.startTime).toISOString().substr(0,10)
      dataConv.open = parseFloat(candle.open);
      dataConv.high = parseFloat(candle.high);
      dataConv.low = parseFloat(candle.low);
      dataConv.close = parseFloat(candle.close);
      candleSeries.update(dataConv);

    });
  }

  createCoinPrice() {
     this.client.prices()
      .then(price => {
        this.coinPrice.push(price);
        console.log(this.coinPrice);
        console.dir(this.coinPrice);
      });
  }

  //  const clientWS = webSocket('wss://stream.binance.com:9443/ws/ethbtc@kline_5m');
  // clientWS.subscribe((message: any) => {
  //     const dataConv = {time: '2021-05-05',
  //     open: 54.63,
  //     high: 55.50,
  //     low: 54.52,
  //     close:54.90};
  //    dataConv.time = Math.round(message.k.t/1000).toString();
  //    dataConv.open = parseFloat(message.k.o);
  //    dataConv.high = parseFloat(message.k.h);
  //    dataConv.low = parseFloat(message.k.l);
  //    dataConv.close = parseFloat(message.k.c);
  //   console.log(dataConv);
  //   candleSeries.update(dataConv);
  //   });

}
