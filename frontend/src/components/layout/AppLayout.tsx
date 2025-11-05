import { Link, Outlet } from 'react-router-dom'
// ako ti više ne trebaju children, možeš ukloniti PropsWithChildren import

export default function AppLayout() {
  return (
    <div className="page flex flex-col lg:flex-row">
      <main className="flex-1 min-w-0">
        {/* top bar */}
        <div className="h-[3.5rem] px-4 flex items-center justify-between sticky top-0 z-10 bg-[#f7f7f7] border-b border-[#d6d5d5]">
          <Link to="/" className="inline-flex items-center gap-2 min-w-0">
            <img src="/css/images/logo.png" alt="Logo" className="h-10" />
            <span className="font-semibold truncate">AutoDoc</span>
          </Link>
          <span className="user-name">Name&LastName</span>
        </div>

        {/* content: OVDJE mora ići <Outlet/> */}
        <article className="h-[calc(100vh-3.5rem)] overflow-y-auto overflow-x-hidden">
          <Outlet />
        </article>
      </main>
    </div>
  )
}
