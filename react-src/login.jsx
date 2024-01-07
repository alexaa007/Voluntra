function Login() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>Login</button>
        </div>
    )
}