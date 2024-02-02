"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { News } from "@/types";
import { useMemo, useState } from "react";

const news: News = [
  {
    date: "2024-01-04",
    text: "本日から通常業務を開始致します。本年も宜しくお願い致します。",
  },
  {
    date: "2023-12-20",
    text: "誠に勝手ではありますが、12/28から1/3の間は営業をお休みさせて頂きます。1/4から通常業務を開始致します。",
  },
  {
    date: "2023-05-01",
    text: "HPをリニューアル致しました。今後とも宜しくお願い致します。",
  },
];
const reminder = news.length % 2;
const totalPage = reminder === 0 ? news.length % 2 : (news.length % 2) + 1;

const NewsList: React.FC = () => {
  const [page, setPage] = useState(1);

  const calculatePageList = (page: number) => {
    if (page === 1) return [1, 2];
    else if (page === totalPage) return [page - 1, page];
    return [page - 1, page, page + 1];
  };

  const pageList = useMemo(() => {
    return calculatePageList(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const newsList = useMemo(() => {
    const index = page * 2 - 1;
    if (news[index]) return [news[index - 1], news[index]];
    return [news[index - 1]];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const handlePage = (e: number) => {
    setPage(e);
  };

  return (
    <div className="w-1/2 border-2 border-teal-600 bg-white rounded-xl p-4">
      <div className="flex justify-center border-b-2 border-teal-600 pb-2">
        お知らせ
      </div>
      {newsList.map((item, index) => (
        <div
          key={index}
          className="bg-teal-100 border-b-2 border-teal-600 mt-2"
        >
          <Card className="border-none">
            <CardContent>
              <div className="mb-1">{item.date}</div>
              {item.text}
            </CardContent>
          </Card>
        </div>
      ))}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                page > 1 ? setPage(page - 1) : setPage(page);
              }}
            >
              {"<"}
            </button>
          </PaginationItem>
          {pageList.map((pageNumber) => (
            <PaginationItem key={pageNumber}>
              <PaginationLink
                href="#"
                isActive={pageNumber === page ? true : false}
                onClick={() => handlePage(pageNumber)}
              >
                {pageNumber}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                page !== totalPage ? setPage(page + 1) : setPage(page);
              }}
            >
              {">"}
            </button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default NewsList;
