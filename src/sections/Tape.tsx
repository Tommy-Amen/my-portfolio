import StarIcon from "@/assets/icons/star.svg";

const words = [
  "Performant",
  "Accessible",
  "Responsive",
  "Scalable",
  "Interactive",
  "Maintainable",
  "Reliable",
  "User Friendly",
  "Search Optimized",
  "Secure",
  "Usable"
];


export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400  -rotate-3 -mx-1 ">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex py-3 flex-none gap-4">
            {words.map((word) => (
              <div key={word} className="inline-flex items-center gap-4">
                <span className="text-gray-900 uppercase font-extrabold text-sm ">
                  {word}
                </span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
