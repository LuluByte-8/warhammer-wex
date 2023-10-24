import styles from "@/components/navbar.module.css";

export const NavBar: React.FC = () => {
  return (
    <div className={`${styles.navbar}`}>
      <>
        <p>Home</p>
        <p>Unit Preview</p>
        <p>Army Builder</p>
        <p>Account Management</p>
      </>
    </div>
  );
};
