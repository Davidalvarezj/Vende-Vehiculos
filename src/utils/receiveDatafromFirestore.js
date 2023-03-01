import { db, storage } from "../firebaseconf";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const receiveData = async (params) => {
  const Data = [];
  let DataFilter = [];

  if (params == "autos") {
    const querySnapshot1 = await getDocs(collection(db, "Autos"));
    querySnapshot1.forEach((doc) => {
      Data.push(doc.data());
    });
    return Data;
  }

  if (params == "autos/automovil") {
    let querySnapshot = await getDocs(collection(db, "Autos"));

    querySnapshot.forEach((doc) => {
      Data.push(doc.data());
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

  if (params == "camiones") {
    const querySnapshot1 = await getDocs(collection(db, "Camiones"));
    querySnapshot1.forEach((doc) => {
      Data.push(doc.data());
    });
    return Data;
  }
  if (params == "camiones/buses") {
    const querySnapshot3 = await getDocs(collection(db, "Camiones"));
    querySnapshot3.forEach((doc) => {
      Data.push(doc.data());
    });
    DataFilter = Data.filter((elm) => elm.BodyType == "Bus");
    return DataFilter;
  }
  if (params == "camiones/camiones") {
    const querySnapshot4 = await getDocs(collection(db, "Camiones"));
    querySnapshot4.forEach((doc) => {
      Data.push(doc.data());
    });
    DataFilter = Data.filter((elm) => elm.BodyType == "Camion");
    return DataFilter;
  }
  if (params == "camiones/maquinaria") {
    const querySnapshot4 = await getDocs(collection(db, "Camiones"));
    querySnapshot4.forEach((doc) => {
      Data.push(doc.data());
    });
    DataFilter = Data.filter((elm) => elm.BodyType == "Maquinaria pesada");
    return DataFilter;
  }

  if (params == "botes") {
    const querySnapshot1 = await getDocs(collection(db, "Botes"));
    querySnapshot1.forEach((doc) => {
      Data.push(doc.data());
    });
    return Data;
  }
  if (params == "botes/yates") {
    const querySnapshot3 = await getDocs(collection(db, "Botes"));
    querySnapshot3.forEach((doc) => {
      Data.push(doc.data());
    });
    DataFilter = Data.filter((elm) => elm.BodyType == "Yate");
    return DataFilter;
  }
  if (params == "botes/lanchas") {
    const querySnapshot4 = await getDocs(collection(db, "Botes"));
    querySnapshot4.forEach((doc) => {
      Data.push(doc.data());
    });
    DataFilter = Data.filter((elm) => elm.BodyType == "Lancha");
    return DataFilter;
  }
  if (params == "botes/veleros") {
    const querySnapshot4 = await getDocs(collection(db, "Botes"));
    querySnapshot4.forEach((doc) => {
      Data.push(doc.data());
    });
    DataFilter = Data.filter((elm) => elm.BodyType == "Velero");
    return DataFilter;
  }
  if (params == "botes/motoacuatica") {
    const querySnapshot4 = await getDocs(collection(db, "Botes"));
    querySnapshot4.forEach((doc) => {
      Data.push(doc.data());
    });
    DataFilter = Data.filter((elm) => elm.BodyType == "Moto acuatica");
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
