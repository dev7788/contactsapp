class Api::V1::ContactsController < ApplicationController
  def index
    render json: { :contacts => [
      {
        :name => 'demo1',
        :email => 'demo1@gmail.com',
        :phone => '123456'
      },
      {
        :name => 'demo2',
        :email => 'demo2@gmail.com',
        :phone => '223456'
      },
      {
        :name => 'demo3',
        :email => 'demo3@gmail.com',
        :phone => '323456'
      },
      {
        :name => 'demo4',
        :email => 'demo4@gmail.com',
        :phone => '423456'
      }
    ] }    
  end
end