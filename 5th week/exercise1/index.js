function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  const cookieString = name + "=" + value + ";" + expires + ";path=/";
  document.cookie = cookieString;
  console.log("Cookie creato:", cookieString);
}


function deleteCookie(name) {
  document.cookie = name + "=; expires=Thu, 04 Jun 2025 00:00:00 UTC; path=/;";
  console.log(`Cookie cancellato: ${name}`);
}

setCookie("nome utente", "Giovanni Belardi", 7)
deleteCookie("nome utente")
