const User = ({userASD}) => {
    // console.log(props);
    const {name} = userASD;
    return (
        <div>
            <div>name: {name}</div>
        </div>
    );
};

export {User};