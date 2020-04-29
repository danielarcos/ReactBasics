import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent'
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { DISHES } from '../shared/dishes';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    //const dish = this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0];
    const HomePage = () => {
      return(
          <Home />
      );
    }
    
    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
          </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;