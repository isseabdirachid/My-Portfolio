import profileImage from "@/assets/images/Aboutimages1.png";

function AboutImage() {
    return (
        <div className="flex w-full justify-center">
            <div className="relative flex size-80 items-center justify-center sm:mx-auto sm:size-130 lg:mx-0 lg:size-[520px]">
                <div className="absolute mt-4 size-70 rounded-full border-4 border-primary-custom sm:mt-4 sm:size-[470px] lg:top-12 lg:size-[450px]" />

                <img
                    src={profileImage}
                    alt="Profile"
                    className="relative z-10 h-full w-full object-contain"
                />
            </div>
        </div>
    );
}

export default AboutImage;
