export default function Index() {
  const getData = async () => {
    const data = await fetch("/api/cards").then((res) => res.json());
    console.log(data);
  };

  getData();

  return <div>Start building your app 🤟</div>;
}
