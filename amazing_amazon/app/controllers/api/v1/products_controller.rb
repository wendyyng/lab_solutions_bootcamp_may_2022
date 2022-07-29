class Api::V1::ProductsController < Api::ApplicationController
  before_action :find_product, only: [:show, :destroy, :update]
  before_action :authenticate_user!, except: [:index, :show]

  def index
    products = Product.order(created_at: :desc)
    render(json: products)
  end

  def show
    if @product
      render json: @product
    else
      render(json: { status: 404 }, status: 404)
    end
  end

  def create
    @product = Product.new product_params
    @product.user = current_user
    @product.save!
    render json: { id: @product.id }
  end

  def update
    if @product.update product_params
      render json: { id: @product.id }
    else
      render(
        json: { errors: @product.errors },
        status: 422,
      )
    end
  end

  def destroy
    @product.destroy
    render(json: { status: 200 }, status: 200)
  end

  private

  def find_product
    @product ||= Product.find params[:id]
  end

  def product_params
    params.require(:product).permit(:title, :description, :price, :created_at, :reviews)
  end
end
