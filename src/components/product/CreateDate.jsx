export default function CreateDate({ createdAt }) {
  const formattedDate = createdAt
    ? new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(new Date(createdAt))
    : "Unknown";

  return (
    <p className="text-slate-500 text-sm">
      Upload on: <span className="font-semibold">{formattedDate}</span>
    </p>
  );
}
