import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import DashboardBar from "../Components/DashboardBar";

export default function Categories(props) {
    return (
        <>
            <Head title="قائمة الطعام" />
            <DashboardBar />
        </>
    );
}
