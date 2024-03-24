import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/logo.svg"
        alt="Website Logo"
        className="dark:invert"
        width={300}
        height={24}
        priority
      />
      <h1>Welcome</h1>
    </div>
  );
}
