const { validFileExtensions } = require("../constants/validFileExtensions");

export function isValidFileType(fileName, fileType) {
  return (
    fileName &&
    validFileExtensions[fileType].indexOf(fileName.split(".").pop()) > -1
  );
}
