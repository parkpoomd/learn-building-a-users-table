import { Spinner } from "./components/spinner";

export default function Loading() {
  return (
    <div className="flex h-80 items-center justify-center bg-gray-50">
      <Spinner className="w-8 animate-spin" />
      <p className="text-white">Loading...</p>
    </div>
  );
}
