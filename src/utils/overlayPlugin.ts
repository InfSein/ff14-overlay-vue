import { callOverlayHandler } from "../../cactbot/resources/overlay_plugin_api";

export function openExternalUrl(url: string): void {
  let fullUrl = url;
  if (!url.startsWith("http://") && !url.startsWith("https://")) {
    const origin = window.location.origin;
    const pathname = window.location.pathname;
    const cleanUrl = url.startsWith("/") ? url : `/${url}`;
    fullUrl = `${origin}${pathname}${cleanUrl}`;
  }
  void callOverlayHandler({ call: "openWebsiteWithWS", url: fullUrl });
}

export async function selectNativeDirectory(): Promise<string | undefined> {
  const res = await callOverlayHandler({ call: "cactbotChooseDirectory" });
  return res?.data;
}
