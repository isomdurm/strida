class Api::WorkoutsController < ApplicationController
  def index
    @workouts = Workout.all
    render 'api/workouts/index'
  end

  def show
    @workout = Workout.find(params[:id])
    render 'api/workouts/show'
  end

  def create
    @workout = Workout.create!(workout_params)
    render 'api/workout/show'
  end

  private

  def workout_params
    params.require(:workout).permit(:user_id, :route_id, :time_start, :time_end)
  end
end
