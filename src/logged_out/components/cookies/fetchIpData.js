const fetchIpData = new Promise((resolve, reject) => {
  const ajax = new XMLHttpRequest();
  if (window.location.href.includes("localhost")) {
 
    resolve({ data: { country: "DE" } });
    return;
  }
  ajax.open("GET", "https://ipinfo.io/json");
  ajax.onload = () => {
    const response = JSON.parse(ajax.responseText);
    if (response) {
      resolve(response);
    } else {
      reject();
    }
  };
  ajax.onerror = reject;
  ajax.send();
});

export default fetchIpData;
