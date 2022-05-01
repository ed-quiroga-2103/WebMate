import ForceGraph2D from 'react-force-graph-2d';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { GraphOverlay } from './GraphOverlay';

import * as d3 from 'd3';

interface IGraph2DProps {
    singleClick: (params) => any;
    doubleClick: () => any;
    arrowLength: number;
    linkLength?: number;
    nodeSize: number;
    linkWidth: number;
    graphDataInput: {
        nodes: any[];
        links: any[];
    };
}

export const Graph2D: FC<IGraph2DProps> = ({
    singleClick,
    doubleClick,
    arrowLength,
    linkLength,
    graphDataInput,
    nodeSize,
    linkWidth,
}) => {
    const fgRef = useRef<any>();
    const [centered, setCentered] = useState(true);

    const [highlightNodes, setHighlightNodes] = useState(new Set());
    const [highlightLinks, setHighlightLinks] = useState(new Set());

    const [graphData, setGraphData] = useState(graphDataInput);

    const [offTicks, setOffTicks] = useState(Infinity);

    const [hoverNode, setHoverNode] = useState(null);

    const onStop = () => {
        if (fgRef.current && !centered) {
            fgRef.current.zoomToFit(700, 100);
            setCentered(true);
        }
    };

    const handleNodeHover = (node: any) => {
        highlightNodes.clear();
        highlightLinks.clear();
        if (node) {
            highlightNodes.add(node);
        }

        setHoverNode(node || null);
        updateHighlight();
    };

    const onZoomToFit = async () => {
        if (fgRef.current) {
            fgRef.current.zoomToFit(700, 100);
        }
    };

    const paintRing = useCallback(
        (node, ctx) => {
            // add ring just for highlighted nodes
            ctx.beginPath();
            ctx.arc(node.x, node.y, nodeSize, 0, 2 * Math.PI, false);
            ctx.fillStyle =
                node === hoverNode ? 'red' : node.available ? 'green' : 'red';
            ctx.fill();
            ctx.beginPath();

            ctx.arc(node.x, node.y, nodeSize, 0, 2 * Math.PI, false);
            ctx.fillStyle =
                node === hoverNode ? 'blue' : node.available ? 'green' : 'red';
            ctx.fill();

            ctx.font = '5px sans-serif';
            ctx.fillStyle = '#000000';
            ctx.fillText(
                node.label ? node.label : node.id,
                node.x,
                node.y,
                1000
            );
        },
        [hoverNode]
    );

    let clicks: number[] = [];
    let timeout: any;
    function clickHandler(event: any) {
        clicks.push(new Date().getTime());
        window.clearTimeout(timeout);
        timeout = window.setTimeout(() => {
            if (
                clicks.length > 1 &&
                clicks[clicks.length - 1] - clicks[clicks.length - 2] < 500
            ) {
                doubleClick();
            } else {
                singleClick(event);
            }
            clicks = [];
        }, 250);
    }

    const updateHighlight = () => {
        setHighlightNodes(highlightNodes);
        setHighlightLinks(highlightLinks);
    };

    useEffect(() => {
        if (linkLength) {
            fgRef.current.d3Force('link', d3.forceLink().distance(linkLength));
            setOffTicks(500);
            setTimeout(onStop, 1000);
        }
    }, []);

    const navigate = useNavigate();

    return (
        <div>
            <GraphOverlay
                onZoomToFit={onZoomToFit}
                onBack={() => {
                    navigate('/courses');
                }}
            ></GraphOverlay>

            <ForceGraph2D
                ref={fgRef}
                nodeRelSize={nodeSize}
                graphData={graphData}
                cooldownTicks={offTicks}
                onEngineStop={onStop}
                linkDirectionalArrowLength={arrowLength}
                linkDirectionalArrowRelPos={1}
                onNodeClick={clickHandler}
                nodeCanvasObject={(node, ctx) => {
                    paintRing(node, ctx);
                }}
                onNodeHover={handleNodeHover}
                linkWidth={linkWidth}
                linkColor="black"
            />
        </div>
    );
};
