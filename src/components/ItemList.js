import React from 'react'
import Item from './Item';

function ItemList({imageList}) {
     
  return (
      <>
      <div>
        {imageList.results.map((item,index) => <Item key = {index} list = {item.slug}/>)}
      </div>
      </>
  )
}

export default ItemList