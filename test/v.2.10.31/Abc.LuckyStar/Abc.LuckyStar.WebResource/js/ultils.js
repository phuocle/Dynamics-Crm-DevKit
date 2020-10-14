//@ts-check
var shared = (function () {
    //const
    const EMPTY_GUID = "00000000-0000-0000-0000-000000000000";
    //sync func
    function isNullOrUndefined(value) {
        if (value === null) return true;
        if (value === undefined) return true;
        return false;
    }
    //async func

    //return value
    return {
        //const
        EMPTY_GUID: EMPTY_GUID,
        //sync func
        IsNullOrUndefined: isNullOrUndefined,
        //async func
    }
})();