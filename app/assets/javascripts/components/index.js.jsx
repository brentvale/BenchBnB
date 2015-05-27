var Index = React.createClass({

  render: function(){
    return(
      <ul>
        {
          this.props.benches.map(function(bench){
            return <li key={bench.id} onChange={this.onChange}> {bench.description} </li>
          })
        }
      </ul>
    )
  }
  
})