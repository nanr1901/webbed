import Navbar from "../../components/navbar/navbar"
import Footer from "../../components/footer/footer"
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import { useEffect, useState } from "react";
const Home = () =>{
    const [fact,setFact] = useState('')
    useEffect(()=>{
        const animalStream = async () =>{
            const resp = await fetch("https://dogapi.dog/api/v2/facts");
            const fact = await resp.json();
            setFact(fact.data[0].attributes.body);
            console.log(fact.data[0].attributes.body);
        }
        animalStream()
    },[])
    
    return (
        <div className="h-full w-full flex-col justify-between">
            <Navbar/>

            <div className="bg-cover bg-[url('/home/sanjai/vortex/vite-project/public/cartoon-cute-animals-astronauts-spacesuits-open-space/106z_2208_w015_n001_86b_p12_86.jpg')] h-5/6 w-full p-52 px-[600px]">
                <div className="flex flex-col justify-center items-center h-full backdrop-blur-lg text-white">
                    <p className="text-center font-extrabold text-4xl p-2">Visit all our animals with a <br/>click of a button</p>
                    <button className="bg-white text-purple-800 p-3 rounded-xl text-lg">Purchase tickets</button>
                </div>
            </div>
            {/* <div className="flex flex-row justify-between items-center w-full px-[50%]">
                <div className="flex flex-row w-[300px] justify-center items-center">
                    <Carousel withIndicators height={400} >
                        <Carousel.Slide>
                            <Image src="public/carousel/nishdeer.jpg" h={300} w={300}/>
                        </Carousel.Slide>
                        <Carousel.Slide>
                        <Image src="public/carousel/nishdeer.jpg" h={300} w={300}/>
                        </Carousel.Slide>
                        <Carousel.Slide>
                        <Image src="public/carousel/nishdeer.jpg" h={300} w={300}/>
                        </Carousel.Slide>
                    </Carousel>
                </div>
            </div>
             */}
             <div>
                <div className="flex w-full justify-center items-center">
                    <p className="font-bold text-3xl p-6 font-mono">Watch Live Streams </p>
                </div>
             <div className="flex flex-row justify-between gap-10 py-4  px-6">
                <div>
                    <img className="h-80 rounded-xl" src="public/carousel/nishdeer.jpg">
                    </img>
                </div>
                <div>
                    <img className="h-80 rounded-xl" src="public/carousel/nishdeer.jpg">
                    </img>
                </div>
                <div>
                    <img className="h-80 rounded-xl" src="public/carousel/nishdeer.jpg">
                    </img>
                </div>
                <div>
                    <img className="h-80 rounded-xl" src="public/carousel/nishdeer.jpg">
                    </img>
                </div>
             </div>
             </div>
             <div className="bg-black text-white flex flex-col justify-center w-full p-10 wod">
                <p className="text-3xl font-sans">Animals Fact of the day</p>
                <p className="text-4xl font-sans">{fact}</p>
             </div>
            <Footer/>

        </div>
    )
}

export default Home;