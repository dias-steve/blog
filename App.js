import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import {Provider as Provid} from './src/context/BlogContext';
import DetailBlogScreen from './src/screens/DetailBlogScreen';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Detail: DetailBlogScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blog'
    }
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <Provid><App/></Provid>;
};