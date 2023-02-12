import { getAllDocsByCollection } from ".";

export const getCities = () =>
  new Promise(async (resove, reject) => {
    try {
      const cities = [];
      await getAllDocsByCollection("cities", (doc) => {
        cities.push({ label: doc.data().name, value: doc.id });
      });
      resove(cities);
    } catch (error) {
      reject(error);
    }
  });
