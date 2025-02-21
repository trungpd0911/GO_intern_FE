import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "@/services/axios";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

const formSchema = z.object({
    studentId: z.coerce.string()
        .min(1, "This field is required")
        .refine((studentId) => /^\d{8}$/.test(studentId), "student ID must be 8 digits"),
});

export const RegistrationForm = ({ setSearchResult, setHideCaption }: { setSearchResult: any, setHideCaption: any }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            studentId: "",
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        setIsLoading(true);
        api.get(`/score/studentId/${values.studentId}`)
            .then((response) => {
                setSearchResult(response.data.data);
            })
            .catch((error) => {
                setSearchResult(null);
                console.error(error);
            })
            .finally(() => {
                setHideCaption(false);
                setIsLoading(false);
            })
    }

    return (
        <div className='border-2 border-gray-200 rounded-lg p-5'>
            <h2 className="font-bold text-2xl mb-5">User Registration</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="studentId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Registration Number:</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter registration number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">
                        {
                            isLoading ? <ClipLoader size={16} color={"white"} loading={isLoading} /> : <></>
                        } Submit
                    </Button>
                </form>
            </Form>
        </div>
    )
}