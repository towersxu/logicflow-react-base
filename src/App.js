import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import { useEffect, useRef } from "react";

export default function App() {
  const refContainer = useRef();
  useEffect(() => {
    const logicflow = new LogicFlow({
      container: refContainer.current,
      grid: true,
      width: 1000,
      height: 500
    });
    logicflow.render({
      nodes: [
        {
          id: "3",
          type: "rect",
          x: 200,
          y: 200
        },
        {
          id: "4",
          type: "rect",
          x: 400,
          y: 300
        }
      ],
      edges: [
        {
          sourceNodeId: "3",
          targetNodeId: "4",
          type: "bezier"
        }
      ]
    });
  }, []);
  return <div className="App" ref={refContainer}></div>;
}
