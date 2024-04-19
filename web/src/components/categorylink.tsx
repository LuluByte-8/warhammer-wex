import Link from "next/link";

import styles from "@/components/categorylink.module.css";

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
      className={`${styles.linkContainer}`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.80) 80%), url(${imageURL})`,
      }}
    >
      <div>
        <h1 className={`${styles.categoryTitle}`}>{name}</h1>
        <Link
          href={`categories/${categoryId}/armies`}
          key={name}
          className={`${styles.armyLink}`}
        >
          <button className={`${styles.categoryButton}`}>See all armies</button>
        </Link>
      </div>
    </div>
  );
};
