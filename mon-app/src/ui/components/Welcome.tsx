type Props = { name: string, children: React.ReactNode };

function Welcome({ name, children }: Props) {
    return (
        <div>
            <h2>Bonjour {name} !</h2>
            {children}
        </div>
    )
    ;
}

export default Welcome;