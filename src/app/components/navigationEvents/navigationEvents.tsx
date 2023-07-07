"use client";

import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  NProgress.start();

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  return null;
}
