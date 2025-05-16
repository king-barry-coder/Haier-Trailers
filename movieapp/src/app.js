export const BASE_URL = 'https://api.themoviedb.org/3';
export const HEADERS = {
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTkxOGI1YzZlMzY1MGRjYmExZjRjZmVlNDJjMWQ4YiIsIm5iZiI6MS43NDY3OTkzNTM1MTgwMDAxZSs5LCJzdWIiOiI2ODFlMGFmOTFhN2M0NjdkMGE5M2I0ZTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mj5ivMBf3P1ZCu41I6Qa5taVvDphIySJ3B9wXjf5oLk',
  'Content-Type': 'application/json',
};







//  import.meta.env.VITE_MOVIE_AUTH_TOKEN
// export const AUTH_TOKEN = {
//   Authorization:
//     'AUTH-TOKEN',
//   'Content-Type': 'application/json',
// };
// // export const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTkxOGI1YzZlMzY1MGRjYmExZjRjZmVlNDJjMWQ4YiIsIm5iZiI6MS43NDY3OTkzNTM1MTgwMDAxZSs5LCJzdWIiOiI2ODFlMGFmOTFhN2M0NjdkMGE5M2I0ZTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mj5ivMBf3P1ZCu41I6Qa5taVvDphIySJ3B9wXjf5oLk'
// export const BASE_URL = 'https://api.themoviedb.org/3';

// export const fetchData = async(endpoint) => {
//     const res = await fetch (`${BASE_URL}${endpoint}?auth_token=${AUTH_TOKEN}`);
//     console.log(res)

    
//     if (!res.ok) {
//         const errorText = await res.text(); // in case it's not JSON
//         throw new Error(`API error: ${res.status} - ${res.statusText}\n${errorText}`);
//     }
//     const data = await res.json();
//     console.log(data);
//     return data.results
   
// };
