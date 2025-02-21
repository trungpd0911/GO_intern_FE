import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScoreTable } from "./components/score-table";
import { useEffect, useState } from "react";
import { TopStudentScore } from "./types/studentScoreInterface";
import { api } from "./services/axios";
import { ClipLoader } from "react-spinners";

function App() {
  const [chooseLimit, setChooseLimit] = useState<string>("10");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<TopStudentScore[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await api.get(`/score?limit=${chooseLimit}`)
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    fetchData();
  }, [chooseLimit])

  return (
    <div className='m-5 space-y-5'>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage></BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-row text-xl font-medium">
        Top
        <div className="mx-2">
          <Select defaultValue="10" value={chooseLimit} onValueChange={setChooseLimit} >
            <SelectTrigger className="w-[60px]">
              <SelectValue placeholder="limit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
        </div>
        Student group A0
      </div>
      {
        isLoading ? (
          <div className="text-center text-3xl">
            <ClipLoader color="dark" loading={isLoading} size={25} />
            Loading...
          </div>
        ) : (
          <div>
            {
              data.map((scoreData, index) => (
                <div className="space-y-3">
                  <h3 className="font-medium text-lg">TOP {index + 1} : {scoreData.totalScore}</h3>
                  <ScoreTable key={index} scoreData={scoreData} />
                </div>
              ))
            }
          </div>
        )
      }

    </div>
  )
}

export default App
