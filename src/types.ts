//Response JSON {"success":true,"base":"USD","timestamp":1696145301,"rates":{"XAU":0.00054094}}


//Error Response {"success":false,"error":{"statusCode":102,"message":"User did not supply an access key or supplied an invalid access key. Please sign up for a FREE API Key at metalpriceapi.com"}}
export type Apod = {
  success:boolean;
  error?:{
    statusCode:number;
    message:string;
  }
  base: string;

  timestamp: Date;
  hdurl: string;

  rates: {
    XAU:number
  }
};
