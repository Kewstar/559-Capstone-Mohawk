// useBookDimensions.ts
import { useEffect, useRef, useState } from "react";

interface BookDimensions {
    width: number;
    height: number;
    offsetX: number;
    offsetY: number;
}

interface UseBookDimensionsOptions {
    aspectRatio?: number;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    fallbackWidth?: number;
    fallbackHeight?: number;
}


export function useBookDimensions(
    containerRef: React.RefObject<HTMLElement | null>,
    {
        aspectRatio = 300 / 450,
        minWidth = 300,
        maxWidth = 800,
        minHeight = 100,
        maxHeight = 1200,
        fallbackWidth = 300,
        fallbackHeight = 450,
    }: UseBookDimensionsOptions = {}
) {
    const [dimensions, setDimensions] = useState<BookDimensions>({
        width: fallbackWidth,
        height: fallbackHeight,
        offsetX: 0,
        offsetY: 0,
    });


    const paramsRef = useRef({ aspectRatio, minWidth, maxWidth, minHeight, maxHeight });
    paramsRef.current = { aspectRatio, minWidth, maxWidth, minHeight, maxHeight };

    useEffect(() => {
        const node = containerRef.current;
        if (!node) return;

        const measure = (containerWidth: number, containerHeight: number) => {
            const { aspectRatio, minWidth, maxWidth, minHeight, maxHeight } = paramsRef.current;


            let width = containerWidth;
            let height = width / aspectRatio;
            if (height > containerHeight) {
                height = containerHeight;
                width = height * aspectRatio;
            }

            if (width > maxWidth) {
                width = maxWidth;
                height = width / aspectRatio;
            }
            if (height > maxHeight) {
                height = maxHeight;
                width = height * aspectRatio;
            }
            if (width < minWidth) {
                width = minWidth;
                height = width / aspectRatio;
            }
            if (height < minHeight) {
                height = minHeight;
                width = height * aspectRatio;
            }

            width = Math.max(0, Math.floor(width));
            height = Math.max(0, Math.floor(height));

            setDimensions({
                width,
                height,
                offsetX: Math.max(0, Math.floor((containerWidth - width) / 2)),
                offsetY: Math.max(0, Math.floor((containerHeight - height) / 2)),
            });
        };

        const rect = node.getBoundingClientRect();
        measure(rect.width, rect.height);

        const observer = new ResizeObserver((entries) => {
            const entry = entries[0];
            if (!entry) return;
            const { width, height } = entry.contentRect;
            measure(width, height);
        });

        observer.observe(node);
        return () => observer.disconnect();
    }, [containerRef]);

    return dimensions;
}