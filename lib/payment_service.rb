class PaymentService < Sinatra::Base
   set :views, File.dirname(__FILE__) + '/../views'

   get '/' do
      erb :payment_form
   end

   post '/' do
      #test_25e414a1213973ea81a7ceaec9
      token = params["token"]
      begin
          response = RestClient.post('https://test_25e414a1213973ea81a7ceaec9:@api.paymentspring.com/api/v1/charge', { :token => token, :amount => "20000" }) 
      rescue Exception => e
	  response = JSON.parse(e.response)
	  @errors = response["errors"]
          erb :payment_form
      else
          @transaction = JSON.parse(response)
	require 'pp'
pp @transaction
          erb :success
      end
   end

end
