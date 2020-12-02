const thunkDispatcher = async ({promise,success,fetchLoading,fetchFailure,dispatch})=>{
    dispatch(fetchLoading);
    try {
        const resp = await Promise.resolve(promise);
        dispatch(success(resp.data));
    } catch (err) {
        dispatch(fetchFailure(err));
    }
}

export default thunkDispatcher;