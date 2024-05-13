let host = "https://graph.instagram.com/me/media?";
let path = "fields=media_url,permalink&access_token=";
var fields = "?fields=media_type,media_url,caption,permalink&access_token=";
var token = "IGQWROb2FxZAUlLazNIeEg4eWZAJSTJ4MVlidm9IQmx1ZAnZAwUEd6dVVIWF95ZAlplUWNIcGt5VFZAzVTVLTE1KYTllSE9vaUJUeVZAFTHE0Nng3NVNQdFZAZAS3gzb0VOU0FYS2V4am9PTTk3WlB6VkM5eW5TTVIwb2hMaWcZD";

var json1 = host + path + token;
var json2 = "https://fgp.one/feed/get-data";

var jsonData = token.length > 170 ? json1 : json2;

fetch(jsonData)
  .then((response) => response.json())
  .then((dataArray) => {
    // console.log(dataArray)
    dataArray.data.forEach((element) => {
      // console.log(element.media_url)
      document.querySelector(".instagram").innerHTML += `
      <a href="${element.permalink}" target="_blank">
      <img src='${element.media_url}'>
      </a>
      `;
    });
  });
