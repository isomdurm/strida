class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
    render 'api/posts/index'
  end

  def show
    @post = Post.find(params[:id])
  end

  def create
    @post = Post.create!(route_params)
    render 'api/posts/show'
  end

  private

  def post_params
    params.require(:post).permit(:user_id, :description, :workout_id, :image_url, :address)
  end
end