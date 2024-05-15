import { Link, Button } from "@nextui-org/react";

export default function CButton({ children, url="/", className, color = 'primary' }) {
  return (
    <Button color={`${color}`}
      className={`${className} text-white rounded-[10px] text-base h-auto inline-block sm:px-4 sm:py-3 md:px-6 md:py-3 lg:px-10 lg:py-[16px]`}
      href={url}
      as={Link}
    >
      {children}
    </Button>
  )
}
