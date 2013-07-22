ProjectTwo::Application.routes.draw do

  post "/switch_day" => "home#switch_day"

  match "signup" => 'users#new', :as => "signup"
  match "login" => 'sessions#new', :as => "login"
  match "logout" => 'sessions#destroy', :as => "logout"

  resources :sessions, :except => [:edit, :update, :index]
  resources :users
  resources :tasks
  resources :lists

  root :to => "home#index"
end
