import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

interface Props {
  totalPages: number;
  currentPages?: number;
}

const PostsPagination = ({ totalPages, currentPages = 1 }: Props) => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      {/* Prev */}
      <Link
        href={`/page/${currentPages - 1}`}
        className={clsx(
          'px-3 py-1 border rounded text-sm',
          currentPages === 1
            ? 'text-gray-400 border-gray-300 cursor-not-allowed pointer-events-none'
            : 'text-blue-600 border-blue-600 hover:bg-blue-50'
        )}
        aria-disabled={currentPages === 1}
      >
        Prev
      </Link>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }).map((_, index) => {
        const pageNum = index + 1;
        const isActive = pageNum === currentPages;
        return (
          <Link
            key={index}
            href={`/page/${pageNum}`}
            className={clsx(
              'px-3 py-1 rounded text-sm border',
              isActive
                ? 'bg-blue-600 text-white border-blue-600'
                : 'text-gray-700 border-gray-300 hover:bg-gray-100'
            )}
          >
            {pageNum}
          </Link>
        );
      })}

      {/* Next */}
      <Link
        href={`/page/${currentPages + 1}`}
        className={clsx(
          'px-3 py-1 border rounded text-sm',
          currentPages === totalPages
            ? 'text-gray-400 border-gray-300 cursor-not-allowed pointer-events-none'
            : 'text-blue-600 border-blue-600 hover:bg-blue-50'
        )}
        aria-disabled={currentPages === totalPages}
      >
        Next
      </Link>
    </div>
  );
};

export default PostsPagination;
