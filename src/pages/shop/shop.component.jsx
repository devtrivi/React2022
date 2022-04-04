import React, { Component } from 'react'
import CollectionsOverview from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component'
import { useParams, useMatch, Routes, Route } from 'react-router-dom'

const ShopPage = () => {
  return (
    <div className='shop-page'>Shop
      <Routes>
      <Route path={``} element={<CollectionsOverview/>} />
      <Route path={`:collectionId`} element={<CollectionPage/>} /></Routes>
    </div>
  )
}
export default ShopPage
