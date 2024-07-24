import React, { useState } from 'react';
import Image from "next/image";

function Header() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <div className="header-container shadow flex flex-row items-center h-20">
      <div className="flex ml-16 mr-16 flex-row items-center gap-2">
        <Image src="/images/icon-dots.png" alt="Icon Dots" width="26" height="25" />
        <Image src="/images/logo-coursera.png" alt="Logo Coursera" width="158" height="49" />
      </div>
      <div className="searchbar outline outline-colors-searchgrey outline-offset-4 rounded-2xl flex flex-row items-center justify-between mr-32 gap-16">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="What do you want to learn?"
          className="text-sm text-colors-black font-light ml-2 outline-none bg-transparent w-80 placeholder:text-colors-black/35"
        />
        <div onClick={handleSearch} className="cursor-pointer">
          <Image src="/images/icon-searchbar.png" alt="Icon Search Bar" width="24" height="24" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-5 mr-8">
        <Image src="/images/icon-cart.png" alt="Icon Cart" width="34" height="34" />
        <Image src="/images/icon-bookmark.png" alt="Icon Bookmark" width="34" height="34" />
        <Image src="/images/icon-bell.png" alt="Icon Bell" width="37" height="37" />
      </div>
      <div className="flex flex-row items-center mr-20">
        <Image src="/images/icon-language.png" alt="Icon Language" width="31" height="31" />
        <p className="ml-2 mr-4 font-medium text-xl text-colors-darkgrey">English</p>
        <Image src="/images/icon-disclosure-header.png" alt="Icon Disclosure Header" width="24" height="24" />
      </div>
      <div className="flex flex-row items-center gap-2">
        <Image src="/images/img-avatar.png" alt="Image Avatar" width="40" height="40" />
        <Image src="/images/icon-disclosure-header.png" alt="Icon Disclosure Header" width="24" height="24" />
      </div>
    </div>
  );
}

export { Header };
