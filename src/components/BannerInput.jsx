import { Avatar } from "@nextui-org/react";

export default function BannerInput({ icon, placeholder, value, readonly }) {
    return (
        <label htmlFor="amount" className="border border-[#222225] bg-[#0E0E10] rounded-xl py-4 lg:py-5 px-4 flex items-center gap-4">
            <Avatar src={icon} className="w-5 h-5" />
            <input type="text" id="amount" className="bg-transparent border-none outline-none text-[#7E7A89]" placeholder={placeholder} readOnly={readonly} />
        </label>
    )
}
