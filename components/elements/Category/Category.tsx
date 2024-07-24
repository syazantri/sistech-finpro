import Image from "next/image";

type CategoryProps = {
  imageUrl: string;
  title: string;
};

function Category({
  imageUrl,
  title,
}: CategoryProps) {
  return (
    <div className="flex flex-col items-center cursor-pointer mt-2">
    <Image
      src={imageUrl}
      alt={title}
      width="60"
      height="60"
      className="rounded-full"
    />
    <p className="text-colors-black font-medium text-sm text-center justify-center max-w-28 items-center mt-2">{title}</p>
    </div>
  );
}

export { Category };