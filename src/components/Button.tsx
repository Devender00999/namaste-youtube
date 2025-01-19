const Button = ({
   title = "All",
   selected = false,
}: {
   title: string;
   selected?: boolean;
}) => {
   return (
      <div
         className={`rounded-lg cursor-pointer h-8 px-3 font-medium flex text-sm w-max items-center  bg-[#f2f2f2] ${
            selected ? "bg-black text-white" : ""
         }`}
      >
         {title}
      </div>
   );
};

export default Button;
