//calling external api

function CryptoCurrencyAPI () {
    this.getValue = function(coin){
        console.log("Calling Exeternal API")
        switch(coin){
            case "Bitcoin":
                return "$3,5000"
            case "Litecoin":
                return "$750"
            case "Ethereum":
                return "$200"
        }
    }

}
const api =  new CryptoCurrencyAPI();
//this below method is good when we don't have to make many calls of the external api, but if we 10k+ api calls in that case it going to be very slow not feasible
// console.log(api.getValue("Bitcoin"));
// console.log(api.getValue("Litecoin"));
// console.log(api.getValue("Ethereum"));

// so now lets create our placeholder and add extra functinality to improve it

function  CryptoCurrencyProxy() {
    this.api = new CryptoCurrencyAPI();
    this.cache ={}

    this.getValue = function(coin){
        if(this.cache[coin] == null)
          this.cache[coin] = this.api.getValue(coin)
        return this.cache[coin];
    }

}

let proxyapi = new CryptoCurrencyProxy();
console.log(proxyapi.getValue("Bitcoin"));
console.log(proxyapi.getValue("Litecoin"));
console.log(proxyapi.getValue("Ethereum"));

//in below case it wont make call to external api it just return the cached value

console.log(proxyapi.getValue("Bitcoin"));
console.log(proxyapi.getValue("Litecoin"));
console.log(proxyapi.getValue("Ethereum"));
console.log(proxyapi.getValue("Bitcoin"));
console.log(proxyapi.getValue("Litecoin"));
console.log(proxyapi.getValue("Ethereum"));
console.log(proxyapi.getValue("Bitcoin"));
console.log(proxyapi.getValue("Litecoin"));
console.log(proxyapi.getValue("Ethereum"));
