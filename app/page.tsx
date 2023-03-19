import WidgetNavContainer from "@/components/WidgetNavContainer";
import WidgetArea from "@/components/WidgetArea";

function Home() {
    return (
        <div className="flex">
            <div className="h-full">
                <WidgetNavContainer />
            </div>
            <div className="flex-auto">
                <div className="flex-col">
                    <button>dsafsa</button>
                </div>
                <div className="flex-col h-full w-full">
                    <WidgetArea />
                </div>
            </div>
        </div>
    );
}

export default Home;
