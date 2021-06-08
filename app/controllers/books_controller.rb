class BooksController < ApplicationController
   before_action :set_book, only:[:show, :update, :destroy]

    def app
      render component: "App"
   end

   def index
      render json: Book.all
    end

    def show
       render json: {book: @book}
    end

   def create
      @book = Book.new(book_params)
      if(@book.save)
        render json: @book
      else
        render json:  @book.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
        if(@book.update(book_params))
          render json: @book
        else
          render json: @book.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
      render json: @book.destroy
    end
    
   private

   def book_params
      params.require(:book).permit(:title, :description, :author)
   end

   def set_book
      @book = Book.find(params[:id])
  end
end
