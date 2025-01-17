// Middleware
const checkBoolean = (is_favorite) => {
    if(typeof is_favorite === "boolean"){
      return is_favorite  
    }
    

    if (is_favorite === "false") {
        return false
    } else if (is_favorite === "true"){
        return true
    }
}

const checkRequest = (req, res, next) => {

   const is_favorite= checkBoolean(req.body.is_favorite)

    if (
        req.body.time && 
        req.body.name && 
        req.body.artist && 
        typeof is_favorite === "boolean"
        ) {
        return next();
    } else {
        res.status(400).json({ error: "Body is missing information or body is not present at all"})
    }
};

const checkId = (req, res, next) => {
    if (req.params.id) {
       return next();
    } else {
        res.status(400).json({ error: "Body is missing information or body is not present at all"});
    };
};

const validateURL = (req, res, next) => {
    if (
      req.body.url.substring(0, 7) === "http://" ||
      req.body.url.substring(0, 8) === "https://"
    ) {
      return next();
    } else {
      res
        .status(400)
        .json({ error: `You forgot to start your url with http:// or https://` });
    };
  };

module.exports = {
    checkRequest,
    checkId,
    validateURL
}