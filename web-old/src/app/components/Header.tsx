import Link from "next/link";
import React from "react";
import website from "../config/website";
import { getSettings } from "../utils/sanity-queries";

type Props = {};

const Header = async (props: Props) => {
  const settings = await getSettings();

  return (
    <header>
      <div className='flex justify-between'>
        <Link href='/'>{settings.siteName}</Link>
        <div className='infos'>Infos</div>
      </div>
    </header>
  );
};

export default Header;
