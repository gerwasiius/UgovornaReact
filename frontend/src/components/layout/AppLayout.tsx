import { Link } from "react-router-dom";
import type { PropsWithChildren } from "react";

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="page flex flex-col lg:flex-row">
      <main className="flex-1 min-w-0">
        {/* Top bar: 3.5rem, siva pozadina i border bottom, sticky */}
        <div className="h-14 px-4 flex items-center justify-between sticky top-0 z-10 bg-[#f7f7f7] border-b border-[#d6d5d5]">
          <Link
            to="/"
            className="logo-link inline-flex items-center gap-2 min-w-0"
          >
            {/* Ako želiš apsolutno isti path slike, stavi je u public/css/images/logo.png */}
            <img src="/css/images/logo.png" alt="Logo" className="h-10" />
            <span className="font-semibold truncate">AutoDoc</span>
          </Link>
          <span className="user-name">Name&LastName</span>
        </div>

        {/* Content: visina = (100vh - topbar), vertikalni scroll, horizontalni isključen, unutrašnji padding */}
        <article className="h-[calc(100vh-3.5rem)] overflow-y-auto overflow-x-hidden">
          {children}
        </article>
      </main>
    </div>
  );
}
