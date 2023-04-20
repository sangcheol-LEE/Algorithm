const solution = (id_pw = [], db = []) => {
  let answer = "";

  for (let i = 0; i < db.length; i++) {
    const DB_id = db[i][0];
    const DB_password = db[i][1];
    const user_id = id_pw[0];
    const user_password = id_pw[1];

    if (DB_id === user_id && DB_password === user_password) {
      answer = "login";
      break;
    } else {
      if (DB_id !== user_id) {
        answer = "fail";
      } else if (DB_password !== user_password) {
        answer = "wrong pw";
          break;
      }
    }
  }

  console.log(answer);
  return answer;
};