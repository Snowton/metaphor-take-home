
export default async (req, res) => {
    try {
        const url = req.body.query
        let domain = req.body.query.split("/")
        domain = domain.length > 2 ? domain[2] : ""
        const _data = {
            url: req.body.query,
            numResults: 10,
            excludeDomains: [domain]
        }
        const resp = await fetch('https://api.metaphor.systems/findSimilar', {
            method: "POST",
            body: JSON.stringify(_data),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                "x-api-key": process.env.API_KEY
            }
        })
        const repo = await resp.json()
        res.json(repo);
    } catch (e) {
        console.error(e);
        throw new Error(e).message;
    }
}