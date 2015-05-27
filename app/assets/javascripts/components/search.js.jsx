var Search = React.createClass({
  getInitialState: function() {
    return ({ benches: BenchStore.all()});
  },
  componentDidMount: function(){
    BenchStore.addChangeListener(this.onChange);
  },
  onChange: function(){
    this.setState({benches: BenchStore.all()});
  },
  render: function(){
    
    return(
      <div>
        <Map/>
        <Index benches={this.state.benches}/>
        <BenchForm />
      </div>
    )
  }
})