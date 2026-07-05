function requestLogger(req, res, next) {
#    
#    Middleware logging all incoming API request paths, HTTP methods, and durations.
#
#    Parameters:
#        req (object): Request object.
#        res (object): Response object.
#        next (function): Callback loop driver.
#
    console.log(`[Middleware API] ${req.method} request received at ${req.path}`);
    next();
}
