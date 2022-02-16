import { FC } from 'react';
import { GraphToolbar, SVGButton } from '../SVGButton';
import { ReactComponent as Back } from '../../assets/back-new.svg';
import { ReactComponent as ZoomToFit } from '../../assets/graph.svg';

interface IGraphOverlayProps {
    onZoomToFit: () => void;
    onBack: () => void;
}
export const GraphOverlay: FC<IGraphOverlayProps> = (props) => {
    return (
        <div>
            <SVGButton
                className="backButton"
                width={80}
                height={80}
                icon={Back}
                onMouseClick={() => {
                    props.onBack();
                }}
                squeezePercentage={0.04}
                squeeze={true}
            >
                Back
            </SVGButton>
            <GraphToolbar className="toolBar" buttonVerticalPadding={130}>
                <SVGButton
                    className="toolBarButton"
                    width={80}
                    height={80}
                    icon={ZoomToFit}
                    onMouseClick={() => {
                        props.onZoomToFit();
                    }}
                    squeezePercentage={0.04}
                    squeeze={true}
                >
                    Center
                </SVGButton>
            </GraphToolbar>
        </div>
    );
};
