"use client";

import * as React from "react";
import { toast as sonnerToast } from "sonner";

type ToastProps = {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  duration?: number;
  type?: "success" | "error" | "info" | "warning";
};

function toast({ title, description, action, duration = 3000, type = "info" }: ToastProps) {
  switch (type) {
    case "success":
      sonnerToast.success(title || "Success", { description, duration, action });
      break;
    case "error":
      sonnerToast.error(title || "Error", { description, duration, action });
      break;
    case "warning":
      sonnerToast.warning(title || "Warning", { description, duration, action });
      break;
    default:
      sonnerToast.info(title || "Info", { description, duration, action });
  }
}

function useToast() {
  return { toast };
}

export { useToast, toast };