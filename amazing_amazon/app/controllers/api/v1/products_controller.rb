class Api::V1::ProductsController < Api::ApplicationController
  before_action :find_product, only: [:show, :destroy, :update]
  before_action :authenticate_user!, except: [:index, :show]
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

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
    if @product.save
      render json: { id: @product.id }
    else
      render(
        json: { errors: @product.errors.messages },
        status: 422,
      )
    end
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
    if @product.destroy
      render(json: { status: 200 }, status: 200)
    else render(json: { status: 500 })     end
  end

  protected

  def record_invalid(error)
    invalid_record = error.record
    errors = invalid_record.errors.map do |errorObject|
      {
        type: error.class.to_s,
        record_type: invalid_record.class.to_s,
        field: errorObject.attribute,
        message: errorObject.options[:message],
      }
    end
    render(
      json: { status: 422, errors: errors },
      status: 422,
    )
  end

  def record_not_found(error)
    render(
      status: 404,
      json: {
        errors: [
          {
            type: error.class.to_s,
            message: error.message,
          },
        ],
      },
    )
  end

  private

  def find_product
    @product ||= Product.find params[:id]
  end

  def product_params
    p params
    params.permit(:title, :description, :price)
  end
end
