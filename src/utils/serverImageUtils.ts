import path from 'path';
import fs from 'fs';

// Server-side function for API route
export function getImagesInDirectory(dirPath: string): string[] {
    try {
        const fullPath = path.join(process.cwd(), 'public', dirPath);
        if (!fs.existsSync(fullPath)) {
            return [];
        }

        const files = fs.readdirSync(fullPath);
        const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];

        return files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return imageExtensions.includes(ext);
        });
    } catch (error) {
        console.error(`Error reading directory ${dirPath}:`, error);
        return [];
    }
} 