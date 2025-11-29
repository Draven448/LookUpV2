"use client";

import { useEffect } from "react";
import { ErrorMessage } from "@/components/ui/error-message";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[50vh] flex items-center justify-center">
            <ErrorMessage
                message={error.message || "Something went wrong!"}
                onRetry={reset}
            />
        </div>
    );
}
