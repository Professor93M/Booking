import React from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Authenticated";
import DashboardBar from "../../Components/DashboardBar";

export default function index(props) {
    return (
        <>
            <Authenticated auth={props.auth} errors={props.errors}>
                <Head title="المستخدمين" />
                <DashboardBar auth={props.auth} />
            </Authenticated>
        </>
    );
}
