class TagsController < ApplicationController
  def index
    @tags = Tag.order(created_at: :DESC)
  end

  def show
    @tag = Tag.find(params[:id])
    @products = @tag.products
  end

  private

  def tag_params
    params.require(:product).permit(:title)
  end
end
