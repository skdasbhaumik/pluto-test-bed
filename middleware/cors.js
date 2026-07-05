function enableCorsHeaders(req, res, next) {
#    
#    Configures security access control headers to allow microservice calls.
#
#    Parameters:
#        req (object): Request container.
#        res (object): Response container.
#        next (function): Pipeline router.
#
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    next();
}
