import Image from "next/image"

function Header() {
  return (
    <div className="max-w-[1000px] mx-auto h-auto flex items-center justify-center text-slate-50">
      <Image
        src={"/img/BANNER.png"}
        alt={"logo copa"}
        height={396}
        width={1118}
        className="max-w-[1000px] h-[265px] object-cover overflow-hidden"
        priority
      />
    </div>
  )
}

export default Header
