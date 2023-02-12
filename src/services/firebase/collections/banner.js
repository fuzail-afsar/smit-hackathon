import { getAllDocsByCollection } from ".";

export const getBannerImages = () =>
  new Promise(async (resolve, reject) => {
    try {
      const images = [];
      await getAllDocsByCollection("banner", (doc) =>
        images.push(doc.data().image)
      );
      resolve(images);
    } catch (error) {
      reject(error);
    }
  });
