import clsx from "clsx";

export default function TextArea({ id, placeholder, className, ...props }) {
  return (
    <textarea
      rows={5}
      className={clsx(
        'block w-full shadow-sm py-3 px-8 border-2 border-[#ffffff0a] bg-DARK_BG_1 text-WHITE focus:border-DARK_HIGHLIGHT focus:ring-DARK_HIGHLIGHT',
        className
      )}
      placeholder={placeholder}
      {...props}
    />
  )
}
