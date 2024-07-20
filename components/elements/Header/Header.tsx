import Image from "next/image";

type HeaderProps = {
  width?: number;
  height?: number;
};

function Header({
    width = 48,
    height = 48,
  }: HeaderProps) {
    return (
      <div>test</div>
    );
  }
  
  export { Header };