import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

// isFavourite — whether this photo is already in the favourites list.
// onToggleFavourite — dispatches ADD_FAVOURITE or REMOVE_FAVOURITE via Gallery.
const PhotoCard = ({ photo, isFavourite, onToggleFavourite }) => {
  return (
    <article className="group overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="cursor-pointer h-56 w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
      />

      <div className="flex items-center justify-between p-3">
        <p className="text-sm font-medium text-gray-700">{photo.author}</p>

         {/* Heart icon: filled (red) when favourited, empty (gray) otherwise.  */}
        <button
          type="button"
          aria-label={
            isFavourite ? "Remove from favourites" : "Add to favourites"
          }
          onClick={() => onToggleFavourite(photo)}
          className="text-xl leading-none transition-colors duration-200"
        >
          {isFavourite ? (
            <IoMdHeart className="text-red-500" />
          ) : (
            <IoMdHeartEmpty className="text-gray-400 hover:text-red-400" />
          )}
        </button>
      </div>
    </article>
  );
};

export default PhotoCard;
