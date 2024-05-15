import {Button} from "@nextui-org/react";

export default function CButton({children,className, color='primary'}) {
  return (
    <Button color={`${color}`} className={`${className} rounded-[10px] text-base h-auto inline-block sm:px-4 sm:py-2 md:px-6 md:py-3 lg:px-10 lg:py-[15px]`}>
      {children}
    </Button>
  )
}
