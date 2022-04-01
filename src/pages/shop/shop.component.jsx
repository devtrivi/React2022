import React, { Component } from 'react'
import CollectionsOverview from '../../components/collection-overview/collection-overview.component'
import CategoryPage from '../category/category.component'
import { Route } from 'react-router-dom'

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}`} />
  </div>
)
export default ShopPage
