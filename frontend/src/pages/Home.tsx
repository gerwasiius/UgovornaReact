import CardLink from "../components/ui/CardLink";
import { FaHashtag, FaPuzzlePiece, FaFileExport } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <CardLink
            to="/placeholders"
            title="Placeholderi"
            description="Pregled dostupnih parametara"
            Icon={FaHashtag}
            tone="primary"
          />
          <CardLink
            to="/placeholders2"
            title="Članovi"
            description="Kreiranje i editovanje sekcija dokumenta"
            Icon={FaPuzzlePiece}
            tone="success"
          />
          <CardLink
            to="/templates"
            title="Predlošci"
            description="Kreiranje i upravljanje template-ovima"
            Icon={FaFileExport}
            tone="purple"
          />
        </div>
      </div>
    </div>
  );
}
