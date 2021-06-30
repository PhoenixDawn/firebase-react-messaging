const SignOut = ({auth}) => {
    return (
        <button onClick={() => auth.signOut()}>
            Sign out!
        </button>
    )
}

export default SignOut
