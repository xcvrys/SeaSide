type HeaderProps = {
  mode: "main" | "login" | "dashboard";
};

type TableListProps = {
  type: string;
  date: string;
  description: string;
  category: string;
  amount: number;
};

type TableProps = {
  account: string;
  search: string;
};

type Data = {
  [key: string]: TableListProps[];
};

interface Transaction {
  type: string;
  date: string;
  description: string;
  category: string;
  amount: number;
}
type TableProps = {
  account: string;
};

type TableListProps = {
  type: string;
  date: string;
  description: string;
  category: string;
  amount: number;
};

type Data = {
  [key: string]: TableListProps[];
};

type RightDashboardProps = {
  account: string;
};

type FooterProps = {
  extended?: boolean;
};

type ArticleProps = {
  title: string;
  content: ReactElement;
};

type ChartProps = {
  Chartdata: { month: string; ammount: number }[];
};

type CardProps = {
  selectCard: () => void;
  cardName: string;
  cardNumber: string;
  cardBalance: string;
  cardCurrency: string;
  selected: boolean;
};

type AarticleProps = {
  children: React.ReactNode;
};

type ArticleSectionProps = {
  header: string;
  subheader: string;
  descItems: string[];
  mainButtonText: string;
  secondaryButtonText: string;
  imgSrc: string;
  imgAlt: string;
  reverse?: boolean;
};