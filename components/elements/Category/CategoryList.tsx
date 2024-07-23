import Image from "next/image";
import { Category } from "./Category";

const categories = [
    { title: 'Arts and Humanities', imageUrl: '/images/icon-arts.png', route: '/' },
    { title: 'Business', imageUrl: '/images/icon-business.png', route: '/' },
    { title: 'Computer Science', imageUrl: '/images/icon-compsci.png', route: '/' },
    { title: 'Data Science', imageUrl: '/images/icon-datsci.png', route: '/' },
    { title: 'Information Technology', imageUrl: '/images/icon-infotech.png', route: '/' },
    { title: 'Health', imageUrl: '/images/icon-health.png', route: '/' },
    { title: 'Math and Logic', imageUrl: '/images/icon-mathandlogic.png', route: '/' },
    { title: 'Personal Development', imageUrl: '/images/icon-personaldev.png', route: '/' },
    { title: 'Physical Science and Engineering', imageUrl: '/images/icon-physeng.png', route: '/' },
    { title: 'Social Sciences', imageUrl: '/images/icon-socex.png', route: '/' },
  ];

  function CategoryList() {
    return (
      <div className="grid grid-cols-2 grid-cols-5">
        {categories.map((category) => (
          <div key={category.title}>
            <div className="ml-6 items-center gap-3">
              <Category title={category.title} imageUrl={category.imageUrl}/>
              </div>
            </div>
        ),)}
        </div>
    );
  }
  
  export { CategoryList };
  