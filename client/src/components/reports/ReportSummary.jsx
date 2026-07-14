import "./ReportSummary.css";

function ReportSummary() {
  return (
    <div className="summary-card">

      <div className="summary-header">
        <h2>Report Summary</h2>

        <div className="report-buttons">
          <button className="pdf-btn">📄 Export PDF</button>
          <button className="csv-btn">📊 Export CSV</button>
        </div>
      </div>

      <table className="summary-table">

        <thead>
          <tr>
            <th>Category</th>
            <th>Tickets</th>
            <th>Resolved</th>
            <th>Pending</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Hardware</td>
            <td>42</td>
            <td>35</td>
            <td>7</td>
          </tr>

          <tr>
            <td>Software</td>
            <td>55</td>
            <td>48</td>
            <td>7</td>
          </tr>

          <tr>
            <td>Network</td>
            <td>36</td>
            <td>28</td>
            <td>8</td>
          </tr>

          <tr>
            <td>Email</td>
            <td>21</td>
            <td>18</td>
            <td>3</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default ReportSummary;