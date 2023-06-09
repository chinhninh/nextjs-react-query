"use client";
import { masterListCode } from "@/constants/appConstants";
import { useQueriesMasterlist } from "../apis/home";

export default function Home() {
  const queriesMasterlist = useQueriesMasterlist();
  const newQueriesMasterlist = (queriesMasterlist || [])
    .filter(({ isSuccess }) => isSuccess)
    .map(({ data }) => data);
  console.log("newQueriesMasterlist: ", newQueriesMasterlist);

  return (
    <div>
      <div className="w-full max-h-screen mt-[-64px] overflow-hidden">
        <video
          autoPlay
          muted
          preload="none"
          playsInline
          poster="http://admin-terra.dsoft.software/Upload/video/Terra_Intro_Final_V2.mp4"
          loop
          src={
            "http://admin-terra.dsoft.software/Upload/video/Terra_Intro_Final_V2.mp4"
          }
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
