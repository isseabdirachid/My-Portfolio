import MoltenMetal from "./MoltenMetal";

const Background = () => {
    return (
        <div className="pointer-events-none fixed inset-0 z-0 hidden h-screen w-screen dark:block">
            <MoltenMetal
                color1="#000000"
                color2="#ff710d"
                color3="#ffffff"
                speed={0.45}
                scale={4.8}
                detail={3}
                glow={1.5}
                coreSize={0.1}
                swirl={1}
                fold={-0.29}
                blackPoint={0.05}
                brightness={1.15}
                colorMode="molten"
                grain
                grainIntensity={0.05}
                mouseInteraction
                mouseStrength={0.3}
                opacity={1}
            />
        </div>
    );
};

export default Background;
