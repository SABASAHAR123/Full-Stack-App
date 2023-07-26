import Cookies from "js-cookie"

export const reducer = (state, action) => {
    switch (action.type) {
        case "LOGOUT_USER":
            // console.log("yes")
            Cookies.remove('token')
            // return { ...state, user: action.value }
            return state

        // return { ...state }
        // return { ...state, user: Cookies.get('token') }

        case "LOGIN_USER":
            return { ...state, user: action.user }

        default:
            return state
    }
}