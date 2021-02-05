function getDeviceType(headers) {
  const userAgentInfo = headers["user-agent"];
  let osFirstIndex = userAgentInfo.indexOf("(");
  let osLastIndex = userAgentInfo.indexOf(")");
  let OS = userAgentInfo.substring(osFirstIndex + 1, osLastIndex);
  let OSName = OS.split(";")[1].trim();
  return OSName;
}

exports.getDeviceType = getDeviceType;
