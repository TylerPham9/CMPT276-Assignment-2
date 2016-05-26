class StudentsController < ApplicationController
  def index
    @s=[1,2,3,4,5]
    @students = Student.all
  end

  def show
    # @students = Student.find(params[:id])
  end

  def new
    @students = Student.new
  end

  def create
    @students = Student.new(students_params)
    
    respond_to do |format|
      if @students.save
        format.html { redirect_to @students, notice: 'Student was successfully created.' }
        format.json { render :show, status: :created, location: @students }
      else
        format.html { render :new }
        format.json { render json: @students.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
    # respond_to do |format|
    #   if @students.update(students_params)
    #     format.html { redirect_to @students, notice: 'Student was successfully updated.' }
    #     format.json { render :show, status: :ok, location: @students }
    #   else
    #     format.html { render :edit }
    #     format.json { render json: @students.errors, status: :unprocessable_entity }
    #   end
    # end
  end

  def destroy
    # @students.destroy
    # respond_to do |format|
    #   format.html { redirect_to students_url, notice: 'Student was successfully destroyed.' }
    #   format.json { head :no_content }
    # end
  end

  def draw
  end
end
