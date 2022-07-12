class BillsController < ApplicationController
  def new
  end

  def calculate
    @amount = params[:amount].to_f
    @tax = params[:tax].to_f
    @tip = params[:tip].to_f
    @people = params[:people].to_i
    @result = @amount * (1 + @tax / 100 + @tip / 100) / @people
  end
end
