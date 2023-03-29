import { useRouter } from "next/router";

export default function NameFeed() {
  const router = useRouter();
  const { name } = router.query;
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center rounded-lg border border-gray-200 p-8">
        <h1>ชื่อผู้วิจัย : {name} </h1>
      </div>
    </>
  );
}
