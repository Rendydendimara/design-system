import useHover from "hooks/useHover";
import { CSSProperties } from "react";
import { mapIconType } from "./mapIconType";

type Props = {
    icon: Partial<keyof typeof mapIconType> | React.ReactNode,
    className?: string,
    color?: string,
    hoverColor?: string,
    size?: number,
    useHoverFn?: boolean,
    cursor?: string,
    styles?: CSSProperties
    onClick?: React.MouseEventHandler
    notclickable?: boolean
};

const Icon = ({
    icon,
    className,
    color,
    hoverColor,
    size,
    useHoverFn,
    cursor,
    styles,
    onClick,
    notclickable,
}: Props) => {
    const [ref, isHovered] = useHover();
    
    return (
        <div ref={ref}
            className={className}
            style={{
                ...styles,
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                color: useHoverFn && isHovered ? hoverColor : color,
                fontSize: size,
                cursor: cursor,
                pointerEvents: notclickable === true ? 'none' : 'auto'
            }}
            // className={className}
            onClick={onClick}
        >
            {mapIconType[icon as keyof typeof mapIconType] ?? icon}
        </div>
    );
};

export default Icon;

Icon.defaultProps = {
    color: "#686D8E",
    size: 16,
    useHoverFn: false,
    hoverColor: "#118CFF",
    cursor: 'pointer',
};