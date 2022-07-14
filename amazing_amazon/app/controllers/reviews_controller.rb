class ReviewsController < ApplicationController
  before_action :load_review, only: [:destroy]
  before_action :authenticate_user!, except: [:index, :show]
  before_action :authorize_user!, only: [:destroy]

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
    if @review.destroy
      flash[:success] = "Deleted"
      redirect_to product_path(@product)
    else
      redirect_to root_path, alert: "can't delete"
    end
  end

  private

  def load_review
    @review = Review.find params[:id]
  end

  def authorize_user!
    unless can? :crud, @review
      flash[:danger] = "Access Denied"
      redirect_to root_path
    end
  end
end
