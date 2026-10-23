import MissionUpdateList from "./mission-update-list";

export default function MissionUpdatesPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] px-5 pb-20 pt-24 sm:px-8 lg:px-20 lg:pt-32">
      <h1 className="text-[36px] font-bold leading-tight sm:text-[56px] lg:text-[76px]">
        Mission Updates
      </h1>
      <MissionUpdateList />
    </main>
  );
}
