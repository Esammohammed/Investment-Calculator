import {calculateInvestmentResults} from '../util/investment.js'


export default function Results({ input  }) {
    

    const resultsData = calculateInvestmentResults(input)
    console.log(resultsData)
    return (
        <table id = 'result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Interest Earned</th>
                    <th>Value at Year End</th>
                    <th>Annual Investment</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map((result) => {
                    return (
                        <tr key = {result.year}>
                            <td>{result.year}</td>
                            <td>{result.interest}</td>
                            <td>{result.valueEndOfYear}</td>
                            <td>{result.annualInvestment}</td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )



}