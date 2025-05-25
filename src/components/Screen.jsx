import DotNav from "./DotNav";

export default function Screen() {
    return (
        <div className="wrapper w-[400px] h-[400px] bg-radial-gray-lite relative flex items-center justify-center">
            {/* BACKGROUND CIRCLES */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="bg-white rounded-full w-[15vw] h-[15vw] shadow-xl z-20" />
            </div>

            <div className="absolute inset-0 flex items-center justify-between px-[3vw] z-0">
                <div className="bg-white rounded-full w-[15vw] h-[15vw]" />
                <div className="bg-white rounded-full w-[15vw] h-[15vw]" />
            </div>

            {/* LEFT SIDE TEXT */}
            <div className="absolute left-15 top-1/2 -translate-y-1/2 z-10 max-w-sm">
                <h2 className="text-[12px] mb-1">Hey, it's Nađa ˙⋆✮</h2>
                <h1 className="text-[27px] font-bold mb-1">
                Full-stack Developer <br />
                & Data Science nerd
                </h1>
                <p className="text-[9px]">
                Practical experience across software engineering<br />
                and data analysis. Clean code for meaningful results.
                </p>
            </div>

            <div className="absolute right-20 w-[200px] h-[200px] z-10">
                <img
                    src='/model-screenshot.png'
                    alt='3D Laptop Model'
                    className="w-full object-contain"
                />
            </div>
            
            <DotNav scale={0.5} />
        </div>
    )
}
