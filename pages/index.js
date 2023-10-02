import { useState, useEffect } from "react";
import styles from "./index.module.css"

const Yo = () => {

    const [results, setResults] = useState({results: []})
    const [disabled, setDisabled] = useState(false)
    const [value, setValue] = useState("https://tutorial.math.lamar.edu/Classes/DE/Vibrations.aspx")
    const getStuff = async () => {
        setDisabled(true)
        try {
            let response = await fetch("http://localhost:3000/api/secret_place", {
                method: "POST",
                body: JSON.stringify({
                    query: value,
                }),
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                },
            });
            response = await response.json()
            setResults(response)
            setDisabled(false)
        } catch (errorMessage) {
            setResults(errorMessage)
            setDisabled(false)
        }
    }

    const onChange = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        getStuff()
    }, [])

    return <div className={styles.wrapper}>
        <h1>Specificity</h1>
        <p>It's hard to tell google that you're studing graph theory, but SPECIFICALLY graph theory where you don't have all of the information at the same time, and IN PARTICULAR you're having trouble with proving the correctness of some otherwise vanilla algorithms, like k-edge connectivity, or minimum spanning tree.</p>
        <p>Search engines will give you websites that have your search query copied word-for-word, but they're bad at generalization at the "give me similar problems" level. They'll also give you a bunch of differential equations websites, but you click on a few and realize you need to ask it again to give you problems of the mass-and-spring variety.</p>
        <p>Think no further! Put in a website that you're using for study problems, or whatever you want to see more of, and we'll give you 10 websites with similar content.</p>
        <div className={styles.input} >
            <input onChange={onChange} value={value} ></input>
            <button onClick={getStuff} disabled={disabled}>Search!</button>
        </div>
        
        <ol className={styles.urls}>{results.error ? <>{results.error}</> : results.results.map(c => <li><a href={c.url}>{c.url}</a></li>)}</ol>
    </div>
}

export default Yo