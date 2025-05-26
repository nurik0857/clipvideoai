import React, { useState, useCallback } from 'react';

interface VideoPreview {
  type: 'file' | 'url';
  source: string;
}

export function VideoUpload() {
    const [preview, setPreview] = useState<VideoPreview | null>(null);
    const [error, setError] = useState<string>('');

    const validateVideoFile = (file: File): boolean => {
        const validTypes = ['video/mp4', 'video/webm', 'video/ogg'];
        if (!validTypes.includes(file.type)) {
            setError('Please upload a valid video file (MP4, WebM, or OGG)');
            return false;
        }
        if (file.size > 100 * 1024 * 1024) { // 100MB limit
            setError('File size must be less than 100MB');
            return false;
        }
        return true;
    };

    const validateVideoUrl = (url: string): boolean => {
        try {
            new URL(url);
            // Basic video URL validation
            const validDomains = ['youtube.com', 'vimeo.com', 'youtu.be'];
            return validDomains.some(domain => url.includes(domain));
        } catch {
            setError('Please enter a valid video URL');
            return false;
        }
    };

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setError('');
        
        const file = e.dataTransfer.files[0];
        if (file && validateVideoFile(file)) {
            setPreview({
                type: 'file',
                source: URL.createObjectURL(file)
            });
        }
    }, []);

    const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const url = e.target.value.trim();
        setError('');
        
        if (url && validateVideoUrl(url)) {
            setPreview({
                type: 'url',
                source: url
            });
        }
    };

    return (
        <div className="upload-section">
            <h3>Upload Your Video</h3>
            <div 
                className="upload-area"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                <i className="fas fa-cloud-upload-alt fa-3x"></i>
                <p>Drag and drop your video here or click to browse</p>
            </div>
            <p>OR</p>
            <input 
                type="text" 
                className="url-input" 
                placeholder="Paste your video URL here"
                onChange={handleUrlChange}
            />
            {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
            {preview && (
                <div className="preview-section">
                    <h4>Preview</h4>
                    {preview.type === 'file' ? (
                        <video 
                            src={preview.source} 
                            controls 
                            style={{ maxWidth: '100%', marginTop: '1rem' }}
                        />
                    ) : (
                        <div className="url-preview">
                            <p>Video URL: {preview.source}</p>
                        </div>
                    )}
                </div>
            )}
            <p className="subheadline">Upload your video or paste a link, then specify the edits you want.</p>
        </div>
    );
} 