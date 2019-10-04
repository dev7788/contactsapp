class Api::V1::ContactsController < ApplicationController
  def index
    render json: { :contacts => [
      {
        :id => 1,
        :name => 'demo1',
        :email => 'demo1@gmail.com',
        :phone => '123456'
      },
      {
        :id => 2,
        :name => 'demo2',
        :email => 'demo2@gmail.com',
        :phone => '223456'
      },
      {
        :id => 3,
        :name => 'demo3',
        :email => 'demo3@gmail.com',
        :phone => '323456'
      },
      {
        :id => 4,
        :name => 'demo4',
        :email => 'demo4@gmail.com',
        :phone => '423456'
      },
      {
        :id => 5,
        :name => 'demo5',
        :email => 'demo5@gmail.com',
        :phone => '523456'
      }
    ] }    
  end
end