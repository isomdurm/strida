Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
  	resources :likes, only: [:index, :show, :create]
  	resources :comments, only: [:index, :show, :create]
  	resources :workouts, only: [:index, :show, :create]
  	resources :posts, only: [:index, :show, :create]
  	resources :routes, only: [:index, :show, :create]
  	resources :coordinates, only: [:index, :show, :create]
  	resource :session, only: [:create, :destroy, :show]
  	resource :user, only: [:create]
  	resource :user
  end

  root "static_pages#root"
end
