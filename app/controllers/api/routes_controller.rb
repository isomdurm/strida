class Api::RoutesController < ApplicationController

  def index
    @routes = Route.all
    render 'api/routes/index'
  end

  def show
    @route = Route.find(params[:id])
    render 'api/routes/show'
  end

  def create
    @route = Route.create!(route_params)
    render 'api/routes/show'
  end

  private

  def route_params
    params.require(:route).permit(:name, :description, :route_type, :owner_id, :private)
  end
end
