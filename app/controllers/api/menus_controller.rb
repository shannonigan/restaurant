class Api::MenusController < ApplicationController
  before_action :set_menu, only: [:show, :update, :destroy]
  
  def index
    render json:Menu.all
  end

  def show
    render json: @menu
  end

  def create
    menu = Menu.new(menu_params)
    if menu.save
      render json: menu
    else
      render json: { errors: menu.errors }, status: :unprocessable_entity
    end
  end

  def update
    @menu.update(complete: !menu.complete)
    render json: @menu
  end

  def destroy
    @menu.destroy
    render json: { message: "Menu deleted" }
  end

  private
    def menu_params
      params.require(:menu).permit(:name, )
    end

    def set_menu
      @menu = Menu.find(params[:id])
    end

end


# Restaurant App
# Main Objects
# Follow the lecture from today to set up a Rails app with a React front end.
# Your restaurant should have menus and menu items
# Think multiple menus( lunch, dinner )
# And each menu has multiple items (look back to rails model lecture for a 
# refresh on model associations)
# Implement all CRUD actions
# Push the assignment up to GitHub
 

# What to focus on 
# State: What is it, how to access it, and how to update it.
# Props: What is it, how to access it, how to pass it, and how it differs from state. 
# How to build class and functional components and how to use them