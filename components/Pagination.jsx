import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Pagination({ href, page, pageCount }) {
  return (
    <div className="flex gap-3 pb-3">
      <PaginateLink href={`/${href}?page=${page - 1}`} disabled={page === 1}>
        <ChevronLeftIcon className="h-4 w-4" />
      </PaginateLink>
      <span>
        Page {page} of {pageCount}
      </span>
      <PaginateLink href={`/${href}?page=${page + 1}`} disabled={page === pageCount}>
        <ChevronRightIcon className="h-4 w-4" />
      </PaginateLink>
    </div>
  );
}

// CARA PERTAMA
function PaginateLink({ children, href, disabled }) {
  if (disabled) {
    return <span className="px-3 py-1 rounded border text-gray-400 border-gray-300 cursor-not-allowed">{children}</span>;
  }

  return (
    <Link href={href} className={`px-3 py-1 rounded border border-gray-300 hover:bg-gray-200`}>
      {children}
    </Link>
  );
}

// CARA KEDUA
// function PaginateLink({ children, href, disabled }) {
//   return disabled ? (
//     <span className="px-3 py-1 rounded border text-gray-400 border-gray-300 cursor-not-allowed">{children}</span>
//   ) : (
//     <Link href={href} className={`px-3 py-1 rounded border border-gray-300 hover:bg-gray-200`}>
//       {children}
//     </Link>
//   );
// }

// CARA KETIGA
// function PaginateLink({ children, href, disabled }) {
//   const baseClasses = "px-3 py-1 rounded border border-gray-300";
//   const disabledClasses = "text-gray-400 cursor-not-allowed";
//   const enabledClasses = "hover:bg-gray-200";

//   return disabled ? (
//     <span className={`${baseClasses} ${disabledClasses}`}>{children}</span>
//   ) : (
//     <Link href={href} className={`${baseClasses} ${enabledClasses}`}>
//       {children}
//     </Link>
//   );
// }
