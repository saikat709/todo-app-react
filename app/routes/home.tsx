import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { 
      title: "Tusk - Manage your todos effectively." 
    },
    { 
      name: "description", 
      content: "Welcome to React Router!" 
    },
  ];
}

export default function Home() {
  return <h1> Hello </h1>;
}
