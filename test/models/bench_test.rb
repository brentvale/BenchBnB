# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :text             not null
#  lat         :float            not null
#  long        :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class BenchTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
