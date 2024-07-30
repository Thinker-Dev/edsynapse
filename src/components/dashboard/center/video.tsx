import React from "react";

const Video = () => {
  return (
    <section>
      <div className="-mt-5">
        <video className="w-full max-w-4xl " controls>
          <source src="/video.mp4" type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </section>
  );
};

export default Video;
