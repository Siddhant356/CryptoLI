const program = require('commander');
const check = require('../commands/check');

program
.command('price')
.description('Check price of coins')
.option('--coin <type>', 'Add specific coin types in csv format', 'BTC,ETH,XRP')
.option('--cur <currency>', 'Change the currency', 'USD')
.action(cmd => check.price(cmd));

// program
// .command('show')
// .description('Show API key')
// .action(key.show);

// program
// .command('remove')
// .description('Remove API key')
// .action(key.remove);



program.parse(process.argv);