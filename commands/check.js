const KeyManager = require('../lib/KeyManager');
const CryptoAPIs = require('../lib/CryptoAPIs');

const check = {
    async price(cmd){
        try {
            const keyManager = new KeyManager();
            const key = keyManager.getKey();

            const api = new CryptoAPIs(key);
            const priceOutputData = await api.getPriceData(cmd.coin, cmd.cur);

            console.log(priceOutputData);
        } catch (err) {
            console.error(err.message.red);
        }
    }
}

module.exports = check;