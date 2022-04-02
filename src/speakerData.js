import { SpeakerItem } from "./imageItem";

export function SpeakerList({ names, imagesURL }) {
  return (
    <>
      {names.map((name) => (
        <SpeakerItem key={name} speakerName={name}  imageURL={imagesURL}>
        </SpeakerItem>
      ))}
    </>
  );
}
