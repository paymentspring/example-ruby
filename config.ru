require "rubygems"
require "bundler/setup"
Bundler.require
require "json"
Dir.glob("#{File.join(File.dirname(__FILE__), "/lib")}/*.rb").each { |m| require m }

run PaymentService
