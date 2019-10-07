class Api::V1::ContactsController < ApplicationController
  def index
    render json: { :contacts => [
      {
        :id => 1,
        :name => 'demo1 demo1',
        :email => 'demo1@gmail.com',
        :tags => ['host', 'admin', 'tag 1']
      },
      {
        :id => 2,
        :name => 'demo2 demo2',
        :email => 'demo2@gmail.com',
        :tags => ['host', 'admin', 'tag 2']
      },
      {
        :id => 3,
        :name => 'demo3 demo3',
        :email => 'demo3@gmail.com',
        :tags => ['host', 'admin', 'tag 3']
      },
      {
        :id => 4,
        :name => 'demo4 demo4',
        :email => 'demo4@gmail.com',
        :tags => ['host', 'admin', 'tag 4']
      },
      {
        :id => 5,
        :name => 'demo5 demo5',
        :email => 'demo5@gmail.com',
        :tags => ['host', 'admin', 'tag 5']
      }
    ] }    
  end
end