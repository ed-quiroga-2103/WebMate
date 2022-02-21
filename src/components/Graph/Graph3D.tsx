import ForceGraph3D from 'react-force-graph-3d';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import data from '../../utils/data/exampleGraph';
import { GraphOverlay } from './GraphOverlay';
import * as THREE from 'three';

interface IGraph3DProps {
    data: {
        nodes: any[];
        links: any[];
    };
}

const graphData = data;

export const Graph3D: FC<IGraph3DProps> = (props) => {
    const fgRef = useRef(null);
    const [centered, setCentered] = useState(false);
    const [highlightNodes, setHighlightNodes] = useState(new Set());
    const [highlightLinks, setHighlightLinks] = useState(new Set());

    const [hoverNode, setHoverNode] = useState(null);

    const onStop = () => {
        if (fgRef.current && !centered) {
            fgRef.current.zoomToFit(700, 100);
            setCentered(true);
        }
    };

    const onZoomToFit = async () => {
        if (fgRef.current) {
            fgRef.current.zoomToFit(700, 100);
        }
    };

    const handleNodeHover = (node) => {
        highlightNodes.clear();
        highlightLinks.clear();
        if (node) {
            highlightNodes.add(node);
        }

        setHoverNode(node || null);
        updateHighlight();
    };

    const paintRing = useCallback(
        (node, ctx) => {
            // add ring just for highlighted nodes
            ctx.beginPath();
            ctx.arc(node.x, node.y, 12, 0, 2 * Math.PI, false);
            ctx.fillStyle =
                node === hoverNode ? 'red' : node.available ? 'green' : 'red';
            ctx.fill();
            ctx.beginPath();

            ctx.arc(node.x, node.y, 10, 0, 2 * Math.PI, false);
            ctx.fillStyle =
                node === hoverNode ? 'blue' : node.available ? 'green' : 'red';
            ctx.fill();

            ctx.font = '5px sans-serif';
            ctx.fillStyle = '#000000';
            ctx.fillText(node.label, node.x, node.y, 100);
        },
        [hoverNode]
    );
    function singleClick(event) {
        console.log('single');
    }

    function doubleClick(event) {
        console.log('double');
    }

    let clicks = [];
    let timeout;
    function clickHandler(event) {
        clicks.push(new Date().getTime());
        window.clearTimeout(timeout);
        timeout = window.setTimeout(() => {
            if (
                clicks.length > 1 &&
                clicks[clicks.length - 1] - clicks[clicks.length - 2] < 150
            ) {
                doubleClick(event.target);
            } else {
                singleClick(event.target);
            }
        }, 250);
    }

    const updateHighlight = () => {
        setHighlightNodes(highlightNodes);
        setHighlightLinks(highlightLinks);
    };

    return (
        <div>
            <GraphOverlay
                onZoomToFit={onZoomToFit}
                onBack={() => {
                    console.log('back');
                }}
            ></GraphOverlay>{' '}
            <ForceGraph3D ref={fgRef} nodeRelSize={12} graphData={props.data} />
        </div>
    );
};
