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

interface MenuTypes {
  tab: string;
  title: string;
  path: string;
  expandable: boolean;
  icon?: ReactNode;
  submenu?: MenuTypes[];
}

interface Component {
  paragraph: string;
  name: string;
  codeSection: CodeSection[];
}

interface CodeSection {
  paragraph: string;
  title: string;
  codeBlock: string[];
}

interface Course {
  title?: string;
  subtitle: string;
  path: string;
  chapters: {
    id: number;
    title: string;
    img: string;
    link: string;
    video_id: string;
  }[];
}
