class PagesController < ApplicationController
  def home
  end

  def admin
    @project = Project.new
    @projects = Project.all
  end
end
