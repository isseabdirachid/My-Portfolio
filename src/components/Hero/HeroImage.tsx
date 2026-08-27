import profileImage from "@/assets/images/profile-pic (6).png";

function HeroImage() {
    return (
        <div className="relative">
            <div className="relative size-72 overflow-hidden rounded-full border-4 border-primary-custom/25 sm:size-80  lg:size-[400px]">
                <img
                    src={profileImage}
                    alt="Isse Abdirachid"
                    className="h-full w-full object-cover"
                />
            </div>
        </div>
    );
}

export default HeroImage;
