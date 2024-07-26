declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

interface Navigation {
  title: string;
  path: string;
}

interface Card {
  paragraph: string;
  title: string;
}
