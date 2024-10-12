import { useState, useEffect, useRef } from "react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import ReactGridLayout from "react-grid-layout";

const GridLayout = () => {
  const [containerWidth, setContainerWidth] = useState(1400);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const updateWidth = () => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const layout = [
    { i: "1", x: 0, y: 0, w: 2, h: 2 },
    { i: "2", x: 2, y: 0, w: 2, h: 2 },
    { i: "3", x: 4, y: 0, w: 2, h: 2 },
    { i: "4", x: 0, y: 2, w: 2, h: 2 },
    { i: "5", x: 2, y: 2, w: 2, h: 2 },
  ];

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-yellow-400 flex items-center justify-center">
        <span>Left Sidebar</span>
      </div>

      <div
        ref={containerRef}
        className="flex-grow p-4 border-l border-r border-red-500 overflow-hidden"
      >
        <ReactGridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={100}
          width={containerWidth}
        >
          <div
            key="1"
            className="bg-sky-900 flex items-center justify-center text-white rounded-lg shadow-lg"
          >
            Item 1
          </div>
          <div
            key="2"
            className="bg-green-300 flex items-center justify-center text-white rounded-lg shadow-lg"
          >
            Item 2
          </div>
          <div
            key="3"
            className="bg-red-300 flex items-center justify-center text-white rounded-lg shadow-lg"
          >
            Item 3
          </div>
          <div
            key="4"
            className="bg-yellow-300 flex items-center justify-center text-white rounded-lg shadow-lg"
          >
            Item 4
          </div>
          <div
            key="5"
            className="bg-pink-300 flex items-center justify-center text-white rounded-lg shadow-lg"
          >
            Item 5
          </div>
        </ReactGridLayout>
      </div>
      <div className="w-64 bg-yellow-400 flex items-center justify-center">
        <span>Right Sidebar</span>
      </div>
    </div>
  );
};

export default GridLayout;
