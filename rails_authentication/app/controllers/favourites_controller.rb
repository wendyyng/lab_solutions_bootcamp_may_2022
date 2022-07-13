class FavouritesController < ApplicationController
    before_action :authenticate_user!

    def create
        @product = Product.find(params[:product_id])
        favourite = Favourite.new(user:current_user, product: @product)
        if !can?(:favourite, @product)
            flash.alert = "can't favourite your own product"
        elsif favourite.save
          flash.notice = "Product Favourited"
        else
          flash.notice = favourite.errors.full_messages.join(", ")
        end
        redirect_to product_path(@product)
    end

    def destroy
        favourite = current_user.favourites.find(params[:id])
        @product = favourite.product
        if can? :destroy, favourite
            favourite.destroy
            flash.notice = "Product Unfacourited"
        else
            flash.alert = "Something wrong here"
        end
        redirect_to product_path(@product)
    end
end
