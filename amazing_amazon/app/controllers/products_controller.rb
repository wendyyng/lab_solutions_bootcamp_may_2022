class ProductsController < ApplicationController
  before_action :load_product, except: [:create, :index]

  def index
    @products = Product.order(created_at: :DESC)
  end

  def new
  end

  def create
    @product = Product.new product_params
    if @product.save
      redirect_to product_path @product
    else
      render :new
    end
  end

  def show
  end

  def destroy
    @product.destroy
    redirect_to products_path
  end

  def edit
  end

  def update
    if @product.update product_params
      redirect_to product_path @product
    else
      render :edit
    end
  end

  private

  def product_params
    params.require(:product).permit(:title, :description, :price)
  end

  def load_product
    if params[:id].present?
      @product = Product.find(params[:id])
    else
      @product = Product.new
    end
  end
end
