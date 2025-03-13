import { DndContext, closestCorners } from "@dnd-kit/core";
import Workspaces from "../../components/Workspaces";
import { SortableContext } from "@dnd-kit/sortable";

const Home: React.FC = () => {
  return (
    <div>
      <Workspaces>
        <DndContext
          collisionDetection={closestCorners}
        >
          {/* <SortableContext>
            
          </SortableContext> */}

        </DndContext>
      </Workspaces>
    </div>
  );
};

export default Home;
