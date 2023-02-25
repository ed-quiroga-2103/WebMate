import { useState } from 'react';

export const SVGButton = (props) => {
    const [clicked, setClicked] = useState(false);

    const squeezePercentage = props.squeeze
        ? props.squeezePercentage
            ? 1 - props.squeezePercentage
            : 0.9
        : 1;

    return (
        <div>
            <button
                style={
                    props.offsetY
                        ? {
                              top: props.offsetY,
                          }
                        : {}
                }
                className={props.className}
                onMouseDown={() => {
                    setClicked(true);
                }}
                onMouseUp={() => {
                    setClicked(false);

                    if (props.onMouseClick) props.onMouseClick();
                }}
            >
                <props.icon
                    id="button"
                    style={{
                        height:
                            !clicked && props.squeeze
                                ? props.height
                                : props.height * squeezePercentage,
                        width:
                            !clicked && props.squeeze
                                ? props.width
                                : props.width * squeezePercentage,
                    }}
                />
                <span>{props.children}</span>
            </button>
        </div>
    );
};


export const GraphToolbar = (props) => {
    const children = [];

    const y = 0;

    const formattedChildren = props.children
        ? Array.isArray(props.children)
            ? props.children
            : [props.children]
        : [];

    let offsetY = 0;
    for (const child of formattedChildren) {
        children.push(
            <SVGButton
                key={offsetY}
                className="toolBarButton"
                width={child.props.width}
                height={child.props.height}
                icon={child.props.icon}
                onMouseClick={child.props.onMouseClick}
                offsetY={offsetY}
                squeezePercentage={child.props.squeezePercentage}
                squeeze={child.props.squeeze}
            >
                {child.props.children}
            </SVGButton>
        );
        offsetY += props.buttonVerticalPadding
            ? child.props.height + props.buttonVerticalPadding
                ? props.buttonVerticalPadding
                : 0
            : child.props.height;
    }

    return <div className={props.className}>{children}</div>;
};
