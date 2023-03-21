"use client";
import WidgetNavContainer from "@/components/WidgetNavContainer";
import WidgetArea from "@/components/WidgetArea";

export default function Home() {
    return (
        <div className="flex flex-col">
            <main className="h-[90vh] flex">
                <WidgetArea />
            </main>
            <nav id="widget-nav-horizontal" className="flex justify-center">
                <WidgetNavContainer />
            </nav>
        </div>
    );
}
