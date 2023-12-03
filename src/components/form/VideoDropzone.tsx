"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export default function VideoDropzone() {
    const [files, setFiles] = useState<File[]>([]);

    // Ondropo handle
    const onDrop = useCallback((acceptedFiles: File[]) => {
        // Filter out files larger than 30MB
        const filteredFiles = acceptedFiles.filter((file) => file.size <= 30000000);
        setFiles((prevFiles) => [...prevFiles, ...filteredFiles]);
    }, []);

    // Ondrop delete
    const handleDelete = (fileName: string) => {
        setFiles(files.filter(file => file.name !== fileName));
    };

    // Ondrop handle
    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        accept: {
            'video/*': []
        },
        maxSize: 30000000,
    });

    return (
        <div className="container mx-auto">
            <div
                {...getRootProps()}
                className="border-dashed border-4 border-gray-200 rounded-lg p-6 mt-6 text-center cursor-pointer">
                <input {...getInputProps()} />
                <p className="text-gray-600">
                    Drag and drop some files here, or click to select files
                </p>
                <em>
                    (Only *.mp4, *.mov, and *.avi files will be accepted, max file size
                    30MB)
                </em>
            </div>
            <aside className="mt-4">
                <h4 className="font-semibold text-lg">Files:</h4>
                <ul>
                    {files.map((file) => (
                        <li key={file.name} className="mt-2 flex justify-between items-center">
                            <div>
                                {file.name} - {(file.size / 1024 / 1024).toFixed(2)} MB
                                <video className="mt-2 w-full max-w-xs" controls>
                                    <source src={URL.createObjectURL(file)} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <button 
                                className="bg-red-500 text-white py-2 px-4 rounded-md"
                                onClick={() => handleDelete(file.name)}>
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>
        </div>
    );
};
