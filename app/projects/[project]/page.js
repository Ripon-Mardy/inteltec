import React from "react";
import Image from "next/image";


import Navbar from "@/components/Navbar";

import project1 from '../../../public/image/projects/project5.jpeg'
import project2 from '../../../public/image/projects/projects2.png'
import project3 from '../../../public/image/projects/project3.jpg'
import project4 from '../../../public/image/projects/project4.jpg'
import project5 from '../../../public/image/projects/project5.jpeg'
import project6 from '../../../public/image/projects/project6.jpg'



const page = ({ params }) => {

    const id = params.project;


    const porjectsData = [
        {
            "id": 1,
            "image": project1,
            "title": "Al Maha Rotana Hotel",
            "projectDescription": {
                "projectTitle": "Projects title one"
            }
        },
        {
            "id": 2,
            "image": project2,
            "title": "EXPO2020 Metro Station"
        },
        {
            "id": 3,
            "image": project3,
            "title": "Damac Paramount"
        },
        {
            "id": 4,
            "image": project4,
            "title": "Metro Elevated Stations"
        },
        {
            "id": 5,
            "image": project5,
            "title": "Mina A'Salam Hotel"
        },
        {
            "id": 6,
            "image": project6,
            "title": "Zabeel Mall"
        },
    ]




    return (
        <>


            <div className='bg-gray-800 fixed w-full top-0 z-30'>
                <Navbar />
            </div>



            <section className='bg-topHeaderColor'>
                <div>
                    <div className='container mx-auto flex flex-col md:flex-row gap-10'>
                        <div className=' md:basis-1/2 text-white pt-28 md:pt-40 h-auto py-10'>
                            <div>
                            <h1 className='text-3xl md:text-4xl font-semibold font-mono border-b w-fit pb-2 border-b-gray-600'>Mina A'Salam Hotel
                                (Jumeirah Group)</h1>
                            <p className='mt-5 leading-7 font-thin'>


                                Our VSAT services are ideally suited for: <br />
                                * Corporate communication (voice, video, data and internet) <br />
                                * Manufacturing and distribution (online connectivity for ERP) <br />
                                * Banks (for ATMs, core banking, credit card authentication and disaster recovery) <br />
                                * Engineering and projects (pick-and-move solutions) <br />
                                * Village Public Telephony <br />
                                * GSM/UMTS operators (both RAN and Core network Backhauling) <br />
                            </p>
                            </div>
                            <div className="mt-10">
                                <button className="border p-2 text-center px-10 font-light capitalize border-r-0">previous Project</button>
                                <button className="border p-2 text-center px-10 font-light capitalize">next project</button>
                            </div>
                        </div>
                        <div className='basis-1/2 flex items-center justify-center h-screen'>

                            <Image className="w-full h-screen object-cover rounded-sm" layout="responsive" src={project1} alt="projects" />
                        </div>
                    </div>



                </div>
            </section>
        </>
    );
};

export default page;
