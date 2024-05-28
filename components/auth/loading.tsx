import Image from "next/image";

const loading = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <Image
        src="/logo.png"
        alt="logo"
        width={120}
        height={120}
        className="animated pulse duration-700"
      ></Image>
    </div>
  );
};

export default loading;
