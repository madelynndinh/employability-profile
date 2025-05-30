// Client-side function to resolve image patterns
export async function resolveImagePatterns(imagePatterns: string[]): Promise<string[]> {
    const resolvedImages = new Set<string>(); // Use Set to prevent duplicates

    for (const pattern of imagePatterns) {
        if (pattern.includes('*')) {
            // Extract directory from pattern
            const dir = pattern.substring(0, pattern.lastIndexOf('/'));

            // Only fetch once per directory
            if (!resolvedImages.has(dir)) {
                try {
                    const response = await fetch(`/api/images?dir=${encodeURIComponent(dir)}`);
                    if (response.ok) {
                        const files: string[] = await response.json();
                        // Filter for image files
                        const imageFiles = files.filter(file => {
                            const ext = file.split('.').pop()?.toLowerCase();
                            return ext && ['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(ext);
                        });

                        // Add full paths
                        imageFiles.forEach(file => {
                            resolvedImages.add(`${dir}/${file}`);
                        });
                    }
                } catch (error) {
                    console.warn(`Failed to resolve pattern ${pattern}:`, error);
                }
            }
        } else {
            // Direct path, add as-is
            resolvedImages.add(pattern);
        }
    }

    return Array.from(resolvedImages);
} 