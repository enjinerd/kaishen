import styles from './Header.module.css';
import Logo from './Logo';
import React from 'react';

type Props = {
  name?: string;
  profile_img?: string;
};

const Header: React.FC<Props> = ({ name, profile_img }: Props) => {
  return (
    <header
      className="flex flex-row justify-between px-16 py-6 items-center justify-center"
      data-testid="dashboard-header">
      <Logo className="h-20 w-44" />
      {name && (
        <section className="px-4 py-2 rounded-lg flex flex-row justify-center items-center bg-white text-black font-primary gap-6">
          <img src={profile_img} className={styles.profile_img} alt="profile_img" />
          <span className="text-xl font-semibold">{name}</span>
        </section>
      )}
    </header>
  );
};

export default Header;
