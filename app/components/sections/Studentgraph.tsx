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
      <h3 className="text-center font-semibold text-primary mb-2">
        University access trend, 2022 to 2025
      </h3>
      <p className="text-center text-sm text-slate-500 mb-5">
        Green shows students admitted locally. Orange shows total eligible students.
      </p>

      <div className="h-[320px]">
        <StudentGraphClient />
      </div>
    </div>
  );
}
