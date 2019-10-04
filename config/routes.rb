Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html  
  root 'static#index'

  namespace :api do
    namespace :v1, default: { format: 'json' } do
      get 'contacts', to: 'contacts#index'
    end
  end

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end
