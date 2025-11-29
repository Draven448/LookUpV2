export function LoadingSkeleton() {
    return (
        <div className="animate-pulse">
            <div className="bg-gray-700 rounded-lg aspect-[2/3] w-full"></div>
            <div className="mt-2 space-y-2">
                <div className="h-4 bg-gray-700 rounded w-3/4"></div>
                <div className="h-3 bg-gray-700 rounded w-1/2"></div>
            </div>
        </div>
    );
}

export function MovieGridSkeleton({ count = 20 }: { count?: number }) {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {Array.from({ length: count }).map((_, i) => (
                <LoadingSkeleton key={i} />
            ))}
        </div>
    );
}

export function MovieDetailsSkeleton() {
    return (
        <div className="animate-pulse">
            <div className="relative h-[400px] md:h-[500px] bg-gray-800 rounded-lg mb-8"></div>
            <div className="space-y-4">
                <div className="h-8 bg-gray-700 rounded w-2/3"></div>
                <div className="h-4 bg-gray-700 rounded w-1/4"></div>
                <div className="space-y-2">
                    <div className="h-4 bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                </div>
            </div>
        </div>
    );
}
