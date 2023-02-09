import preview_miniblog from '../images/preview_miniblog.png';
import preview_react_api_tmdb from '../images/preview_react_api_tmdb.png';
import preview_react_typescript from '../images/preview_react_typescript.png';
import preview_secret_word from '../images/preview_secret_word.png';


export const dataPortfolio: { hash: string, title: string, image: string, by: string, description: string, date: string, link:string }[] = [
  { hash: '001', title: 'React Typescript', image: preview_react_typescript, by: "Paulo Henrique", description: "This project consists of a website created using ReactJs with TypeScript, where I can create a to-do list with a title and a level of difficulty. It is possible to edit and delete each task.", date: "Jan, 2023", link: "https://yleus.github.io/react-typescript/"},
  { hash: '002', title: 'React API TMDB', image: preview_react_api_tmdb, by: "Paulo Henrique", description: "A website created using Reactjs and using the TMDB API, where I can search for movies to see their rating, duration, budget, revenue and description.", date: "Jan, 2023", link: "https://yleus.github.io/react-api-tmdb/"},
  { hash: '003', title: 'Secret Word', image: preview_secret_word, by: "Paulo Henrique", description: "A web game created using ReactJs, where I have to guess what the word is, having a hint of what that word is, and being able to make three mistakes to guess the word. If you guess the word, you receive 100 points to continue playing.", date: "Jan, 2023", link: "https://yleus.github.io/secret-word/"},
  { hash: '004', title: 'Mini Blog', image: preview_miniblog, by: "Paulo Henrique", description: "A blog project, where I can register and create posts with links to external images, with tags about what my post represents, and a text. ReactJs and Firebase are used for its operation.", date: "Jan, 2023", link: "https://yleus.github.io/mini-blog/"},
];
