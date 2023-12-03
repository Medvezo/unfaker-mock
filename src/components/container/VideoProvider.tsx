import React, { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

type TVideoContext = {
  videoFile: File | null;
  setVideoFile: Dispatch<SetStateAction<File | null>>;
};

const initialContext: TVideoContext = {
  videoFile: null,
  setVideoFile: () => {}, 
};

const VideoContext = createContext<TVideoContext>(initialContext);

export const useVideo = () => useContext(VideoContext);

export const VideoProvider = ({ children }: { children: React.ReactNode }) => {
  const [videoFile, setVideoFile] = useState<File | null>(null);

  return (
    <VideoContext.Provider value={{ videoFile, setVideoFile }}>
      {children}
    </VideoContext.Provider>
  );
};
