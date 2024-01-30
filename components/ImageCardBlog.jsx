export default function ImageCardBlog({ title, subtitle, src, alt, href = "#" }) {
  return (
    <a href={href} className="flex gap-5 group">
      <div className="overflow-hidden w-32 aspect-video z-10 relative outline outline-1 outline-[rgb(var(--clr-primary),_.5)] focus:outline-offset-0 focus:outline-1 before:z-20 before:absolute before:inset-0 before:bg-black before:bg-opacity-50 group-hover:before:bg-opacity-0 before:transition-all">
        <img className="relative z-0 w-full h-full object-cover group-hover:scale-110 transition-all" src={src} alt={alt} />
      </div>
      <div className="w-full lg:max-w-[190px] flex flex-col justify-between gap-1">
        <div className="">
          <h5 className="font-bold text-[12px] uppercase leading-[1.2] group-hover:text-opacity-80 text-white transition-all">{title}</h5>
          <h6 className="font-bold text-[9px] mt-2">{subtitle}</h6>
        </div>
        <div className="h-1 w-full bg-enveus-primary group-hover:w-8 transition-all origin-center"></div>
      </div>
    </a>
  )
}
