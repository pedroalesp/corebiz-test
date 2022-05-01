import { StyledStars } from "../assets/styles/styles";
import starFilled from "../assets/statics/star-filled-icon.png";
import starVoid from "../assets/statics/star-void-icon.png";

export const StarsRated = ({ starsRate }) => {
  const stars = new Array(1, 2, 3, 4, 5);

  return (
    <StyledStars>
      {stars.map((star) => {
        return (
          <img
            src={`${star <= starsRate ? starFilled : starVoid}`}
            alt="Star"
            key={star}
          />
        );
      })}
    </StyledStars>
  );
};
