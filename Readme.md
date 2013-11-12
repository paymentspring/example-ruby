paymentspring/example-ruby
===========================

This app shows you how easy it is to start charging credit cards and remain PCI-compliant.

To have the transactions show up in your PaymentSpring dashboard, replace the public/private keys with your own.

For complete documentation, checkout out [https://www.paymentspring.com/docs/api/rest](https://www.paymentspring.com/docs/api/rest)

Run this app by:

Checkout this repo
```Shell
$ git clone git://github.com/paymentspring/example-ruby.git
$ bundle install
$ bundle exec unicorn
```

Troubleshooting
-----------------
If you run into any errors after running the last command, please make sure you don't have anything currently running on port 8080.
