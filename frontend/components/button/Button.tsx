import { Button } from "../ui/button";

interface IButtonForm {
    children?: React.ReactElement | string,
    props?: object
}

export default function ButtonForm({children, props}:IButtonForm){
  return (
    <Button className="w-full bg-link hover:bg-[#43d077]" {...props}>
        {children}
    </Button>
  );
};
