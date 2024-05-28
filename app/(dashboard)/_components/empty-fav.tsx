import Image from "next/image";

export const EmptyFavourites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/nofavourites.png" height={120} width={120} alt="Empty" />
      <h2 className="text-xl font-semibold mt-6">No favourite boards!</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Try adding boards to favourites.
      </p>
    </div>
  );
};
