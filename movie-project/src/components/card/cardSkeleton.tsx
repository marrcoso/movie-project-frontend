export function CardSkeleton() {
    return (
        <div className="animate-pulse">
            <div className="bg-gray-700 h-40 w-full rounded-lg"></div>
            <div className="h-4 bg-gray-700 rounded mt-2 w-3/4"></div>
        </div>
    );
}