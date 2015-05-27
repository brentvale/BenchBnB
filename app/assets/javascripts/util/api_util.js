ApiUtil = {
  fetchBenches: function(n_e_bounds, s_w_bounds){
    $.ajax({
      type: "GET",
      url: "/api/benches",
      data: {
        bounds: {
          n_e_bounds: {
            lat: n_e_bounds.A, 
            long: n_e_bounds.F
          },
          s_w_bounds: {
            lat: s_w_bounds.A, 
            long: s_w_bounds.F
          } 
        }
      },
      success: function(resp){
        ApiActions.receiveAll(resp);
      }, 
      error: function(resp){
        console.log("errored out in the ajax request");
        
      }
    });
  }
}