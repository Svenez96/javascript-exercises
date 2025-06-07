function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  const cookieString = name + "=" + value + ";" + expires + ";path=/";
  document.cookie = cookieString;
  console.log("Cookie creato:", cookieString);
}

function getCookie(name){
  let cookies = document.cookie.split(';')
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if(cookie.startsWith(name + "=")){
      return cookie.substring(name.length + 1)
    }  
  }
  return null
}

function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 04 Jun 2025 00:00:00 UTC; path=/;";
  console.log(`Cookie cancellato: ${name}`);
}

setCookie("user", "Giovanni Belardi", 7)
console.log(getCookie("user"))
deleteCookie("user")
console.log(getCookie("user"))