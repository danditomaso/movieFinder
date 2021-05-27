// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const response = await fetch(`https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg`);
  const data = await response;
  console.log(data);

  res.status(200).json({ name: "John Doe" });
};
