import Image from "next/image";

export const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/nosearch.png" height={120} width={120} alt="Empty" />
      <h2 className="text-xl font-semibold mt-6">No results found!</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Try searching for something else
      </p>
    </div>
  );
};
