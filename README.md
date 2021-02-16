# CryptoLI
CryptoLI is a command-line interface to check the prices and volume of cryptocurrencies.

Register free API at https://nomics.com/

## Installation
[Clone or download](https://github.com/Siddhant356/CryptoLI.git) project. 

Run following commands in the directory to setup project
```bash
npm install
npm link
```

## Commands

```bash
# Help & Commands
cryptoli -h

# Version
cryptoli -V

# API Key Commands
cryptoli key set
cryptoli key show
cryptoli key remove

# Crypto Check Commands
cryptoli check price
cryptoli check volume
cryptoli check top
```
## Options
```bash
# Check Specific Coins (default: BTN,ETH,XRP)
cryptoli check --coin=BTC,ETH

# Choose Currency (Default: USD)
cryptoli check --cur=EUR
```

## Packages used
* [axios](https://www.npmjs.com/package/axios)
* [commander](https://www.npmjs.com/package/commander)
* [configstore](https://www.npmjs.com/package/configstore)
* [inquirer](https://www.npmjs.com/package/inquirer)
* [colors](https://www.npmjs.com/package/colors)
