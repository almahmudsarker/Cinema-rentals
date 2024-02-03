import Star from "../assets/star.svg";
export default function Rating({ value }) {
  const starts = Array(value).fill(Star);
  return (
    <>
      {starts.map((Star, index) => (
        <img key={index} src={Star} width="14" height="14" alt="star" />
      ))}
    </>
  );
}
