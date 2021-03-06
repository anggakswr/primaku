import useProgressiveImage from "../../../hooks/useProgressiveImage";
import { ItemType } from "../Point";

type ItemPropType = {
  item: ItemType;
};

const Item = ({ item }: ItemPropType) => {
  const isImgLoaded = useProgressiveImage(item.vid);

  return (
    <div className="mt-[93.9px] box-equal gap-x-[45.48px]">
      {isImgLoaded ? (
        // vid img
        <button
          className="w-[249.42px] h-[165.79px] min-w-[249.42px] min-h-[165.79px] bg-center bg-cover rounded-[7.34px] box-center"
          style={{
            backgroundImage: `url(${item.vid})`,
          }}
        >
          <img src="/img/getting-there/play.svg" alt="Play" />
        </button>
      ) : (
        // vid img skeleton
        <button className="w-[249.42px] h-[165.79px] min-w-[249.42px] min-h-[165.79px] rounded-[7.34px] box-center bg-gray-300">
          <img src="/img/getting-there/play.svg" alt="Play" />
        </button>
      )}

      {/* texts */}
      <div>
        {/* title */}
        <p className="font-bold text-[26.41px] mb-[12.19px]">{item.title}</p>

        {/* desc */}
        <p className="text-[23.47px] text-[#15143966]">{item.desc}</p>
      </div>
    </div>
  );
};

export default Item;
