import "./styles.css";
import { useContext, useState, useEffect } from "react";
import MyContext from "../context/Context";
import { prod } from "../../App";
import { ItemRelease } from "../ItemRelease/ItemRelease";

export const Release = () => {
  const { productsList } = useContext(MyContext);
  const [releaseList, setReleaseList] = useState<prod[]>([]);
  const releaseIndex: number[] = [];

  while (releaseIndex.length < 3) {
    let numberTest = Math.floor(Math.random() * 20);
    if (!releaseIndex.includes(numberTest)) {
      releaseIndex.push(numberTest);
    }
  }

  useEffect(() => {
    setReleaseList((prevReleaseList) => {
      const newReleaseList = productsList.filter((pro: prod) =>
        releaseIndex.includes(pro.id)
      );
      return [...prevReleaseList, ...newReleaseList];
    });
  }, [productsList]);

  return (
    <>
      <h2 className="release-title">Check our new products</h2>
      <div className="release-div">
        {releaseList.map((item: prod) => (
          <ItemRelease
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            rating={item.rating}
            key={item.id}
          ></ItemRelease>
        ))}
      </div>
    </>
  );
};

