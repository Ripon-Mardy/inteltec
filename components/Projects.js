import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


// ===== iamges ==== 
import project1 from '../public/image/projects/projects1.jpg'
import project2 from '../public/image/projects/projects2.png'
import project3 from '../public/image/projects/project3.jpg'
import project4 from '../public/image/projects/project4.jpg'
import project5 from '../public/image/projects/project5.jpeg'
import project6 from '../public/image/projects/project6.jpg'

const Projects = () => {


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
        }
    ]


    return (
        <>

            <section className='bg-sectionBgColor py-14'>
                <div className='container mx-auto'>

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
                <button className=' p-2 px-5 text-sm md:text-lg font-light rounded-sm border  text-white capitalize hover:bg-white hover:text-black duration-200 ease-in-out block mx-auto mt-10' >all projects</button>

                </div>
            </section>

        </>
    )
}

export default Projects
