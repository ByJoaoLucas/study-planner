export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('study-planner-state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (error) {
        console.error('Error loading state do localStorage:', error);
        return undefined;
    }
};

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('study-planner-state', serializedState);
    } catch (error) {
        console.error('Error saving state do localStorage:', error);
    }
};

export const throttle = (func, delay) => {
    let timeoutId;
    let lastExecutionTime = 0;
    return function(...args){
        const currentTime = Date.now();
        if (currentTime - lastExecutionTime > delay) {
            func.apply(this,args);
            lastExecutionTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(this,args);
                lastExecutionTime = Date.now();
            }, delay - (currentTime - lastExecutionTime));
        }
    };
};
