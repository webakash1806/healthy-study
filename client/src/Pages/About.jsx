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
                                Healthy Study offers affordable food combos tailored for students and professionals. Our nutritious meals are priced economically, ensuring access to wholesome options without breaking the bank. Fuel your studies and workdays with our delicious and budget-friendly offerings.
                            </p>
                        </div>
                        {/* <div className='relative pt-10 pl-6 ml-6 border-l md:border-none'>
                            <div className='w-full md:absolute md:block hidden h-[0.1px] bg-white top-7'></div>
                            <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r  from-[#35C8F2] to-[#27B872] rounded-full md:top-[21.5px] md:left-3 absolute left-[-0.47rem] top-[3rem]'></div>
                            <h2 className='text-[1.25rem] font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)]'>HR recruitment</h2>
                            <p className='text-[0.95rem] pt-2'>Our HR recruitment service streamlines talent acquisition, connecting businesses with top-tier candidates. We employ strategic methodologies, leveraging industry expertise to identify and attract the most qualified professionals. From sourcing to onboarding, we ensure a seamless hiring process, cultivating successful partnerships and fostering organizational growth.</p>
                        </div> */}

                    </div>
                    <div className='w-[90vw] sm:w-[75vw] md:w-[45vw] flex flex-col items-center lg:w-[40vw]'>
                        <h1 className='text-[1.4rem] w-fit font-semibold border-b-2 pb-[1px] mb-[1.5rem]'>About the Founder</h1>

                        <div className='relative pl-6 ml-6 border-l'>
                            <div className=' w-[0.9rem] h-[0.9rem] bg-gradient-to-r  from-[#35C8F2] to-[#27B872] rounded-full absolute left-[-0.47rem] top-[0.5rem]'></div>
                            <h2 className='text-[1.25rem] font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)]'>Meet Founder - The Creative Force Behind Healthy Study</h2>
                            <p className='text-[0.95rem] pt-2'>As the founder of Healthy Study, I'm passionate about nourishing minds and bodies. Our company offers affordable food combos designed to fuel your study sessions. With nutritious options at nominal prices, we prioritize your well-being while you focus on academic success.</p>
                        </div>
                        <div className='relative pt-10 pl-6 ml-6 border-l'>
                            <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r  from-[#35C8F2] to-[#27B872] rounded-full absolute left-[-0.47rem] top-[3.05rem]'></div>
                            <h2 className='text-[1.25rem] font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)]'>Inspiration for Healthy Study</h2>
                            <p className='text-[0.95rem] pt-2'>Inspired by my own struggles as a student, we offer affordable food combos tailored for busy minds. Fuel your studies with nutritious meals at nominal prices. Because nourishing your body shouldn&apos;t break the bank. Study well, eat well with Healthy Study.</p>
                        </div>
                        <div className='relative pt-10 pl-6 ml-6 border-l'>
                            <div className='w-[0.9rem] h-[0.9rem] bg-gradient-to-r  from-[#35C8F2] to-[#27B872] rounded-full absolute left-[-0.47rem] top-[3.05rem]'></div>
                            <h2 className='text-[1.25rem] font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,#35C8F2,#27B872)]'>Our Commitment</h2>
                            <p className='text-[0.95rem] pt-2'>At Healthy Study, I'm committed to providing affordable food combos that nourish both body and mind. Inspired by my own journey as a student, I ensure every meal is budget-friendly without compromising on quality or taste.</p>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    )
}

export default About
