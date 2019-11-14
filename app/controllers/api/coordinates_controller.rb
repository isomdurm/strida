class Api::CoordinatesController < ApplicationController

  def index
    @coordinates = Coordinate.all
    render :index
  end

  def show
    @coordinate = Coordinate.find(params[:id])
  end

  def create
    @coordinate = Coordinate.create!(coord_params)
    render :show
  end

  private

  def coord_params
    params.require(:coordinate).permit(:route_id, :lat, :long)
  end
end
