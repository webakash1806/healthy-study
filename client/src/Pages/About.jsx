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
                            We deliver nutritious snacks straight to your doorstep, making healthy eating effortless for students. Simply browse our menu, place your order online and enjoy your Snacks delivered directly to your campus location. With a focus on convenience, nutritional value, and variety, Healthy Study is your go-to solution for delicious, wholesome combo snacks on campus. Order now and fuel your mind, nourish your body healthy study. 
.
                            </p>
                        </div>
                        <div className='relative pt-10 pl-6 ml-6 border-l md:border-none'>
                            <div className='w-full md:absolute md:block hidden h-[0.1px] bg-white top-7'></div>
                            <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r  from-[#35C8F2] to-[#27B872] rounded-full md:top-[21.5px] md:left-3 absolute left-[-0.47rem] top-[3rem]'></div>
                            <h2 className='text-[1.25rem] font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)]'>Why Choose Healthy Study</h2>
                            <p className='text-[0.95rem] pt-2'>Nutritious Options: We believe that healthy eating should never sacrifice taste or convenience. That's why all of our snacks are carefully Organized to provide the nutrients you need to stay energized and nourished throughout the day.
Convenience: With HealthyStudy, you can say goodbye to long lines at the campus cafeteria or vending machines. Our food delivery service brings wholesome snacks right to your doorstep, saving you time and hassle.</p>
                        </div>
                        <div className='relative pt-10 pl-6 ml-6 border-l md:border-none'>
                            <div className='w-full md:absolute md:block hidden h-[0.1px] bg-white top-7'></div>
                            <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r  from-[#35C8F2] to-[#27B872] rounded-full md:top-[21.5px] md:left-3 absolute left-[-0.47rem] top-[3rem]'></div>
                            <h2 className='text-[1.25rem] font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)]'>Community Support</h2>
                            <p className='text-[0.95rem] pt-2'> At Healthy Study, we're more than just a food delivery service; we're a community dedicated to promoting health and wellness on campus. Join us in our mission to create a culture of healthy living by making informed choices about what you eat </p>
                        </div>

                    </div>
                    <div className='w-[90vw] sm:w-[75vw] md:w-[45vw] flex flex-col items-center lg:w-[40vw]'>
                        <h1 className='text-[1.4rem] w-fit font-semibold border-b-2 pb-[1px] mb-[1.5rem]'>About the Founder</h1>

                        <div className='relative pl-6 ml-6 border-l'>
                            <div className=' w-[0.9rem] h-[0.9rem] bg-gradient-to-r  from-[#35C8F2] to-[#27B872] rounded-full absolute left-[-0.47rem] top-[0.5rem]'></div>
                            <h2 className='text-[1.25rem] font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)]'>Meet Founder - The initiative strength behind Healthy Study </h2>
                            <p className='text-[0.95rem] pt-2'>At Healthy Study, our mission is driven by our passionate founder, [ Prashant Raj ]. With a vision to revolutionize campus dining, [ Manshu Kumari sah ] founded Healthy Study to make healthy eating convenient and accessible for students. Inspired by their own experiences as a student struggling to find nutritious options, [ Prashant Raj ] is dedicated to empowering students to prioritize their health and well-being. Their commitment to providing delicious, wholesome meals and snacks has made Healthy Study a leader in campus food delivery services. Join us in celebrating [ Prashant Raj ] and their dedication to creating a healthier future for students everywhere.
</p>
                        </div>
                        <div className='relative pt-10 pl-6 ml-6 border-l'>
                            <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r  from-[#35C8F2] to-[#27B872] rounded-full absolute left-[-0.47rem] top-[3.05rem]'></div>
                            <h2 className='text-[1.25rem] font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)]'>Inspiration for Healthy Study</h2>
                            <p className='text-[0.95rem] pt-2'>Inspired by student struggles with campus refreshment, Healthy Study aims to revolutionize nutrition for academic success. Founded by  Prashant Raj & Co Founded by Manshu Kumari Sah, our mission is to provide convenient access to wholesome meals, empowering students to prioritize health without compromising on taste or convenience.</p>
                        </div>
                        <div className='relative pt-10 pl-6 ml-6 border-l'>
                            <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r  from-[#35C8F2] to-[#27B872] rounded-full absolute left-[-0.47rem] top-[3.05rem]'></div>
                            <h2 className='text-[1.25rem] font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)]'>Our commitments</h2>
                            <p className='text-[0.95rem] pt-2'> Healthy Study is committed to providing convenient access to nutritious snacks , empowering students to prioritize health amidst their academic pursuits. We strive to revolutionize campus dining with wholesome options & combo, ensuring every student can fuel their success with delicious , nourishing snacks</p>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default About
