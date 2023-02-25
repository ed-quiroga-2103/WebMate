import { GraphToolbar, SVGButton } from '../SVGButton';
import { ReactComponent as Back } from '../../assets/back-new.svg';
import { ReactComponent as ZoomToFit } from '../../assets/graph.svg';
import { ReactComponent as Test } from '../../assets/test.svg';

export const GraphOverlay = (props) => {
    return (
        <div style={{ zIndex: 1, position: 'absolute' }}>
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
            ></SVGButton>
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
                ></SVGButton>
                <SVGButton
                    className="toolBarButton"
                    width={80}
                    height={80}
                    icon={Test}
                    onMouseClick={() => {
                        props.onTest();
                    }}
                    squeezePercentage={0.04}
                    squeeze={true}
                ></SVGButton>
            </GraphToolbar>
        </div>
    );
};
