Rails.application.routes.draw do

  devise_for :admins
  resources :projects
  get 'pages/home'
  get '/admin', to: 'pages#admin'

  root 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
