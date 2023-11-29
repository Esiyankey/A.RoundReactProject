import React from "react";
import { Video_Section } from "./sub_components/Video_Section";
import { Follower_Cards } from "./sub_components/Follower_Cards";

export const Video_Follower_Section = () => {
  return (
    <section className="mt-[9rem] mb-[7rem]">
      <Video_Section />
      <Follower_Cards />
    </section>
  );
};
