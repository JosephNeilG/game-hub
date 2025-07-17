import noImage from "../assets/no-image-placeholder.webp";

/**
 * Inserts a crop rule into the image URL to resize it to 600x400. If no available image, returns a default placeholder image.
 * @param url - The original image URL.
 * @returns Cropped image URL, or placeholdr if no image available.
 */

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
