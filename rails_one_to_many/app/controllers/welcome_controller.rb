class WelcomeController < ApplicationController
    def home
        
    end
    def about
        
    end
    def contact
        
    end
    def thankyou
        @full_name = params[:full_name]
        render :thankyou, status: 201
    end
end
