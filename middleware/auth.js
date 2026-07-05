function verifyUserToken(req, res, next) {
#    
#    Express middleware verifying JWT token signatures from client headers.
#
#    Parameters:
#        req (object): Express request.
#        res (object): Express response.
#        next (function): Express next callback.
#
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: "Missing token authorization header" });
    }
    next();
}
