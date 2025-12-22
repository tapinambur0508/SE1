const usernameElement = document.getElementById("username") as HTMLInputElement;

console.log(usernameElement.value);

const root = document.getElementById("root");

// // Solution 1
// createRoot(root as HTMLDivElement).render(<App />);

if (root !== null) {
  createRoot(root).render(<App />);
}
