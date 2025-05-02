import React from 'react'
import Cards from "./Cards"
import list from "../../public/list.json"
import { Link } from 'react-router-dom'
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className='mt-28 text-center '>
          <h1 className='text-2xl '>We're delighted to have you <span className='text-pink-500'>here! :)</span></h1>
          <p className="py-5" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eveniet at delectus voluptatibus ab nisi, maxime, illum rerum harum quaerat praesentium quibusdam distinctio. Amet placeat tempore obcaecati hic in Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptatem iste vel neque amet, similique maiores beatae delectus error veniam exercitationem consequatur. Explicabo, corrupti deserunt ad quasi quis cum enim!</p>
          
          <Link to="/"><button className='bg-pink-500 text-white py-2 px-3 rounded my-5 hover:bg-pink-700 duration-300'>Back</button></Link>
        </div>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4">
          {list.map((item)=>{
            return <Cards key={item.id} item={item}/>
          })
        }
        </div>
      </div>
    </>
  )
}

export default Course
