export const getData = async () => {
  return await fetch("http://192.168.1.26:3003/list")
    .then((data) => data.json())
    .then((events) => events)
    .catch((err) => console.log(err));
};
