var BenchForm = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function(){
    return({lat: "latitude", long: "longitude", description: "Description here"})
  },
  addBench: function(){
    
  },
  render: function(){
    return(
      <div className="bench-form">
        <form onSumbit={this.addBench}>
        <input type="text" valueLink={this.linkState('lat')}/>
          <input type="text" valueLink={this.linkState('long')}/>
          <textarea type="text" valueLink={this.linkState('description')}/>
          <input type="submit" value="Create Bench"/>
        </form>
      </div>
    )
  }
})