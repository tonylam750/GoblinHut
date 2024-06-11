import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>

      <p className="pb-12">Velkommen til GoblinHut</p>
      <Link href="/hut">KomTilHut</Link>
    </div>

  );
}
