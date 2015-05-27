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

class Bench < ActiveRecord::Base
  
  def self.in_bounds(bounds)
    lat_min = bounds["n_e_bounds"]["lat"]
    lat_max = bounds["s_w_bounds"]["lat"]
    long_min = bounds["n_e_bounds"]["long"]
    long_max = bounds["s_w_bounds"]["long"]
    Bench.where(["lat > ? and lat < ? and long > ? and long < ?",
                lat_max,
                lat_min,
                long_max,
                long_min
                ])  
  end
end
