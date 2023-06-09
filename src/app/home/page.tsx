import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen container mx:auto">
      <video
        controls
        src={"/filename.mp4"}
        style={{ width: "400px", height: "400px" }}
      />
      yeah
    </main>
  );
}
