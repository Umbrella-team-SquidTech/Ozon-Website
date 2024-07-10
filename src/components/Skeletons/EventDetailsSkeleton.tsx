export default function EventDetailsSkeleton() {
  return (
    <div className="pt-0 md:px-20 animate-pulse ">
      <div className="px-4 py-2">
        <div className="flex flex-col items-start w-full ">
          <div className="w-full h-[18rem] md:h-[30rem] bg-gray-200 rounded"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4 mt-5"></div>
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="flex flex-row items-center gap-3 pt-3">
              <div className="h-3 w-[13rem] bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
