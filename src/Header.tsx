export interface Props {
    title: string
    color?: string
}

const Header = (props: Props) => {
    return (
        <div style={{ color: props.color ? props.color : 'blue' }}>
            {props.title}
        </div>
    )
}

export default Header