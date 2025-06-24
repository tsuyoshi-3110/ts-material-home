import { openDB } from "idb";

const DB_NAME = "tsMatelix-db";
const STORE_NAME = "features";

export const getDB = async () => {
  return await openDB(DB_NAME, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    },
  });
};

export const getAllFeaturesFromIndexedDB = async () => {
  const db = await getDB();
  return await db.getAll(STORE_NAME);
};

interface Feature {
  id: string;
  title: string;
  text: string;
  icon: string; // 'package' | 'file' | 'truck' などでもOK
}

export const saveFeaturesToIndexedDB = async (features: Feature[]) => {
  const db = await getDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  for (const feature of features) {
    tx.store.put(feature);
  }
  await tx.done;
};
