import Image from "next/image";

const Loading = () => {
    return (
        <div className="loading-container">
          <Image src="/images/components/loading.svg" width={50} height={50} alt="Loading" className="loading" />
        </div>
    );
};

export default Loading;
