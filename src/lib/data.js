export async function getTiles() {
  const res = await fetch('https://tiles-gallery-murex.vercel.app/products', {
    cache: "no-store", // optional
  });
  const data = await res.json();
  return data;
}
