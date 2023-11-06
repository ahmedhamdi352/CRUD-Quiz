export const extractVideoID = (url) => {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\\&\\?]*).*/;
  var match = url.match(regExp);
  if (match && match[7].length === 11) {
    console.log(match[7])
    return match[7];
  } else {
    console.log("oo")
    return null
  }
}