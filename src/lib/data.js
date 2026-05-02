export async function getTiles() {
  const res = await fetch('/data.json', {
    cache: "no-store", // optional
  });
  const data = await res.json();
  return data;
}
