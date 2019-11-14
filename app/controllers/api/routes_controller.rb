class Api::RoutesController < ApplicationController

  def index
    @routes = Route.all
    render :index
  end

  def show
    @route = Route.find(params[:id])
  end

  def crea
    @route = Route.create!(route_params)
    render :show
  end

  private

  def route_params
    params.require(:route).permit(:name, :description, :route_type, :owner_id, :private)
  end
end
