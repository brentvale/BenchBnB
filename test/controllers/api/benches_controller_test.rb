require 'test_helper'

class Api::BenchesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

  test "should get create" do
    get :create
    assert_response :success
  end

  test "should get bench_params" do
    get :bench_params
    assert_response :success
  end

end
