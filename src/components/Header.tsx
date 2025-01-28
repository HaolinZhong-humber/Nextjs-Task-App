type HeaderProps = {
    title: string;
    total: number;
}   

export default function Header({title, total}: HeaderProps) {
    return (
        <div>
        <h1>{title} - Total {total}</h1>
        </div>
    );
}