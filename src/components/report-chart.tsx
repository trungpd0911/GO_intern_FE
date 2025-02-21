import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import { api } from "@/services/axios";
import { ClipLoader } from "react-spinners";


const chartConfig = {
    less_than_4: {
        label: "Less than 4",
        color: "hsl(var(--chart-1))",
    },
    between_4_and_6: {
        label: "Between 4 and 6",
        color: "hsl(var(--chart-2))",
    },
    between_6_and_8: {
        label: "Between 6 and 8",
        color: "hsl(var(--chart-3))",
    },
    greater_than_8: {
        label: "Greater than 8",
        color: "hsl(var(--chart-4))",
    },
} satisfies ChartConfig

export const ReportChart = () => {
    const [chartData, setChartData] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            await api.get("/score/range-score-count")
                .then((res) => {
                    console.log(res.data.data);
                    setChartData(res.data.data);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
        fetchData();
    }, [])


    return (
        <div>
            {
                isLoading ? (
                    <div className="text-center text-3xl">
                        <ClipLoader color="dark" loading={isLoading} size={25} />
                        Loading...
                    </div>
                ) : (
                    <Card>
                        <CardHeader>
                            <CardTitle>Report chart of student score</CardTitle>
                            <CardDescription>high school exam scores 2024</CardDescription>
                        </CardHeader >
                        <CardContent>
                            <ChartContainer config={chartConfig}>
                                <BarChart accessibilityLayer data={chartData}>
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                        dataKey="subject"
                                        tickLine={false}
                                        tickMargin={10}
                                        axisLine={false}
                                        tickFormatter={(value) => value.slice(0, 7)}
                                    />
                                    <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                                    <ChartLegend content={<ChartLegendContent />} />
                                    <Bar
                                        dataKey="less_than_4"
                                        stackId="a"
                                        fill={chartConfig.less_than_4.color}
                                        radius={[0, 0, 4, 4]}
                                    />
                                    <Bar
                                        dataKey="between_4_and_6"
                                        stackId="a"
                                        fill={chartConfig.between_4_and_6.color}
                                        radius={[0, 0, 4, 4]}
                                    />
                                    <Bar
                                        dataKey="between_6_and_8"
                                        stackId="a"
                                        fill={chartConfig.between_6_and_8.color}
                                        radius={[0, 0, 4, 4]}
                                    />
                                    <Bar
                                        dataKey="greater_than_8"
                                        stackId="a"
                                        fill={chartConfig.greater_than_8.color}
                                        radius={[0, 0, 4, 4]}
                                    />
                                </BarChart>
                            </ChartContainer>
                        </CardContent>
                    </Card >
                )
            }
        </div >
    )
}