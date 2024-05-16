import React from 'react'
import HomeLayout from '../Layouts/HomeLayout'

const About = () => {
    return (
        <HomeLayout>
            <div className='bg-[#0C1015] text-white flex flex-col items-center justify-center gap-4 pb-20 pt-4 '>
                <p className=' text-[2.4rem]  bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)] md:text-[3rem] font-mono font-bold text-center'>Know more about us</p>

                <div className='flex flex-col items-center justify-center gap-10 md:flex-row md:gap-0'>
                    <div className='w-[90vw] sm:w-[75vw] md:w-[45vw] flex flex-col items-center lg:w-[40vw]'>
                        <h1 className='text-[1.4rem] w-fit font-semibold border-b-2 pb-[1px] mb-[3rem]'>What we do?</h1>
                        <div className='relative pl-6 ml-6 border-l md:border-none'>
                            <div className='w-full md:absolute md:block hidden h-[0.1px] bg-white top-[-10px]'></div>
                            <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r  from-[#35C8F2] to-[#27B872] rounded-full md:top-[-16px] md:left-3 absolute left-[-0.47rem] top-[0.5rem]'></div>
                            <h2 className='text-[1.25rem] font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)]'>Food Delivery Services</h2>
                            <p className='text-[0.95rem] pt-2'>
                                We deliver nutritious snacks straight to your doorstep, making healthy eating effortless for students. Simply browse our menu, place your order online and enjoy your Snacks delivered directly to your campus location. With a focus on convenience, nutritional value, and variety, Snacky is your go-to solution for delicious, wholesome combo snacks on campus. Order now and fuel your mind, nourish your body Snacky.
                                .
                            </p>
                        </div>
                        {/* 
                        <div className='relative pt-10 pl-6 ml-6 border-l md:border-none'>
                            <div className='w-full md:absolute md:block hidden h-[0.1px] bg-white top-7'></div>
                            <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r  from-[#35C8F2] to-[#27B872] rounded-full md:top-[21.5px] md:left-3 absolute left-[-0.47rem] top-[3rem]'></div>
                            <h2 className='text-[1.25rem] font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)]'>HR recruitment</h2>
                            <p className='text-[0.95rem] pt-2'>Our HR recruitment service streamlines talent acquisition, connecting businesses with top-tier candidates. We employ strategic methodologies, leveraging industry expertise to identify and attract the most qualified professionals. From sourcing to onboarding, we ensure a seamless hiring process, cultivating successful partnerships and fostering organizational growth.</p>
                        </div> 
                        */}
                        <div className='relative pl-6 ml-6 border-l md:mt-10 md:border-none'>
                            <div className='w-full md:absolute md:block hidden h-[0.1px] bg-white top-[-10px]'></div>
                            <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r  from-[#35C8F2] to-[#27B872] rounded-full md:top-[-16px] md:left-3 absolute left-[-0.47rem] top-[0.5rem]'></div>
                            <h2 className='text-[1.25rem] font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)]'>Why Choose Snacky</h2>
                            <p className='text-[0.95rem] pt-2'>Nutritious Options: We believe that healthy eating should never sacrifice taste or convenience. That's why all of our snacks are carefully Organized to provide the nutrients you need to stay energized and nourished throughout the day.
                                Convenience: With Snacky, you can say goodbye to long lines at the campus cafeteria or vending machines. Our food delivery service brings wholesome snacks right to your doorstep, saving you time and hassle.</p>
                        </div>
                        <div className='relative pt-10 pl-6 ml-6 border-l md:border-none'>
                            <div className='w-full md:absolute md:block hidden h-[0.1px] bg-white top-7'></div>
                            <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r  from-[#35C8F2] to-[#27B872] rounded-full md:top-[21.5px] md:left-3 absolute left-[-0.47rem] top-[3rem]'></div>
                            <h2 className='text-[1.25rem] font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)]'>Community Support</h2>
                            <p className='text-[0.95rem] pt-2'> At Snacky, we're more than just a food delivery service; we're a community dedicated to promoting health and wellness on campus. Join us in our mission to create a culture of healthy living by making informed choices about what you eat </p>
                        </div>

                    </div>
                    <div className='w-[90vw] sm:w-[75vw] md:w-[45vw] flex flex-col items-center lg:w-[40vw]'>
                        <h1 className='text-[1.4rem] w-fit font-semibold border-b-2 pb-[1px] mb-[1.5rem]'>About the Founder</h1>

                        <div className='relative pl-6 ml-6 border-l'>
                            <div className=' w-[0.9rem] h-[0.9rem] bg-gradient-to-r  from-[#35C8F2] to-[#27B872] rounded-full absolute left-[-0.47rem] top-[0.5rem]'></div>
                            <h2 className='text-[1.25rem] font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)]'>Meet Founder - The initiative strength behind Snacky </h2>
                            <p className='text-[0.95rem] pt-2'>At Snacky, our mission is driven by our passionate founder, Akash Kumar Singh. With a vision to revolutionize campus dining, Akash founded Snacky to make healthy eating convenient and accessible for students. Inspired by their own experiences as a student struggling to find nutritious options, Akash is dedicated to empowering students to prioritize their health and well-being. Their commitment to providing delicious, wholesome meals and snacks has made Snacky a leader in campus food delivery services. Join us in celebrating Akash and their dedication to creating a healthier future for students everywhere.
                            </p>
                        </div>
                        <div className='relative pt-10 pl-6 ml-6 border-l'>
                            <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r  from-[#35C8F2] to-[#27B872] rounded-full absolute left-[-0.47rem] top-[3.05rem]'></div>
                            <h2 className='text-[1.25rem] font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)]'>Inspiration for Snacky</h2>
                            <p className='text-[0.95rem] pt-2'>Inspired by student struggles with campus refreshment, Snacky aims to revolutionize nutrition for academic success. Founded by Akash, our mission is to provide convenient access to wholesome meals, empowering students to prioritize health without compromising on taste or convenience.</p>
                        </div>
                        <div className='relative pt-10 pl-6 ml-6 border-l'>
                            <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r  from-[#35C8F2] to-[#27B872] rounded-full absolute left-[-0.47rem] top-[3.05rem]'></div>
                            <h2 className='text-[1.25rem] font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)]'>Our commitments</h2>
                            <p className='text-[0.95rem] pt-2'> Snacky is committed to providing convenient access to nutritious snacks , empowering students to prioritize health amidst their academic pursuits. We strive to revolutionize campus dining with wholesome options & combo, ensuring every student can fuel their success with delicious , nourishing snacks</p>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout >
    )
}

export default About
