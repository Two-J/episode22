const getAllUsers = async () => {
  const url = "http://localhost:3000/users";
  const fromServer = await fetch(url);
  const user = await fromServer.json();
  const userContainer = document.querySelector(".userContainer");
  console.log(user);
  for (let i = 0; i < user.length; i++) {
    const userdiv = document.createElement("div");
    userdiv.append(user[i]);
    userContainer.append(userdiv);
  }
};

getAllUsers();
// console.log(response);
