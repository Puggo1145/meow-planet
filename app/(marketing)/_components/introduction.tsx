import Image from "next/image";

const Introduction: React.FC = () => {
    return (
        <section className="w-full flex p-4">
            <Image
                className="w-[400px]"
                src="/images/pipi.svg"
                alt="pipi"
                width={100}
                height={100}
            />
        </section>
    );
};

export default Introduction;