import Menu from "@components/layout/Menu";

export default function Footer() {
  return (
    <footer className="bg-black py-10 border-b-4 border-solid border-enveus-primary bg-opacity-80 mt-24">
      <div className="container">
        <div className="flex flex-col text-center sm:text-left sm:flex-row items-center gap-10 sm:gap-32">
          <p className="uppercase font-enveus text-2xl text-center leading-4">Enveus <span className="block text-xl">of</span> creation</p>
          <Menu 
            routes={{"/": {name: "Home"}, "/guides": {name: "Guides"}, "/recipes": {name: "Recipes"}, "/blog": {name: "Blog"}, "/news": {name: "News"}, "/search": {name: "Search"}}}
            className="uppercase flex flex-col sm:flex-row flex-wrap gap-12 font-menu text-white text-opacity-50"
            classNamesNormal="text-[14px] hover:text-enveus-primary transition-colors"
          />
        </div>
      </div>
    </footer>
  )
}
