import { buttonVariants } from "./ui/Button";

const Header = () => {
  return (
    <>
      <div className="flex justify-between flex-wrap items-center text-white shadow-inset backdrop-blur-sm bg-neutral-400/30 rounded-lg m-2 md:m-8 h-auto py-4 md:h-16 px-6">
        <h1 className="font-extrabold font-dancing text-xl sm:text-2xl">
          Homepage
        </h1>
        <div className="font-bold flex-wrap flex justify-between items-center gap-1 md:gap-4  text-sm md:text-base">
          <div className={buttonVariants({ variant: "ghost", size: "sm" })}>
            Login
          </div>
          <div
            className={`${buttonVariants({
              variant: "outline",
              size: "sm",
            })} border-2`}>
            Create Account
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Header;
