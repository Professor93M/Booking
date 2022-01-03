import React from "react";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import Input from "@/Components/Input";
import Checkbox from "@/Components/Checkbox";
import ValidationErrors from "@/Components/ValidationErrors";
import Label from "@/Components/Label";
import Button from "@/Components/Button";
import Authenticated from "@/Layouts/Authenticated";
import DashboardBar from "../../Components/DashboardBar";

export default function index({ status, auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        category: "",
        image_url: "",
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post("/dashboard/categories");
    };

    return (
        <>
            <Authenticated auth={auth} errors={errors}>
                <Head title="الفئات" />
                <div className="flex">
                    <DashboardBar auth={auth} />
                    {status && (
                        <div className="mb-4 font-medium text-sm text-green-600">
                            {status}
                        </div>
                    )}

                    <div className="mx-auto">
                        <form onSubmit={submit} encType="multipart/form-data">
                            <div>
                                <Label forInput="category" value="اسم الفئة" />

                                <Input
                                    type="text"
                                    name="category"
                                    value={data.category}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    handleChange={onHandleChange}
                                />
                            </div>

                            <div className="mt-4">
                                <Label forInput="img_url" value="كلمة المرور" />

                                <Input
                                    type="file"
                                    name="img_url"
                                    value={data.img_url}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    handleChange={onHandleChange}
                                />
                            </div>

                            <div className="flex items-center justify-center mt-4">
                                <Button
                                    className="ml-4"
                                    processing={processing}
                                >
                                    إضافة
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Authenticated>
        </>
    );
}
