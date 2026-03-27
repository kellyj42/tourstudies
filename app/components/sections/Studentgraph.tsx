import dynamic from "next/dynamic";

const StudentGraphClient = dynamic(() => import("./StudentGraphClient"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full place-items-center rounded-2xl bg-mist text-sm text-slate-500">
      Preparing chart...
    </div>
  ),
});

export default function StudentGraph() {
  return (
    <div className="w-full rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-soft">
      <h3 className="text-center font-semibold text-primary mb-5">
        Demand for higher education continues to outpace available places.
      </h3>

      <div className="h-[320px]">
        <StudentGraphClient />
      </div>
    </div>
  );
}
