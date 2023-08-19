import React from 'react'
import "./List.scss"
import Card from '../Card/Card';

const List = () => {

  const data = [
    {
        id:1,
        img:"https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
        img2:"https://plus.unsplash.com/premium_photo-1683140735360-c445064f4be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        title:"Long Sleeve Graphic T-Shirt",
        isNew:true,
        oldPrice:19,
        price:12,
    },
    {
      id:2,
      img:"https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80",
      img2:"https://images.unsplash.com/photo-1548123378-bde4eca81d2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      title:"Coat",
      isNew:true,
      oldPrice:19,
      price:12,
  },
  {
    id:3,
    img:"https://images.unsplash.com/photo-1677680127378-2525b64715b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    img2:"https://images.unsplash.com/photo-1677680127394-241930dde43c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    title:"Skirt",
    oldPrice:19,
    price:12,
},
{
  id:4,
  img:"https://images.unsplash.com/photo-1548354797-6b1c0d36b3af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=414&q=80",
  img2:"https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  title:"Hat",
  oldPrice:19,
  price:12,
},
];

  return (
    <div className='list'>
      {data?.map(item=>(<Card item={item} key={item.id}/>))}
    </div>
  )
}

export default List