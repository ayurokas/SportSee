
class UserModel {
  constructor(infos, dailyActivity, averageSessions, performances) {
    this.id = infos.id;
    this.firstName = infos.userInfos.firstName;
    this.lastName = infos.userInfos.lastName;
    this.score = infos.score || infos.todayScore;
    this.calorieCount = infos.keyData.calorieCount;
    this.carbohydrateCount = infos.keyData.carbohydrateCount;
    this.lipidCount = infos.keyData.lipidCount;
    this.proteinCount = infos.keyData.proteinCount;
    this.dailyActivity = dailyActivity.sessions;
    this.sessionLength = averageSessions.sessions;
    this.performances = performances;
  }
}

export default UserModel;
