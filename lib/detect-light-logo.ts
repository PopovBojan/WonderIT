const LIGHT_LOGOS = [
  "loni",
  "loni.ai",
  "loniai",
  "truelab",
  "truelabs",
  "truelabsgames",
  "truelabgames",
];

export function logoLooksLight(name: string, url?: string) {
  const compact = name.trim().toLowerCase().replace(/[^a-z0-9]/g, "");
  if (LIGHT_LOGOS.some((logo) => compact.includes(logo))) return true;
  const haystack = `${name} ${url ?? ""}`.toLowerCase();
  return /white|inverted|on[-_]?dark|light[-_]?logo/.test(haystack);
}

export function detectLightLogo(img: HTMLImageElement): boolean | null {
  try {
    const canvas = document.createElement("canvas");
    const size = 48;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return null;
    ctx.drawImage(img, 0, 0, size, size);
    const { data } = ctx.getImageData(0, 0, size, size);
    let light = 0;
    let dark = 0;
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] < 40) continue;
      const luma =
        (data[i] * 299 + data[i + 1] * 587 + data[i + 2] * 114) / 1000;
      if (luma >= 208) light += 1;
      else if (luma <= 90) dark += 1;
    }
    if (light + dark < 10) return null;
    return light > dark * 1.25;
  } catch {
    return null;
  }
}
