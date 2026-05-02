export default function TilesHeader({ count }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-semibold">All Tiles</h2>

      <p className="text-sm text-gray-500">
        {count} items
      </p>
    </div>
  );
}