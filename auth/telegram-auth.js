import client from "../config/telegram.js";
import input from "input";
import fs from "fs";

(async () => {
  const sessionFile = "session.json";

  await client.start({
    phoneNumber: async () => await input.text("Номер телефона: "),
    password: async () => await input.password("Пароль: "),
    phoneCode: async () => await input.password("Код из сообщения: "),
    onError: (err) => console.log(err),
  })

  if (!fs.existsSync(sessionFile)) {
    fs.writeFileSync(sessionFile, JSON.stringify({ token: client.session.save() }, null, 2));
  }

  fs.writeFileSync(sessionFile, JSON.stringify({ token: client.session.save() }, null, 2));

  console.log("You should now be connected.");
})();