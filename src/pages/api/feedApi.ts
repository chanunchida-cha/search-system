var raw = JSON.stringify({
  page: 0,
  limit: 10,
});

var requestOptions: RequestInit = {
  method: "POST",
  body: raw,
};

async function loadFeedData() {
  try {
    const response = await fetch(
      "https://sit-api.uap.universityapp.net/research/api/v1/researcher/lists",
      requestOptions
    );

   const result = response.json();
   return result
  } catch (error: any) {
    console.log(error.errorMessage);
  }
}

export default async function handler(req: any, res: any) {
  const response = await loadFeedData();
  res.status(200).json(response);
 
}
