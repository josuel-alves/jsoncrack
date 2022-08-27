import React from "react";
import {
  ReactZoomPanPinchRef,
  TransformComponent,
  TransformWrapper,
} from "react-zoom-pan-pinch";
import { Canvas, EdgeData, ElkRoot, NodeData, NodeProps } from "reaflow";
import { CustomNode } from "src/components/CustomNode";
import { NodeModal } from "src/containers/Modals/NodeModal";
import {
  getEdgeNodes,
  getLayoutedElements,
} from "src/containers/Editor/LiveEditor/helpers";
import useConfig from "src/hooks/store/useConfig";
import styled from "styled-components";
import shallow from "zustand/shallow";
import ReactFlow from "react-flow-renderer";
import { TextNode } from "./TextNode";
import { ObjectNode } from "./ObjectNode";

interface LayoutProps {
  isWidget: boolean;
  openModal: () => void;
  setSelectedNode: (node: object) => void;
}

const StyledEditorWrapper = styled.div<{ isWidget: boolean }>`
  position: absolute;
  width: 100%;
  height: ${({ isWidget }) => (isWidget ? "100vh" : "calc(100vh - 36px)")};
  background: ${({ theme }) => theme.BACKGROUND_SECONDARY};

  :active {
    cursor: move;
  }

  rect {
    fill: ${({ theme }) => theme.BACKGROUND_NODE};
  }
`;

const MemoizedGraph = React.memo(function Layout({
  isWidget,
  openModal,
  setSelectedNode,
}: LayoutProps) {
  const json = useConfig((state) => state.json);
  const [nodes, setNodes] = React.useState<NodeData[]>([]);
  const [edges, setEdges] = React.useState<EdgeData[]>([]);
  const [size, setSize] = React.useState({
    width: 2000,
    height: 2000,
  });

  const setConfig = useConfig((state) => state.setConfig);
  const [expand, layout] = useConfig(
    (state) => [state.expand, state.layout],
    shallow
  );

  React.useEffect(() => {
    const { nodes, edges } = getEdgeNodes(json, expand);

    setNodes(getLayoutedElements(nodes, edges, layout).nodes);
    setEdges(getLayoutedElements(nodes, edges, layout).edges);
  }, [json, expand, layout]);

  const onInit = (ref: ReactZoomPanPinchRef) => {
    setConfig("zoomPanPinch", ref);
  };

  const onCanvasClick = () => {
    const input = document.querySelector("input:focus") as HTMLInputElement;
    if (input) input.blur();
  };

  const onLayoutChange = (layout: ElkRoot) => {
    if (layout.width && layout.height)
      setSize({ width: layout.width, height: layout.height });
  };

  const handleNodeClick = React.useCallback(
    (e: React.MouseEvent<SVGElement>, props: NodeProps) => {
      setSelectedNode(props.properties.text);
      openModal();
    },
    [openModal, setSelectedNode]
  );

  const node = React.useCallback(
    (props) => (
      <CustomNode onClick={(e) => handleNodeClick(e, props)} {...props} />
    ),
    [handleNodeClick]
  );

  return (
    <StyledEditorWrapper isWidget={isWidget}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{
          textNode: TextNode,
          objectNode: ObjectNode,
        }}
        fitView
        onlyRenderVisibleElements
      />
    </StyledEditorWrapper>
  );
});

export const Graph = ({ isWidget = false }: { isWidget?: boolean }) => {
  const [isModalVisible, setModalVisible] = React.useState(false);
  const [selectedNode, setSelectedNode] = React.useState<object>({});

  const openModal = React.useCallback(() => setModalVisible(true), []);

  return (
    <>
      <MemoizedGraph
        openModal={openModal}
        setSelectedNode={setSelectedNode}
        isWidget={isWidget}
      />
      {!isWidget && (
        <NodeModal
          selectedNode={selectedNode}
          visible={isModalVisible}
          closeModal={() => setModalVisible(false)}
        />
      )}
    </>
  );
};
