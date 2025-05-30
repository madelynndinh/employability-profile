import { NextRequest, NextResponse } from 'next/server';
import { getImagesInDirectory } from '@/utils/serverImageUtils';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const dir = searchParams.get('dir');

    if (!dir) {
        return NextResponse.json({ error: 'Directory parameter is required' }, { status: 400 });
    }

    try {
        const images = getImagesInDirectory(dir);
        return NextResponse.json(images);
    } catch (error) {
        console.error('Error getting images:', error);
        return NextResponse.json({ error: 'Failed to get images' }, { status: 500 });
    }
} 