export default function Loading() {
  return (
    <div>
      <p className="text-3xl">Posts</p>
      <ul className="mt-4 list-disc space-y-2 pl-6">
        {Array.from(Array(20).keys()).map((i) => (
          <li
            key={i}
            className="inline-block h-5 w-full animate-pulse"
            style={{ animationDelay: `${i * 0.05}s` }}
          ></li>
        ))}
      </ul>
    </div>
  );
}
