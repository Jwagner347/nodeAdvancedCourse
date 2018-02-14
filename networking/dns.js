const dns = require('dns');
//
// dns.lookup('pluralsight.com', (err, address) => {
//   console.log(address);
// });

// dns.resolve('pluralsight.com', 'MX', (err, address) => {
//   console.log(address);
// });

dns.reverse('54.186.25.50', (err, hostnames) => {
  console.log(hostnames)
});
