import axios from 'axios';
import UserModel from './Model/UserModel';

// mocked data user 12
import user12Infos from './../mockedData/users/12/userInfos.json';
import user12AverageSessions from './../mockedData/users/12/userAverageSessions.json';
import user12Activity from './../mockedData/users/12/userActivity.json';
import user12Performance from './../mockedData/users/12/userPerformance.json';

// mocked data user 18
import user18Infos from './../mockedData/users/18/userInfos.json';
import user18AverageSessions from './../mockedData/users/18/userAverageSessions.json';
import user18Activity from './../mockedData/users/18/userActivity.json';
import user18Performance from './../mockedData/users/18/userPerformance.json';


async function getUser(id) {
  const dataSrc = localStorage.getItem('dataSrc');

  if (dataSrc === 'api') {
    const dataResponse = await axios.get(`http://localhost:3000/user/${id}`);
    if (dataResponse.status === 200) {
      return dataResponse.data.data;
    }
  } else if (dataSrc === 'mockedData') {
    if (id === '12') {
      return user12Infos.data;
    } if (id === '18') {
      return user18Infos.data;
    }
  }
}

async function getUserActivity(id) {
  const dataSrc = localStorage.getItem('dataSrc');

  if (dataSrc === 'api') {
    const dataResponse = await axios.get(`http://localhost:3000/user/${id}/activity`);
    if (dataResponse.status === 200) {
      return dataResponse.data.data;
    }
  } else if (dataSrc === 'mockedData') {
    if (id === '12') {
      return user12Activity.data;
    } if (id === '18') {
      return user18Activity.data;
    }
  }
}


async function getUserAverageSessions(id) {
  const dataSrc = localStorage.getItem('dataSrc');

  if (dataSrc === 'api') {
    const dataResponse = await axios.get(`http://localhost:3000/user/${id}/average-sessions`);
    if (dataResponse.status === 200) {
      return dataResponse.data.data;
    }
  } else if (dataSrc === 'mockedData') {
    if (id === '12') {
      return user12AverageSessions.data;
    } if (id === '18') {
      return user18AverageSessions.data;
    }
  }
}

async function getUserPerformance(id) {
  const dataSrc = localStorage.getItem('dataSrc');

  if (dataSrc === 'api') {
    const dataResponse = await axios.get(`http://localhost:3000/user/${id}/performance`);
    if (dataResponse.status === 200) {
      return dataResponse.data.data;
    }
  } else if (dataSrc === 'mockedData') {
    if (id === '12') {
      return user12Performance.data;
    } if (id === '18') {
      return user18Performance.data;
    }
  }
}

export default async function getProfile(userId) {

    const user = await getUser(userId);
    const userActivity = await getUserActivity(userId);
    const userAverageSessions = await getUserAverageSessions(userId);
    const userPerformance = await getUserPerformance(userId);

    // traduction des types de data et on combine les types avec les valeurs;
    const PerformancesTranslation = {
      cardio: 'Cardio',
      energy: 'Energie',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité',
    };
    const combinedPerformances = userPerformance.data.map((obj) => ({
      value: obj.value,
      kind: PerformancesTranslation[userPerformance.kind[obj.kind]],
    }));

    // création d'une nouvelle itération de la classe userModel
    const userModel = new UserModel(user, userActivity, userAverageSessions, combinedPerformances);

    return userModel;
}
