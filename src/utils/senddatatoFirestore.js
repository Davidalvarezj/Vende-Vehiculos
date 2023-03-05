import { db, storage } from "../firebaseconf";
import { collection, getDocs, addDoc } from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
  getStorage,
} from "firebase/storage";

export const sendData = async (Data) => {
  let dateNumber = Date.now();

  console.log("Sending data to server ...");
  console.log("Data: ", Data);

  Data.PostedDate = new Date();
  const objImg1 = Data.Image1;
  const objImg2 = Data.Image2;
  const objImg3 = Data.Image3;
  const objImg4 = Data.Image4;

  const image1Ref =
    Data.VehicleType + "/" + Data.Email + "/" + dateNumber + "-1";
  const image2Ref =
    Data.VehicleType + "/" + Data.Email + "/" + dateNumber + "-2";
  const image3Ref =
    Data.VehicleType + "/" + Data.Email + "/" + dateNumber + "-3";
  const image4Ref =
    Data.VehicleType + "/" + Data.Email + "/" + dateNumber + "-4";

  const storageRef1 = ref(storage, image1Ref);

  await uploadBytes(storageRef1, objImg1);
  const url1 = await getDownloadURL(storageRef1);
  Data.Image1 = url1;
  Data.Image1Ref = image1Ref;
  console.log("Uploaded  file #1");

  const storageRef2 = ref(storage, image2Ref);
  await uploadBytes(storageRef2, objImg2);
  const url2 = await getDownloadURL(storageRef2);
  Data.Image2 = url2;
  Data.Image2Ref = image2Ref;
  console.log("Uploaded  file #2");

  const storageRef3 = ref(storage, image3Ref);
  await uploadBytes(storageRef3, objImg3);
  const url3 = await getDownloadURL(storageRef3);
  Data.Image3 = url3;
  Data.Image3Ref = image3Ref;
  console.log("Uploaded  file #3");

  const storageRef4 = ref(storage, image4Ref);
  await uploadBytes(storageRef4, objImg4);
  const url4 = await getDownloadURL(storageRef4);
  Data.Image4 = url4;
  Data.Image4Ref = image4Ref;
  console.log("Uploaded  file #4");

  console.log("New Data: ", Data);

  const docRef = await addDoc(collection(db, Data.VehicleType), Data);

  return true;
};

export const deleteUserfiles = async (imagepath) => {
  const storage = getStorage();
  const deleteRef1 = ref(storage, imagepath.Image1Ref);
  const deleteRef2 = ref(storage, imagepath.Image2Ref);
  const deleteRef3 = ref(storage, imagepath.Image3Ref);
  const deleteRef4 = ref(storage, imagepath.Image4Ref);

  await deleteObject(deleteRef1);
  await deleteObject(deleteRef2);
  await deleteObject(deleteRef3);
  await deleteObject(deleteRef4);
  return true;
};
