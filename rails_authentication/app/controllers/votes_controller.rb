class VotesController < ApplicationController
    def create
        @review = Review.find(params[:review_id])
        vote = Vote.new(is_vote: params[:is_vote], user:current_user, review: @review)
        if !can?(:vote, @review)
            flash.alert = "can't vote your own review"
            redirect_to product_path(@review.product)
        elsif vote.save
          flash.notice = "Review Voted"
          redirect_to product_path(@review.product)
        else
          flash.alert = vote.errors.full_messages.join(", ")
          redirect_to product_path(@review.product)
        end
    end

    def destroy
        vote = current_user.votes.find(params[:id])
        @product = vote.review.product
        if can? :destroy, vote
            vote.destroy
            flash.notice = "Canceled"
            redirect_to product_path(@product)
        else
            flash.alert = "Can't canceled"
            redirect_to product_path(@product)
        end
    end
end
