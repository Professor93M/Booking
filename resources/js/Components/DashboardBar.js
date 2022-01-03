import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function DashboardBar({ auth }) {
    const { user } = auth;

    return (
        <div>
            <nav className="flex flex-col  w-64 h-screen px-4 tex-gray-900 border bg-slate-400">
                <div className="flex flex-col text-slate-600 mt-8 justify-center items-center">
                    <h3 className="text-lg">اهلا</h3>
                    <h3 className="text-xl"> {user.name} </h3>
                </div>
                <div className="mt-10 mb-4">
                    <ul className="mr-4">
                        <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-slate-700   hover:bg-gray-300  hover:font-bold rounded-lg">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </span>
                            <Link href="#">
                                <span className="mr-2">المستخدمين</span>
                            </Link>
                        </li>
                        <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-slate-700   hover:bg-gray-300  hover:font-bold rounded-lg">
                            <span>
                                <svg
                                    className="fill-current h-5 w-5 "
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmrns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M16 15C16 14.4477 15.5523 14 15 14H9C8.44772 14 8 14.4477 8 15V21H6V15C6 13.3431 7.34315 12 9 12H15C16.6569 12 18 13.3431 18 15V21H16V15Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                            <Link href="/dashboard/menu">
                                <span className="mr-2">الوجبات</span>
                            </Link>
                        </li>
                        <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-slate-700   hover:bg-gray-300  hover:font-bold rounded-lg">
                            <span>
                                <svg
                                    className="fill-current h-5 w-5 "
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        id="Stroke 1"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        fill="none"
                                        d="M21.0003 6.6738C21.0003 8.7024 19.3551 10.3476 17.3265 10.3476C15.2979 10.3476 13.6536 8.7024 13.6536 6.6738C13.6536 4.6452 15.2979 3 17.3265 3C19.3551 3 21.0003 4.6452 21.0003 6.6738Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Stroke 1"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.3467 6.6738C10.3467 8.7024 8.7024 10.3476 6.6729 10.3476C4.6452 10.3476 3 8.7024 3 6.6738C3 4.6452 4.6452 3 6.6729 3C8.7024 3 10.3467 4.6452 10.3467 6.6738Z"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Stroke 1"
                                        fill="none"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M21.0003 17.2619C21.0003 19.2905 19.3551 20.9348 17.3265 20.9348C15.2979 20.9348 13.6536 19.2905 13.6536 17.2619C13.6536 15.2333 15.2979 13.5881 17.3265 13.5881C19.3551 13.5881 21.0003 15.2333 21.0003 17.2619Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        id="Stroke 1"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M10.3467 17.2619C10.3467 19.2905 8.7024 20.9348 6.6729 20.9348C4.6452 20.9348 3 19.2905 3 17.2619C3 15.2333 4.6452 13.5881 6.6729 13.5881C8.7024 13.5881 10.3467 15.2333 10.3467 17.2619Z"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <Link href="/dashboard/categories">
                                <span className="mr-2">الفئات</span>
                            </Link>
                        </li>
                        <li className="mb-2 px-4 py-4 text-gray-100 flex flex-row  border-gray-300 hover:text-slate-700   hover:bg-gray-300  hover:font-bold rounded-lg">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                    />
                                </svg>
                            </span>
                            <Link href="/orders">
                                <span className="mr-2">الطلبات</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
