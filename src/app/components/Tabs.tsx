'use client'

import React from "react";
import {useState} from "react";

interface ITab {
    title: string;
    content: React.ReactNode
}

interface TabsProps {
    data: ITab[]
}
export default function Tabs({data}: TabsProps) {
    const [activeTab, setActiveTab] = useState(0)
    return <div></div>
}