import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



import Navbar from '@/components/Navbar'


// ====== iamgs ===== 
import project1 from '../../public/image/projects/projects1.jpg'
import project2 from '../../public/image/projects/projects2.png'
import project3 from '../../public/image/projects/project3.jpg'
import project4 from '../../public/image/projects/project4.jpg'
import project5 from '../../public/image/projects/project5.jpeg'
import project6 from '../../public/image/projects/project6.jpg'

const page = ({params}) => {


  const id = params.project;
  

    const porjectsData = [
        {
            "id": 1,
            "image": project1,
            "title" : "Al Maha Rotana Hotel"
        },
        {
            "id": 2,
            "image": project2,
            "title" : "EXPO2020 Metro Station"
        },
        {
            "id": 3,
            "image": project3,
            "title" : "Damac Paramount"
        },
        {
            "id": 4,
            "image": project4,
            "title" : "Metro Elevated Stations"
        },
        {
            "id": 5,
            "image": project5,
            "title" : "Mina A'Salam Hotel"
        },
        {
            "id": 6,
            "image": project6,
            "title" : "Zabeel Mall"
        },
        {
          "id": 7,
          "image": project6,
          "title" : "Zabeel Mall"
      }
    ]



  return (
    <>



      <div className='bg-gray-800 fixed w-full top-0 z-30'>
        <Navbar />
      </div>

      <section className='md:pt-40 pt-28 pb-10'>
        <div className='container mx-auto'>

        <h1 className='text-5xl text-gray-600 mb-8 font-medium '>Projects</h1>

        <div className='grid grid-cols-2 md:grid-cols-3 md:gap-12 gap-5'>
                    {
                        porjectsData.map((project, projectIndex) => (
                            <Link href={'#'} key={projectIndex}>
                               <div>
                               <Image src={project.image} width={100} height={100} layout='responsive' alt='project' className='rounded-md object-cover w-full overflow-hidden hover:opacity-65 duration-100 ease-in-out' />
                               <h1 className='bg-gray-500 w-full text-center text-white py-1'> {project.title} </h1>
                               </div>
                            </Link>
                        ))
                    }
                </div>
                <Link href={'/projects'} className=' w-fit p-2 px-5 text-sm md:text-lg rounded-sm border-2 font-light capitalize hover:text-white hover:bg-black overflow-hidden duration-200 ease-in-out block mx-auto mt-10' >show more</Link>



        </div>
      </section>
    </>
  )
}

export default page
