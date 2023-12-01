import styles from "@/components/categorylink.module.css";
import { Open_Sans } from "next/font/google";
import Link from "next/link";

const Opensans = Open_Sans({ subsets: ["latin"] });

interface ICategoryLink {
  name: string;
  categoryId: string;
  imageURL: string;
}

export const CategoryLink: React.FC<ICategoryLink> = ({
  name,
  categoryId,
  imageURL,
}) => {
  return (
    <div
      className={`${styles.linkContainer} ${Opensans.className}`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 80%), url(${imageURL})`,
      }}
    >
      <div>
        <h1 className={`${styles.categorytitle}`}>{name}</h1>
        <Link
          href={`categories/${categoryId}/armies`}
          key={name}
          className={`${styles.armyLink}`}
        >
          <button className={`${styles.categorybutton} ${Opensans.className}`}>
            See all armies
          </button>
        </Link>
      </div>
    </div>
  );
};
