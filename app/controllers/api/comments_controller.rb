class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.all
    render 'api/comments/index'
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @comment = Comment.create!(comment_params)
    render 'api/comments/show'
  end

  private

  def comment_params
    params.require(:comment).permit(:user_id, :body, :post_id)
  end
end
