const Label = () => {
  return (
    <div className="dark:bg-gray-800 hidden md:flex-1  md:flex justify-center items-center bg-gray-100">
      <div className="space-y-2 w-[80%]">
        <h1 className="text-3xl font-semibold dark:text-white">
          "The customer service I received was exceptional. The support team
          went above and beyond to address my concerns."
        </h1>
        <div>
          <h3 className="text-xl font-semibold dark:text-white">
            Jules Winnfield
          </h3>
          <p className="text-slate-500 ">CEO, Acme Inc</p>
        </div>
      </div>
    </div>
  );
};
export default Label;
