import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head, Link } from "@inertiajs/inertia-react";
import DashboardBar from "@/Components/DashboardBar";

export default function Dashboard(props) {
    return (
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="لوحة التحكم" />
            <DashboardBar auth={props.auth} />
        </Authenticated>
    );
}
