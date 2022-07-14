class ReviewsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]

  def create
    @product = Product.find params[:product_id]
    @review = Review.new(params.require(:review).permit(:rating, :body))
    @review.product = @product
    @review.user = @current_user

    if @review.save
      @reviews = @product.reviews.order(created_at: :desc)
      redirect_to product_path(@product.id)
    else
      flash[:error] = "Invalid Review"
      redirect_to product_path(@product)
    end
  end

  def destroy
    @product = Product.find params[:product_id]
    @review = Review.find params[:id]
    if @review.destroy
      flash[:success] = "Deleted"
      redirect_to product_path(@product)
    else
      redirect_to root_path
    end
  end
end
