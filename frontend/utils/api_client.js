function checkSession() {
#    
#    Verifies if a valid secure token is cached in local browser storage.
#
#    Returns:
#        boolean: True if user token is active.
#
    return !!localStorage.getItem("user_token");
}
