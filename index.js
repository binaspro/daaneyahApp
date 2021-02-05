const androidAPP =
  "https://play.google.com/store/apps/details?id=com.safarifone.waafi&hl=en";
const iosAPP = "https://apps.apple.com/us/app/waafi-app/id1164281864";

const { getDeviceType } = require("./utils");

const express = require("express");

const app = express();

const PORT = "3000";

app.get("/", async (req, res) => {
  const headers = req.headers;
  const deviceType = getDeviceType(headers);
  if (deviceType.includes("Mac OS") || deviceType.includes("iPhone"))
    res.redirect(iosAPP);
  else {
    res.redirect(androidAPP);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
