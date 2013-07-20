ProjectTwo::Application.routes.draw do

  post "/switch_day" => "home#switch_day"

  root :to => "home#index"
end
