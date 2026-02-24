export default function SkeletonCard({ className }: { className?: string }) {
    return (
        <div
            className={`flex flex-col gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] p-5 min-h-[140px] ${className ?? ""}`}
            role="status"
            aria-label="Loading metric"
        >
            <div className="skeleton h-4 w-3/4 rounded" />
            <div className="skeleton h-8 w-1/2 rounded mt-1" />
            <div className="skeleton h-5 w-1/3 rounded mt-auto" />
        </div>
    );
}
