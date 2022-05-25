import { makeAutoObservable } from "mobx";

class userStore {
  username = ""
  password = ""
  email = ""
  data = [{
    "UserName": "lamduong",
    "Password": "lamduong",
    "Email": "lam159sss@gmail.com"
  }]

  constructor() {
    makeAutoObservable(this);
  }

  setUserName(value:string) {
    this.username = value;
  }

  setPassword(value:string) {
    this.password = value;
  }

  setEmail(value:string) {
      this.email = value;
  }

  addUser(username:string, password:string, email:string) {
    this.data.push({
      "UserName":username,
      "Password":password,
      "Email":email
    })
  }

  checkExist(username:string, password:string) {
    return this.data.find(user => user.UserName == username && user.Password == password)
  }

  checkIdenName(username:string) {
    return this.data.find(user => user.UserName == username)
  }

  editUser(old_username:string, new_username:string, new_email:string)
  {
    console.log(old_username)
    console.log(new_username)
    this.data.forEach(u => {
      if (u.UserName == old_username)
      {
        u.UserName = new_username
        u.Email = new_email
      }
    })
    console.log(this.data)
    
  }

}

export default new userStore();
