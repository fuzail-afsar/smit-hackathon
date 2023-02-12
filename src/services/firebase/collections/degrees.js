import { getAllDocsByCollection } from ".";

export const getDegrees = () =>
  new Promise(async (resove, reject) => {
    try {
      const degrees = [];
      await getAllDocsByCollection("degrees", (doc) => {
        degrees.push({ label: doc.data().name, value: doc.id });
      });
      resove(degrees);
    } catch (error) {
      reject(error);
    }
  });
