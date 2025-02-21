import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { StudentScore } from "@/types/studentScoreInterface";

export const ScoreTable = ({ scoreData }: { scoreData: StudentScore }) => {
    return (

        <Table className="w-full text-sm">
            <TableHeader>
                <TableRow className="bg-gray-200">
                    <TableHead className="font-bold">studentId</TableHead>
                    <TableHead>Math</TableHead>
                    <TableHead>Literature</TableHead>
                    <TableHead>Foreign Language</TableHead>
                    <TableHead>Physics</TableHead>
                    <TableHead>Chemistry</TableHead>
                    <TableHead>Biology</TableHead>
                    <TableHead>History</TableHead>
                    <TableHead>Geography</TableHead>
                    <TableHead>Civic Education</TableHead>
                    <TableHead>Foreign Language Code</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-bold">{scoreData.studentId}</TableCell>
                    <TableCell>{scoreData.math ? scoreData.math : 'N/A'}</TableCell>
                    <TableCell>{scoreData.literature ? scoreData.literature : 'N/A'}</TableCell>
                    <TableCell>{scoreData.foreignLanguage ? scoreData.foreignLanguage : 'N/A'}</TableCell>
                    <TableCell>{scoreData.physics ? scoreData.physics : 'N/A'}</TableCell>
                    <TableCell>{scoreData.chemistry ? scoreData.chemistry : 'N/A'}</TableCell>
                    <TableCell>{scoreData.biology ? scoreData.biology : 'N/A'}</TableCell>
                    <TableCell>{scoreData.history ? scoreData.history : 'N/A'}</TableCell>
                    <TableCell>{scoreData.geography ? scoreData.geography : 'N/A'}</TableCell>
                    <TableCell>{scoreData.civicEducation ? scoreData.civicEducation : 'N/A'}</TableCell>
                    <TableCell>{scoreData.foreignLanguageCode ? scoreData.foreignLanguageCode : 'N/A'}</TableCell>
                </TableRow>
            </TableBody>
        </Table>

    )
}