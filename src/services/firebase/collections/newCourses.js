import { getAllDocsByCollection } from ".";

export const getNewCourses = () =>
  new Promise(async (resolve, reject) => {
    {
      try {
        const newCourses = [];
        await getAllDocsByCollection("new_courses", (doc) => {
          newCourses.push({ ...doc.data(), id: doc.id });
        });
        resolve(newCourses);
      } catch (error) {
        reject(error);
      }
    }
  });
