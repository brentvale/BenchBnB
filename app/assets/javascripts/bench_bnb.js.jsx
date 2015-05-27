var RouteHandler = ReactRouter.RouteHandler;
var Route = ReactRouter.Route;

var App = React.createClass({
  render: function(){
    return(
      <div>
        <header><h1>Bench BnB</h1></header>
        <RouteHandler/>
      </div>
    );
  }
});
var routes = (
  <Route name="app" path="/" handler={App}>
    <ReactRouter.DefaultRoute handler={Search}/>
  </Route>
);

$(function() {
  ReactRouter.run(routes, function (Handler) {
    var root = document.getElementById('content');
    React.render(<Handler/>, root);
  });
})

