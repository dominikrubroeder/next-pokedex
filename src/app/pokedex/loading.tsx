export default function Loading() {
    return <div>
        <p className="text-3xl">Posts</p>
        <ul className="list-disc pl-6 mt-4 space-y-2">
            {Array.from(Array(20).keys()).map((i) => <li key={i} className="inline-block h-5 animate-pulse w-full" style={{animationDelay: `${i * 0.05}s`}}></li>)}
        </ul>
    </div>
}
