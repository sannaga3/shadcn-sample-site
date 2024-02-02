"use client";

import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const versions = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.${a.length - i}`
);

const BoiledEggPage: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col justify-start space-y-5">
      <h2 className="flex justify-center text-2xl py-3">
        絶対にむけないゆで卵
      </h2>
      <div className="text-xl">~ 商品について ~</div>
      <Accordion type="single" collapsible className="w-full bg-white px-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>コンセプト</AccordionTrigger>
          <AccordionContent>
            絶対にむけないゆで卵をむく、それがロマン
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>価格高くないですか？</AccordionTrigger>
          <AccordionContent>
            本物の肌触りを再現するのにコストが掛かっています。今後も大量生産に向けた努力を続けます、、、
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <ScrollArea className="h-72 w-48 rounded-md border bg-white">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">
            バージョン情報
          </h4>

          {versions.map((version) => (
            <div key={version}>
              <div className="text-sm">{version}</div>
              <Separator className="my-2" />
            </div>
          ))}
        </div>
      </ScrollArea>
    </main>
  );
};

export default BoiledEggPage;
