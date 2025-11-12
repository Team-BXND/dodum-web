export function findColor(props: any) {
    if (props.color) {
        if (props.color == "primary") {
            return props.theme.textPrimary;
        } 
        else if (props.color == "secondary") {
            return props.theme.textSecondary;
        }
        else {
            return props.color;
        }
    } else {
        return props.theme.textPrimary;
    }
}