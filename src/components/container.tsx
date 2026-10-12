import type { ComponentPropsWithoutRef } from "react";

export function Container({ className = "", ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={`mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 ${className}`} {...props} />;
}
