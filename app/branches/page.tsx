"use client";

import { Branches } from "@/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const BranchPage: React.FC = () => {
  const branches: Branches = Array.from(Array(25).keys()).map((i) => {
    return {
      name: `営業所${i + 1}`,
      prefecture: "東京都",
      address: `豊島区${i}${i}-${i}-${i}`,
      post_code: "◯○◯-△△△△",
    };
  });

  return (
    <main className="flex min-h-screen flex-col justify-start space-y-5">
      <h2 className="flex justify-center text-2xl py-3">事業所一覧</h2>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={branches} tableColor="bg-gray-200" />
      </div>
    </main>
  );
};

export default BranchPage;
