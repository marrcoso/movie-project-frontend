export function CardSkeleton() {
    return (
        <div className="animate-pulse">
            <div className="bg-gray-700 h-44 w-36 rounded-lg"></div>
            <div className="h-4 bg-gray-700 rounded mt-2 w-36"></div>
        </div>
    );
}