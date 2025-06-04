function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + d.toUTCString();
  const cookieString = name + "=" + value + ";" + expires + ";path=/";
  document.cookie = cookieString;
  console.log("Cookie creato:", cookieString);
}

function getCookie(name) {
  const nameEQ = name + "=";
  const cookiesArray = document.cookie.split(';');
  for (let i = 0; i < cookiesArray.length; i++) {
    let c = cookiesArray[i].trim();
    if (c.indexOf(nameEQ) === 0) {
      const value = c.substring(nameEQ.length);
      console.log(`Cookie trovato: ${name} = ${value}`);
      return value;
    }
  }
  console.log(`Cookie ${name} non trovato.`);
  return null;
}


function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 04 Jun 2025 00:00:00 UTC; path=/;";
  console.log(`Cookie cancellato: ${name}`);
}

setCookie("nome utente", "Giovanni Belardi", 7)
getCookie("nome utente")
deleteCookie("nome utente")
