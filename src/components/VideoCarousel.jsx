import { hightlightsSlides } from "../constants";

export default function VideoCarousel() {
  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map(function (citem) {
          <div key={citem.id}></div>;
        })}
      </div>
    </>
  );
}
