import { getDictionary } from "@/get-dictionary";

function Stats({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["hero"];
}) {
  return (
    <div
      className="relative z-30 m-3 flex mt-10 text-center sm:my-6 mx-auto 
    flex-wrap
    justify-center gap-3 sm:gap-10 container text-white mb-10"
    >
      <div className="flex  items-center flex-col lg:flex-row lg:gap-4">
        <h3 className="text-3xl font-bold ">4000+</h3>
        <p className="text-gradient uppercase tracking-tighter">
          {dictionary.stats.active}
        </p>
      </div>
      <div className="flex items-center flex-col lg:flex-row lg:gap-4">
        <h3 className="text-3xl font-bold ">5080+</h3>
        <p className="text-gradient uppercase tracking-tighter">
          {dictionary.stats.happy}
        </p>
      </div>
      <div className="flex items-center flex-col lg:flex-row lg:gap-4">
        <h3 className="text-3xl font-bold ">300+</h3>
        <p className="text-gradient uppercase tracking-tighter">
          {dictionary.stats.new}
        </p>
      </div>
    </div>
  );
}
export default Stats;
