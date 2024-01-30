import Categories from "@components/Categories"
import ImageCard from "@components/ImageCard"
import ImageCardBlog from "@components/ImageCardBlog"
import SearchBar from "@components/SearchBar"
import TitleBox from "@components/TitleBox"
import { CardType } from "@components/Types"
import Slider from "@components/Slider"

export default function page() {
  return (
    <div className="container overflow-hidden pt-6">
      <Slider>
        <ImageCard 
          type={CardType.Big}
          title="Week 001 Recap Koth Event"
          subtitle="May 31, 2023 - HARRISON"
          src="/assets/img/hero-slide-1.jpeg" 
          category="News" 
        />
        <ImageCard 
          type={CardType.Big}
          title="Week 002 Recap Koth Event"
          subtitle="May 31, 2023 - HARRISON"
          src="/assets/img/hero-slide-1.jpeg" 
          category="News" 
        />
        <ImageCard 
          type={CardType.Big}
          title="Week 003 Recap Koth Event"
          subtitle="May 31, 2023 - HARRISON"
          src="/assets/img/hero-slide-1.jpeg" 
          category="News" 
        />
      </Slider>
      <div className="grid lg:grid-cols-[1fr,_250px] gap-8 mt-12">
        <div className="flex flex-col gap-6">
          <ImageCard 
            title="Excalibur Craft Guide"
            subtitle="October 11, 2023 - KAYN"
            src="/assets/img/img-excalibur-craft.jpg" 
            category="Crafting"
          />
          <ImageCard 
            title="Battle of Nations Recap"
            subtitle="July 04, 2023 - KAYN"
            src="/assets/img/img-battle-of-nations.jpeg" 
            category="Events" 
          />
          <ImageCard 
            title="Skull Easter Egg Map"
            subtitle="March 17, 2023 - JAMES"
            src="/assets/img/img-skull-easter-egg.jpeg" 
            category="Guides" 
          />
        </div>
        <div className="flex flex-col gap-6">
          <SearchBar />
          <TitleBox title="Categories">
            <Categories className="flex flex-col items-start gap-3 mt-4 text-[12px]"/>
          </TitleBox>
          <TitleBox title="Latest" className="flex flex-col gap-3 mt-4">
            <ImageCardBlog 
              title="Excalibur Craft Guide" 
              subtitle="October 11, 2023 - KAYN"
              src="/assets/img/img-excalibur-craft.jpg"
            />
            <ImageCardBlog 
              title="Week 001 Recap Koth Event"
              subtitle="May 31, 2023 - HARRISON"
              src="/assets/img/hero-slide-1.jpeg"
            />
            <ImageCardBlog 
              title="Hidden Location Spots" 
              subtitle="January 02, 2022 - EVNY"
              src="/assets/img/img-hidden-location-spots.jpeg"
            />
            <ImageCardBlog 
              title="Skull Easter Egg Map"
              subtitle="March 17, 2023 - JAMES"
              src="/assets/img/img-skull-easter-egg.jpeg"
            />
            <ImageCardBlog 
              title="Battle of Nations Recap"
              subtitle="July 04, 2023 - KAYN"
              src="/assets/img/img-battle-of-nations.jpeg" 
            />
          </TitleBox>
          <TitleBox title="Popular" className="flex flex-col gap-3 mt-4">
            <ImageCardBlog 
                title="Excalibur Craft Guide" 
                subtitle="October 11, 2023 - KAYN"
                src="/assets/img/img-excalibur-craft.jpg"
              />
              <ImageCardBlog 
                title="Week 001 Recap Koth Event"
                subtitle="May 31, 2023 - HARRISON"
                src="/assets/img/hero-slide-1.jpeg"
              />
              <ImageCardBlog 
                title="Hidden Location Spots" 
                subtitle="January 02, 2022 - EVNY"
                src="/assets/img/img-hidden-location-spots.jpeg"
              />
          </TitleBox>
          <TitleBox title="Newsletter" className="flex gap-4 mt-3">
            <input type="email" placeholder="user@gmail.com" className="font-bold text-[10px] placeholder:uppercase bg-transparent outline-none focus-within:outline-none w-full"/>
            <a href="#" className="btn-primary px-3 py-0 whitespace-nowrap text-[10px]">Sign up</a>
          </TitleBox>
        </div>
      </div>
    </div>
  )
}
