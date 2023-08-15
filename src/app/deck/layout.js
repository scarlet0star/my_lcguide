import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function DeckLayout(props) {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen font-sans">
        <div className="h-[80vh] mx-auto px-4">
          <div className="grid grid-cols-4 gap-4">
            <div className="my-3 col-span-3 bg-white rounded shadow p-6">
              {props.children}
            </div>

            <div className="my-3 col-span-1 bg-white p-6 rounded shadow">
              <div className="mb-4 ">{props.search}</div>
            </div>
          </div>
          {props.detail}
        </div>
      </div>
    </DndProvider>
  );
}
