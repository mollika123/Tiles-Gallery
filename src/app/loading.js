import { RotatingLines } from "react-loader-spinner";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div className="flex min-h-screen justify-center items-center animate-spin">


          <RotatingLines></RotatingLines>
        </div>

        {/* Text */}
        <p className="text-gray-600 text-lg">Loading...</p>
      </div>
    </div>
  );
}
