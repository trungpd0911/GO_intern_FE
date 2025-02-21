import { StudentScore } from "@/types/studentScoreInterface";
import { ScoreTable } from "./score-table"; 

export const ResultSearchScore = (
    { searchResult, hideCaption }: { searchResult: StudentScore | null, hideCaption: boolean }
) => {
    return (
        <div className='border-2 border-gray-200 rounded-lg p-5 space-y-5'>
            <h2 className="font-bold text-2xl mb-5">Detailed Scores</h2>
            <p>Detailed view of search score here!</p>
            {
                searchResult ? (
                    <div className="overflow-x-auto w-full">
                        <ScoreTable scoreData={searchResult} />     
                    </div>
                ) : (
                    hideCaption ? null : <p className="text-center">No data found for this student id</p>
                )
            }
        </div>
    )
}