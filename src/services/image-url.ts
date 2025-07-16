/**
 * Inserts a crop rule into the image URL to resize it to 600x400.
 * @param url - The original image URL.
 * @returns A modified URL with cropping rule.
 */

const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default getCroppedImageUrl;