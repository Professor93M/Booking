import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import DashboardBar from "../Components/DashboardBar";

export default function Orders(props) {
    return (
        <>
            <Head title="قائمة الطعام" />
            <DashboardBar />
        </>
    );
}
