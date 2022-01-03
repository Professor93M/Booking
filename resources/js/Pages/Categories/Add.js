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
        post(route("dashboard/catagories/add"));
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

                    <ValidationErrors errors={errors} />

                    <form onSubmit={submit}>
                        <div>
                            <Label forInput="email" value="البريد الالكتروني" />

                            <Input
                                type="text"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div className="mt-4">
                            <Label forInput="password" value="كلمة المرور" />

                            <Input
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                handleChange={onHandleChange}
                            />
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center ">
                                <Checkbox
                                    name="remember"
                                    value={data.remember}
                                    handleChange={onHandleChange}
                                />

                                <span className="mr-2 text-sm font-tajawal-light font-bold text-gray-600">
                                    تذكرني
                                </span>
                            </label>
                        </div>

                        <div className="flex items-center justify-center mt-4">
                            <Button className="ml-4" processing={processing}>
                                دخول
                            </Button>
                        </div>
                    </form>
                </div>
            </Authenticated>
        </>
    );
}
