export interface Language {
    id: number;
    name: string;
}

export interface Student {
    id: number;
    name: string;
    phone: string;
    age: string;
    languages: string[];
}

interface Order {
    OrderType: string;
    Price: number;
    Volume: number;
}

export interface OrderBook {
    BuyOrders: Order[];
    SellOrders: Order[];
    CreatedTimeStampUtc: string;
}

interface Price {
    bid: string;
    ask: string;
    last: string;
}

export interface LatestPrices {
    status: string;
    prices: {
        btc: Price[],
        ltc: Price[],
        doge: Price[]
    }
}
