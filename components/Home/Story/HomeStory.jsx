import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StoryItem from "./StoryItem";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 6,
    slidesToSlide: 6

  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 6,
    slidesToSlide: 6
  },
};

let dummyData=[]
for(let i = 0 ; i<15 ; i++){
  dummyData.push(<StoryItem/>)
}
const HomeStory = () => {
  return (
    <div>
      <Carousel
        id="story-carousel"
        responsive={responsive}
        className="w-[468px] rounded-md bg-white text-[#262626] py-4 px-0 pl-[12px] border-[#dbdbdb] border"
      >
      {dummyData.map((data)=>(data))}



      
      </Carousel>
    </div>
  );
};

export default HomeStory;
