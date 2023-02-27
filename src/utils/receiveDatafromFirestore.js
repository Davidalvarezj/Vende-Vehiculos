import { db, storage } from "../firebaseconf";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const receiveData = async (params) => {
  const Data = [];
  let DataFilter = [];
  console.log("receiving data from server ...");
  console.log("params: ", params);

  if (params == "autos") {
    const querySnapshot1 = await getDocs(collection(db, "Autos"));
    querySnapshot1.forEach((doc) => {
      Data.push(doc.data());
    });
    return Data;
  }

  if (params == "autos/automovil") {
    console.log("Entro al autos-automovil");
    let querySnapshot = await getDocs(collection(db, "Autos"));
    console.log("Respuesta: ", querySnapshot);
    querySnapshot.forEach((doc) => {
      Data.push(doc.data());
      console.log("Respuesta Data ", Data);
    });
    DataFilter = Data.filter((elm) => elm.BodyType == "Automovil");
    return DataFilter;
  }

  if (params == "autos/camioneta") {
    const querySnapshot3 = await getDocs(collection(db, "Autos"));
    querySnapshot3.forEach((doc) => {
      Data.push(doc.data());
    });
    DataFilter = Data.filter((elm) => elm.BodyType == "Camioneta");
    return DataFilter;
  }

  if (params == "autos/pickup") {
    const querySnapshot4 = await getDocs(collection(db, "Autos"));
    querySnapshot4.forEach((doc) => {
      Data.push(doc.data());
    });
    DataFilter = Data.filter((elm) => elm.BodyType == "Pick-Up");
    return DataFilter;
  }

  if (params == "motos") {
    const querySnapshot5 = await getDocs(collection(db, "Motos"));
    querySnapshot5.forEach((doc) => {
      Data.push(doc.data());
    });
    return Data;
  }

  if (params == "motos/scooter") {
    const querySnapshot6 = await getDocs(collection(db, "Motos"));
    querySnapshot6.forEach((doc) => {
      Data.push(doc.data());
    });
    DataFilter = Data.filter((elm) => elm.BodyType == "Scooter");
    return DataFilter;
  }

  if (params == "motos/calle") {
    const querySnapshot7 = await getDocs(collection(db, "Motos"));
    querySnapshot7.forEach((doc) => {
      Data.push(doc.data());
    });
    DataFilter = Data.filter((elm) => elm.BodyType == "Calle");
    return DataFilter;
  }

  if (params == "motos/touring") {
    const querySnapshot8 = await getDocs(collection(db, "Motos"));
    querySnapshot8.forEach((doc) => {
      Data.push(doc.data());
    });
    DataFilter = Data.filter((elm) => elm.BodyType == "Touring");
    return DataFilter;
  }
  if (params == "motos/off-road") {
    const querySnapshot9 = await getDocs(collection(db, "Motos"));
    querySnapshot9.forEach((doc) => {
      Data.push(doc.data());
    });
    DataFilter = Data.filter((elm) => elm.BodyType == "Off-road");
    return DataFilter;
  }
  if (params == "motos/cuatrimoto") {
    const querySnapshot10 = await getDocs(collection(db, "Motos"));
    querySnapshot10.forEach((doc) => {
      Data.push(doc.data());
    });
    DataFilter = Data.filter((elm) => elm.BodyType == "Cuatrimoto");
    return DataFilter;
  }

  // if (params == "all") {
  //   const querySnapshot1 = await getDocs(collection(db, "Autos"));
  //   querySnapshot1.forEach((doc) => {
  //     Data.push(doc.data());
  //   });
  //   const querySnapshot2 = await getDocs(collection(db, "Autos"));
  //   querySnapshot2.forEach((doc) => {
  //     Data.push(doc.data());
  //   });
  //   const querySnapshot3 = await getDocs(collection(db, "Autos"));
  //   querySnapshot3.forEach((doc) => {
  //     Data.push(doc.data());
  //   });
  //   const querySnapshot4 = await getDocs(collection(db, "Autos"));
  //   querySnapshot4.forEach((doc) => {
  //     Data.push(doc.data());
  //   });

  //   return Data;
  // }
};

export const fakedata = [
  {
    BodyType: "Automovil",
    Brand: "Acura",
    Contactname: "David Alvarez",
    Description: "Sin Descripcion Adicional",
    Email: "davidalvarezj@gmail.com",
    Image1:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171659314?alt=media&token=748e18a9-fa94-470c-b12a-c5cdc0586efa",
    Image2:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171660235?alt=media&token=1bd77b89-b6d2-455d-97f5-d5ea8bf67211",
    Image3:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171660741?alt=media&token=01a9d68f-0f2b-4614-9afa-3b675a86f1eb",
    Image4:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171661403?alt=media&token=6c4f753b-d1a7-446e-849e-ad9493bb90c7",
    Km: 10000,
    Location: "Amazonas",
    PostedDate: { seconds: 1677171659, nanoseconds: 314000000 },
    Price: 50000000,
    Reference: "Acura XXX",
    Uid: "HeEGjO6w3hUVO6MQiKOPk2BlOPK2",
    VehicleType: "Autos",
    Year: 2010,
    phoneNum: "9548172840",
    PostId: "12346",
  },

  {
    BodyType: "Camioneta",
    Brand: "Mazda",
    Contactname: "David Alvarez",
    Description: "Sin Descripcion Adicional",
    Email: "davidalvarezj@gmail.com",
    Image1:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171732091?alt=media&token=3bd98651-a362-452e-a8b3-b0ac33079201",
    Image2:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171660235?alt=media&token=1bd77b89-b6d2-455d-97f5-d5ea8bf67211",
    Image3:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171660741?alt=media&token=01a9d68f-0f2b-4614-9afa-3b675a86f1eb",
    Image4:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171661403?alt=media&token=6c4f753b-d1a7-446e-849e-ad9493bb90c7",
    Km: 20000,
    Location: "Amazonas",
    PostedDate: { seconds: 1677171659, nanoseconds: 314000000 },
    Price: 60000000,
    Reference: "Acura XXX",
    Uid: "HeEGjO6w3hUVO6MQiKOPk2BlOPK2",
    VehicleType: "Autos",
    Year: 2011,
    phoneNum: "9548172840",
    PostId: "1234655",
  },
  {
    BodyType: "Automovil",
    Brand: "Mazda",
    Contactname: "David Alvarez",
    Description: "Sin Descripcion Adicional",
    Email: "davidalvarezj@gmail.com",
    Image1:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171788569?alt=media&token=4799be1d-0c4a-4888-bd09-ca50465425b5",
    Image2:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171660235?alt=media&token=1bd77b89-b6d2-455d-97f5-d5ea8bf67211",
    Image3:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171660741?alt=media&token=01a9d68f-0f2b-4614-9afa-3b675a86f1eb",
    Image4:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171661403?alt=media&token=6c4f753b-d1a7-446e-849e-ad9493bb90c7",
    Km: 20000,
    Location: "Amazonas",
    PostedDate: { seconds: 1677171659, nanoseconds: 314000000 },
    Price: 60000000,
    Reference: "Acura XXX",
    Uid: "HeEGjO6w3hUVO6MQiKOPk2BlOPK2",
    VehicleType: "Autos",
    Year: 2011,
    phoneNum: "9548172840",
    PostId: "1277346",
  },
  {
    BodyType: "Pick-Up",
    Brand: "Mazda",
    Contactname: "David Alvarez",
    Description: "Sin Descripcion Adicional",
    Email: "davidalvarezj@gmail.com",
    Image1:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171659314?alt=media&token=748e18a9-fa94-470c-b12a-c5cdc0586efa",
    Image2:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171660235?alt=media&token=1bd77b89-b6d2-455d-97f5-d5ea8bf67211",
    Image3:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171660741?alt=media&token=01a9d68f-0f2b-4614-9afa-3b675a86f1eb",
    Image4:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171661403?alt=media&token=6c4f753b-d1a7-446e-849e-ad9493bb90c7",
    Km: 20000,
    Location: "Amazonas",
    PostedDate: { seconds: 1677171659, nanoseconds: 314000000 },
    Price: 60000000,
    Reference: "Acura XXX",
    Uid: "HeEGjO6w3hUVO6MQiKOPk2BlOPK2",
    VehicleType: "Motos",
    Year: 2010,
    phoneNum: "9548172840",
    PostId: "1234685",
  },
  {
    BodyType: "Automovil",
    Brand: "Mazda",
    Contactname: "David Alvarez",
    Description: "Sin Descripcion Adicional",
    Email: "davidalvarezj@gmail.com",
    Image1:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171659314?alt=media&token=748e18a9-fa94-470c-b12a-c5cdc0586efa",
    Image2:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171660235?alt=media&token=1bd77b89-b6d2-455d-97f5-d5ea8bf67211",
    Image3:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171660741?alt=media&token=01a9d68f-0f2b-4614-9afa-3b675a86f1eb",
    Image4:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171661403?alt=media&token=6c4f753b-d1a7-446e-849e-ad9493bb90c7",
    Km: 20000,
    Location: "Amazonas",
    PostedDate: { seconds: 1677171659, nanoseconds: 314000000 },
    Price: 60000000,
    Reference: "Acura XXX",
    Uid: "HeEGjO6w3hUVO6MQiKOPk2BlOPK2",
    VehicleType: "Camiones",
    Year: 2010,
    phoneNum: "9548172840",
    PostId: "1234698",
  },
  {
    BodyType: "Automovil",
    Brand: "Mazda",
    Contactname: "David Alvarez",
    Description: "Sin Descripcion Adicional",
    Email: "davidalvarezj@gmail.com",
    Image1:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171659314?alt=media&token=748e18a9-fa94-470c-b12a-c5cdc0586efa",
    Image2:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171660235?alt=media&token=1bd77b89-b6d2-455d-97f5-d5ea8bf67211",
    Image3:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171660741?alt=media&token=01a9d68f-0f2b-4614-9afa-3b675a86f1eb",
    Image4:
      "https://firebasestorage.googleapis.com/v0/b/vendevehiculos.appspot.com/o/Autos%2Fdavidalvarezj%40gmail.com%2F1677171661403?alt=media&token=6c4f753b-d1a7-446e-849e-ad9493bb90c7",
    Km: 20000,
    Location: "Amazonas",
    PostedDate: { seconds: 1677171659, nanoseconds: 314000000 },
    Price: 60000000,
    Reference: "Acura XXX",
    Uid: "HeEGjO6w3hUVO6MQiKOPk2BlOPK2",
    VehicleType: "Botes",
    Year: 2010,
    phoneNum: "9548172840",
    PostId: "125387",
  },
];
