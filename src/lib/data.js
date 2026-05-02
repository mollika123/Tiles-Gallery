export async function getTiles() {
  const res = await fetch('https://tiles-gallery-murex.vercel.app/data.json', {
    cache: "no-store", // optional
  });
  const data = await res.json();
  return data.products;
}
